
  const app = require('express')();

  var http = require('http').createServer(app);
  var io = require('socket.io')(http);
  //var port = process.env.PORT || 3000;

  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });

  http.listen(3000, () => {
      console.log('listening on *:3000');
    });




  

