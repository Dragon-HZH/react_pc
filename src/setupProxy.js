const proxy = require("http-proxy-middleware");


module.exports = function(app) {
  app.use(
      
    proxy.createProxyMiddleware('/api', { 
       target: 'https://ufp.baiwangai.com',
       secure: false,
       changeOrigin: true,
       pathRewrite: {
        "^/api": "/"
       },
    })
);
};