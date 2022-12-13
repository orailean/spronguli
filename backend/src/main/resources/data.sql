CREATE TABLE users
(
    id          SERIAL PRIMARY KEY,
    username    VARCHAR (100) NOT NULL,
    password    VARCHAR (100) NOT NULL
);
INSERT INTO users (username, password) VALUES ('test1', 'test1');
INSERT INTO users (username, password) VALUES ('test2', 'test2');
INSERT INTO users (username, password) VALUES ('test3', 'test3');