var request = require('request');
const express = require('express');

const app = express();
app.get(['/app.html'], function(req,res) {
  request(`http://localhost:80/${req.path}`).pipe(res);
});
app.get(['/google.com'], function(req,res) {
  request(`https://google.com`).pipe(res);
});
app.listen(3375);

const appLocal = express();
appLocal.use(express.static('public'))
appLocal.listen(80);

const appNot80 = express();
appNot80.use(express.static('public'))
appNot80.listen(8080);

console.log('listening...')