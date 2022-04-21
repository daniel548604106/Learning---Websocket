const WebSocket = require('ws');

const wss = new WebSocket.Server({
  port: 8080,
});

wss.on('connection', function connection(ws) {
  const data = { name: 'August', blog: "Let's Write" };
  setTimeout(function () {
    ws.send(JSON.stringify(data));
  }, 10000);

  ws.on('message', function incoming(message) {
    console.log(JSON.parse(message));
  });
});
