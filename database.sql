CREATE DATABASE graduations;

CREATE TABLE graduations (
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL,
    description VARCHAR(256) NOT NULL,
    created_at VARCHAR(45) NOT NULL
);

CREATE DATABASE aula1;

CREATE TABLE users (
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL,
    email VARCHAR(256) NOT NULL,
    phone VARCHAR(256) NOT NULL,
    password VARCHAR(256) NOT NULL,
    created_at VARCHAR(45) NOT NULL
);

/*name, description, amount, due_date, type, created_at*/

CREATE TABLE products (
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(256) NOT NULL,
    amount INT NOT NULL,
    due_date DATE NOT NULL,
    type INT NOT NULL,
    updatet_at DATE,
    created_at DATE NOT NULL
);

CREATE TABLE removed_products (
	id INT PRIMARY KEY AUTO_INCREMENT,
	id_product INT,
    quantity INT,
    created_at DATE NOT NULL
);

CREATE TABLE supply_products (
	id INT PRIMARY KEY AUTO_INCREMENT,
    id_product INT,
    quantity INT,
    created_at DATE NOT NULL
);

create database hotsmart;

use hotsmart;

CREATE TABLE users(
	id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY email_UNIQUE (email),
    updated_at DATE,
    created_at DATE
);

CREATE TABLE customers(
	id INT(11) NOT NULL AUTO_INCREMENT,
    idRegistration INT(11) NOT NULL,
    id_user INT(11) NOT NULL,
    PRIMARY KEY(id),
    updated_at DATE,
    created_at DATE
);

CREATE TABLE course(
	id INT(11) NOT NULL AUTO_INCREMENT,
    title VARCHAR(50) NOT NULL,
    description TEXT NOT NULL,
    author VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE registration (
	id INT(11) NOT NULL AUTO_INCREMENT,
    id_customer INT(11) NOT NULL,
    id_course INT(11) NOT NULL,
    updated_at DATE NOT NULL,
    created_at DATE NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (id_customer) REFERENCES customers(id),
    FOREIGN KEY (id_course) REFERENCES course(id)
);

CREATE TABLE module(
	id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(50) NOT NULL,
    id_user INT(11) NOT NULL,
    id_course INT(11) NOT NULL,
    created_at DATE NOT NULL,
    updated_at DATE NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (id_user) REFERENCES users(id),
    FOREIGN KEY (id_course) REFERENCES course(id)
);

CREATE TABLE content(
	id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    content_type INT(2) NOT NULL,
    open_at DATE,
    url_video TEXT,
    url_image TEXT,
    url_content TEXT,
    created_for INT(11) NOT NULL,
    created_at DATE NOT NULL,
    updated_at DATE NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (created_for) REFERENCES users(id)
);


