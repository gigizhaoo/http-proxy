let express = require('express');
let path = require('path');
let expressHttpProxy = require('express-http-proxy');
let vertify = require('./jwt-vertification').vertify;

const config = require(path.resolve(__dirname, 'proxy-conf.js'));
const port = config.port || 80;
const proxyConfig = config.proxy || {};

let app = express();

Object.keys(proxyConfig).forEach(key => {
  app.use(key, expressHttpProxy(
    proxyConfig[key].target,
    {
      ...proxyConfig[key],
      filter: function(req, rep) {
        // const isVerified = vertify();
        // if (!isVerified) {
        //   rep.send('verify failed');
        // }
        return true;
    }}
  ));
});

app.listen(port, () => {
  console.log(`The project is running at ${port}`);
});


