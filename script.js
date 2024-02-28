const express= require('express');
const app = express();

app.get('/', function(req,res){
  res.send("hello aneesh ");
})

app.get('/homee', function(req,res){
  res.send("this is a homee page");
})
app.get('/home', function(req,res){
  res.send("this is a home page");
})

app.listen(3001);