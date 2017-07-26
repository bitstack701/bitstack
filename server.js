const express = require('express')
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.get('/', function(req, res){
  res.send('<h1>Welcome to bitstack.co.za</h1>');
});

app.get('/api/test', function(req, res){
  res.json({message: "HelloWorld"});
});

const serverState = {}

io.on('connection', (socket) => {
  const socketId = socket.id

  console.log(`a user connected socket.id: ${socketId}`)

  socket.on('I am', (user) => {
    console.log(`[${socket.id}] I am`, user.handle);
    serverState[socketId] = {
      socketId,
      handle: user.handle,
      positions: []
    }
  });

  socket.on('disconnect', () => {
    console.log(`[${socket.id}] disconnected`);
    delete serverState[socketId]
  });

  socket.on('chat message', (msg) => {
    console.log(`[${socket.id}] message: ${msg}`);
    socket.broadcast.emit('chat message', msg)
  });

  socket.on('position updated', (position) => {
    console.log(`[${socket.id}] position updated`, position);
    const user = serverState[socketId]
    if (user) {
      user.positions.push(position)
      socket.broadcast.emit('position updated', {
        handle: user.handle,
        position
      })
    }
  });
})

http.listen(3010, function(){
  console.log('listening on *:3010');
});