-- CREATE DATABASE pokemon_db;
USE pokemon_db;

-- Create the table actors.
CREATE TABLE pokemon (
  id int AUTO_INCREMENT,
  pokemon_name varchar(30) NOT NULL,
  captured BOOLEAN NOT NULL,
  PRIMARY KEY(id)
);