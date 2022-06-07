var express = require('express');
var fs = require('fs');

var initialData = fs.readFileSync('../initialDB.json');

var uniList = JSON.parse(initialData);

var app = express();

app.get('/unis', showUniList);

app.get('/', function(req,res) {
res.end('Welcome to Universities app');
});

function showUniList(req,res) {
  var data = [];
  uniList.forEach(function(uni) {
  var info = {
    id : uni.id,
    title: uni.title
  };

  data.push(info);
});
var result = {
  count : data.length,
  data : data
};
res.send(result);
}
app.listen(3000);