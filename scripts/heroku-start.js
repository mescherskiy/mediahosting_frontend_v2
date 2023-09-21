const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// const proxy = httpProxy.createProxyServer();

// const backendProxy = createProxyMiddleware('/api', {
//   target: 'https://media-hosting-beedbd9a2f9f.herokuapp.com/api',
//   changeOrigin: true,
// })

// const frontendProxy = createProxyMiddleware('/', {
//   target: 'https://media-hosting-frontend-f78dea537f96.herokuapp.com',
//   changeOrigin: true,
// })

// app.use("/api", backendProxy);
// app.use("/", frontendProxy);
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'build')));
app.get('/', function(req,res){
  res.sendFile(path.join(__dirname, '..', 'build'));
});
// app.all('/api/*', (req, res) => {
//   const backendURL = 'https://media-hosting-beedbd9a2f9f.herokuapp.com';
//   proxy.web(req, res, { target: backendURL });
// });
app.get('*', function(req,res){
  res.sendFile(path.join(__dirname, '..', 'build/index.html'));
});
app.listen(port, ()=>{
  console.log("Server is running on port: ", port)
})