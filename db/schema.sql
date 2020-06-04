DROP DATABASE IF EXISTS burgers_db;
CREATE database burgers_db;

USE burgers_db;

CREATE TABLE burgers (
  id INT auto_increment PRIMARY KEY,
--a string
  burger_name VARCHAR(30),
--a boolean
  devoured
);
