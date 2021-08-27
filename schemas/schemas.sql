-- write the database name that you use here
USE OnlineShopping;
CREATE TABLE users (
    id_user INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    yourName VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOt NUll,
    phoneNumber varchar(255) NOT NULL,
    gender varchar(255) NOT NULL,
    img varchar(255),
    UNIQUE KEY unique_email (email),
    is_deleted TINYINT DEFAULT 0
);
CREATE TABLE category (
    category_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    nameCategory VARCHAR (100),
    imgCategory varchar(255)
);
CREATE TABLE post (
    post_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    id_user INT(5),
    title VARCHAR(100) NOT NULL,
    category VARCHAR (100) NOT NULL,
    imgPost VARCHAR(255) NOT NULL,
    cityPost VARCHAR (100) NOT NULL,
    pricePost DOUBLE(6, 2) NOT NULL,
    phonePost VARCHAR(255) NOT NULL,
    addCart varchar(255) NOT NULL,
    date DATETIME NOT NULL,
    FOREIGN KEY (id_user) REFERENCES users (id_user)
);
CREATE TABLE contact (
    contact_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    id_user INT(5),
    contact_name VARCHAR(100) NOT NULL,
    contact_email VARCHAR(100) NOT NULL,
    contact_phone VARCHAR(100) NOT NULL,
    contact_massage VARCHAR(255) NOT NULL,
    FOREIGN KEY (id_user) REFERENCES users (id_user)
);