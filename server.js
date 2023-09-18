const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = process.env.PORT || 3000;

const backendProxy = createProxyMiddleware('/api', {
    target: 'https://media-hosting-beedbd9a2f9f.herokuapp.com/api',
    changeOrigin: true,
})

const frontendProxy = createProxyMiddleware('/', {
    target: 'https://media-hosting-frontend-f78dea537f96.herokuapp.com',
    changeOrigin: true,
})

app.use('/api', backendProxy);
app.use('/', frontendProxy);
app.use(express.static(__dirname + '/build'));
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/build.index.html');
});
app.listen(port, () => {
    console.log(`Сервер запущен на порту: ${port}`);
})