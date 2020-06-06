DROP DATABASE IF EXISTS burgers_db;

CREATE database burgers_db;
USE burgers_db;
DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers (
  id INT not null auto_increment ,
  burger_name VARCHAR(255) Not NULL,
  devoured BOOLEAN DEFAULT false, 
  PRIMARY KEY (id)
);
