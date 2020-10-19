let express = require('express');
let app = express();

app.get('/', function(req, res) {
  res.send('hello word, here is localhost:10881')
})

app.listen(10881, () => {
  console.log(`The proxy server is running at ${10881}`);
});


