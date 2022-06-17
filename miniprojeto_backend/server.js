var mysql = require('mysql');
const express = require('express');
const app = express();
const port = 3000;

// Middleware para converter o body para JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

// SQL connection 

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'miniproj'
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// ENDPOINTS

///// PARTE A //////////////////////////////////////////////////////////////////////////////////////////////////////////

app.get('/videos', function (request, response) { // a)
    connection.query('SELECT * FROM miniproj.videos', function (err, results, fields) {
        response.send(results);
    });
});

app.post('/videos', function (request, response) { // b)
    var videosBody = request.body;
    connection.query('insert into miniproj.videos (uploader, title, description, duration, url, views, likes, dislikes, comments, tags) VALUES (?,?,?,?,?,?,?,?,?,?)', [videosBody.uploader, videosBody.title, videosBody.description, videosBody.duration, videosBody.url, videosBody.views, videosBody.likes, videosBody.dislikes, videosBody.comments, videosBody.tags], function (err, results, fields) {
        response.send("Video added into ID:" + results.insertId);
    });
});

app.get('/videos/uploader/:uploader', function (request, response) { // c)
    var uploaderID = request.params.uploader;
    connection.query('SELECT * FROM miniproj.videos WHERE uploader = ?', uploaderID, function (err, results, fields) {
        response.send(results);
    });
});

app.put('/videos/videoID/:id', function (request, response) { // d)
    var videoID = request.params.id;
    connection.query('UPDATE miniproj.videos SET likes = likes + 1 WHERE id = ?', [videoID], function (err, results, fields) {
        response.send("1 likes added into Id: " + videoID);
    });
});

app.get('/videos/tags', function (request, response) { // e)
    var tags = request.query.tags;
    connection.query('SELECT * FROM miniproj.videos WHERE tags = ?', tags, function (err, results, fields) {
        response.send(results);
    });
});

///// PARTE B /////////////////////////////////////////////////////////////////////////////////////////////////////////

app.get('/videos/:id', function (request, response) { // a)
    var id = request.params.id;
    connection.query('SELECT * FROM miniproj.videos WHERE id = ?', id, function (err, results, fields) {
        response.send(results);
    });
});

app.delete('/videos/id', function (request, response) { // b)
    var Id = request.query.id;
    connection.query('DELETE FROM miniproj.videos WHERE id = ?;', Id, function (err, results, fields) {
        if (results.affectedRows != 0) {
            response.send("Videos deleted: " + results.affectedRows + "\nId: " + Id);
        }

        else {
            response.send("Id does not exist");
        }

    });
});

app.get('/videos/find/uploader', function (request, response) { // c) 
    var uploaderBody = request.body;

    connection.query('SELECT * FROM miniproj.videos WHERE uploader = ?', uploaderBody.uploader, function (err, results, fields) {
        response.send(results);
    });
});

app.put('/videos/:id', function (request, response) { // d)
    var comentario = request.body.comments;
    var videoID = request.params.id;
    connection.query('UPDATE miniproj.videos SET comments = CONCAT(comments, ";?") where id = ?', [comentario, videoID], function (err, results, fields) {
        response.send("1 comment added into Id: " + videoID);
    });
});

app.get('/videos/sort/likes', function (request, response) { // e)
    connection.query('SELECT * FROM miniproj.videos', function (err, results, fields) {
        results.sort((a, b) => {
            return a.likes - b.likes;
        });
        response.send(results);
    });
});

