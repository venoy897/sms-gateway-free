const http = require('http');
const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer({});

const server = http.createServer((req, res) => {
  proxy.web(req, res, { target: 'http://localhost:8080' });
});

console.log("WebSocket proxy listening on port 80");
server.listen(80);
