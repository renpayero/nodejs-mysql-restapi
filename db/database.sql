CREATE DATABASE COMPANYDB;

USE COMPANYDB;

CREATE TABLE  employee (
    id int (11) not null AUTO_INCREMENT primary key,
    name VARCHAR(45) default null,
    salary INT default null
);

DESCRIBE employee;