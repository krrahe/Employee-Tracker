Drop the database if it exists DROP DATABASE IF EXISTS employees_db;

-- Create a new database called "employees_db"
CREATE DATABASE employees_db;

-- Switch to the "employee_info_db" database
USE employees_db;

-- Create the "department" table
CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
);

-- Create the "role" table
CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(9, 1) NOT NULL,
    department_id INT NOT NULL,
    PRIMARY KEY (id)
);

-- Create the "employee" table
CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT,
    PRIMARY KEY (id)
);