DROP DATABASE IF EXISTS meal_plan_db;
CREATE DATABASE meal_plan_db;
USE meal_plan_db;

CREATE TABLE recipes
(
	id int NOT NULL AUTO_INCREMENT,
	recipe_name varchar(255) NOT NULL,
    ingredients VARCHAR,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
