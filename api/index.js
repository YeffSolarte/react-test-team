'use strict';

const port = 3800;
const app = require('./app');

app.listen(port, function () {
  console.log("server http://localhost:3800");
});
