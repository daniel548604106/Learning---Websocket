const wsServerURL = 'ws://localhost:8080/';

const ws = new WebSocket(wsServerURL);
console.log(ws);

ws.addEventListener('open', function () {
  console.log('連結建立成功。');
});

ws.addEventListener('close', function () {
  console.log('連結關閉，咱們下次見~');
});

// 後端一定要使用字串傳輸，不可以直接傳 JSON
ws.addEventListener('message', function (e) {
  const msg = JSON.parse(e.data);
  console.log(msg);

  setTimeout(function () {
    var testMsg = { name: 'August', blog: "Let's Write" };
    ws.send(JSON.stringify(testMsg));
  }, 1000);
});

// 前端可以自己斷開連結
// setTimeout(function() {
//     ws.close()
//   }, 5000)
