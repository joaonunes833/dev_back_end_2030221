const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var fs = require('fs');
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

function readFile(fileName){
  var file = fs.readFileSync(fileName, "utf-8");
  return file;
}

var file = readFile("./person.json");
var fileJSON = JSON.parse(file);

app.get('/', (req, res) => {
  res.send('Hello world.');
})

app.get('/users', (req, res) => {
  res.send(fileJSON);
})

app.post('/users', (req, res) => {
  var person = req.body;

  var fileStr = readFile('./person.json');

  var fileObj = JSON.parse(fileStr);

  var size = Object.keys(fileObj).length

  person.id = ++size;

  fileObj.person5 = person;
  res.send(JSON.stringify(fileObj));
})

app.delete('/users', (req, res) => {
  res.send('this is a DELETE.');
})

app.put('/users', (req, res) => {
  res.send('this is a PUT.');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})





