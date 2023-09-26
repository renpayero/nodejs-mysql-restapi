CREATE DATABASE COMPANYDB;

USE COMPANYDB;

CREATE TABLE  employee (
    id int (11) not null AUTO_INCREMENT primary key,
    name VARCHAR(45) default null,
    salary INT default null
);

DESCRIBE employee;

insert into employee values
(1, 'John', 10000),
(2, 'David', 20000),
(3, 'Mark', 30000),
(4, 'James', 40000),
(5, 'Paul', 50000);