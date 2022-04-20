const express = require('express')
const app = express()
const port = 3000

app.get('/users', (req, res) => {
  res.send('USERS')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// var fs = require('fs');

// function readFile(fileName){
//     var file = fs.readFileSync(fileName, "utf-8");
//     return file;
// }

// var f = readFile("./person.json");


// console.log(JSON.parse(f));
