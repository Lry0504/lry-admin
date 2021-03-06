const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/api', { 
    target: 'http://api.map.baidu.com',
    secure: false,
    changeOrigin: true,
    pathRewrite: {
     "^/api": "/"
    },
   }));
  //  app.use(proxy('/apc', { 
  //   target: 'http://172.19.5.34:9531',
  //   secure: false,
  //   changeOrigin: true,
  //   pathRewrite: {
  //    "^/apc": "/"
  //   },
  //  }));
};