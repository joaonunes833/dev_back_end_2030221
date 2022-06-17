// modules
var fs = require('fs')
const express = require('express')
const app = express()
const port = 3000

// Middleware para converter o body para JSON
const bodyParser = require('body-parser');
const { timingSafeEqual } = require('crypto');
const methods = require('methods');
const { request } = require('http');
const { response } = require('express');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

function readFile(fileName) {
    var file = fs.readFileSync(fileName, 'utf-8');
    return file;
}

function log(request,response){
    var method = request.method;
    var path = request.path;
    var date = new Date();
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var textToFile = ("path: '/', method:GET, date:" + date +", time:" + time + "\n");
    fs.appendFile('./log.txt', textToFile, err => {
        if (err) {
          console.error(err)
          return
        }
      })
}

// app.get('/', (request, response) => {
//     var body = "hello world";
//     response.writeHead(200, {
//         'Content-Length': Buffer.byteLength(body),
//         'Content-Type': 'text/plain'
//     });
//     response.end(body);
// })

// app.get('/', (request, response) => {
//     var body = "<h1>Hello world</h1>";
//     response.writeHead(200, {
//         'Content-Length': Buffer.byteLength(body),
//         'Content-Type': 'text/html'
//     });
//     response.end(body);
// })

app.get('/', (request, response) => {
    log(request,response);
    var body = readFile("./ficha6.html");
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    response.writeHead(200, {
        'Content-Length': Buffer.byteLength(body),
        'Content-Type': 'text/html'
    });
    response.end(body.replace("Hello world",time));
})

app.get('/user/:name', (request, response) => {
    log(request,response);
    var name = request.params.name;
    var body = readFile("./user.html");
    response.writeHead(200, {
        'Content-Length': Buffer.byteLength(body),
        'Content-Type': 'text/html'
    });
    response.end(body.replace("USER",name));
})

app.get('/log/list', (request, response) => {
    log(request,response);
    var body = readFile("./log.txt");
    response.writeHead(200, {
        'Content-Length': Buffer.byteLength(body),
        'Content-Type': 'text/plain'
    });
    response.end(body);
})

app.get('/log/download', function(request, response){
    log(request,response);
    response.download('log.txt', function(error){
        console.log("Erro : ", error)
    });
});

app.get('/log/clear', function(request, response){
    log(request,response);
    fs.unlink("./log.txt", (err) => {
        if (err) {
          console.error(err)
          return
        }
      })
    response.end("Log deleted.")
});