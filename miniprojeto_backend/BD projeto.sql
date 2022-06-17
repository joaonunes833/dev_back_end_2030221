CREATE DATABASE miniproj;

CREATE TABLE videos(
    Id INT NOT NULL AUTO_INCREMENT,
    uploader VARCHAR(50) NULL,
    title VARCHAR(50) NULL,
    description VARCHAR(200) NULL,
    duration INT NULL,
    url VARCHAR(100) NULL,
    views INT NULL,
    likes INT NULL,
    dislikes INT NULL,
    comments VARCHAR(100) NULL,
    tags VARCHAR(100) NULL,
    PRIMARY KEY (id)
);

insert into miniproj.videos (uploader, title, description, duration, url, views, likes, dislikes, comments, tags) 
VALUES ("Uploader1","Exemplo titulo 1","Exemplo descricao 1",60,"exemploURL.com",200,10,10,"exemploComentario1","exemploTag2")


(exemplo RAW JSON para o body no Postman):

{
        "uploader": "Uploader2",
        "title": "Exemplo titulo 2",
        "description": "Exemplo descricao 2",
        "duration": 60,
        "url": "exemploURL.com",
        "views": 200,
        "likes": 10,
        "dislikes": 10,
        "comments": "exemplo comentario 2",
        "tags": "exemploTag2"
}