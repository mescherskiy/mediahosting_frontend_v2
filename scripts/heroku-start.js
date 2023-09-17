const express = require('express');
const path = require('path');
const app = express();
const httpProxy = require('http-proxy');
const port = process.env.PORT || 3000;

const proxy = httpProxy.createProxyServer();

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'build')));
app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});
app.all('/api/*', (req, res) => {
  const backendURL = 'https://media-hosting-beedbd9a2f9f.herokuapp.com';
  proxy.web(req, res, { target: backendURL });
});
app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});
app.listen(port, ()=>{
  console.log("Server is running on port: ", port)
})