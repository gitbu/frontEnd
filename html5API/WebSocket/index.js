var WebSocketServer = require('ws').Server;

var ws = new WebSocketServer({
  host: '127.0.0.1',
  port: 2000
})

ws.on('connection', (wsocket) => {
  wsocket.on('message', (msg) => {
    console.log(msg)
    wsocket.send('你好!')
  })
  wsocket.on('error', (err) => {
    console.log(err)
  })
  wsocket.on('close', () => {})
  wsocket.on('open', () => {
    console.log('已连接')
  })
})




