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

INSERT INTO burgers (burger_name, devoured) VALUES ('Cheeseburger', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Double Cheeseburger', true);
INSERT INTO burgers (burger_name, devoured) VALUES ('Mushroom burger', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Western Cheeseburger', true);
INSERT INTO burgers (burger_name, devoured) VALUES ('Original Burger', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Origianal Double Burger', false);

SELECT * FROM burgers;