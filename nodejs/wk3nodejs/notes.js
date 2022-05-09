/*  A database is an organized collection of structured data,
typically stored electronically in a computer system
 

A data can be facts related to any object in consideration. This can 
 be name, age, height, etc. A picture, image, file, etc. can 
 also be considered data.

 A database is usually controlled by a database management
 system  which together, the data and the DBMS, along with the 
 applications that are associated with them are referred to as
 a database system, often shortened to just database.

 Beginner steps
 1. Introduction to databases and database management systems 
 2. successfully install databases Mysql and mongodb 
 3. Create tables (on mysql command line client)
 to create a new database use- create database 'database name'
     * CREATE TABLE users(
    -> user_id INT,
    -> email VARCHAR(100),
    -> phone_number VARCHAR(15));
    show databases shows you the database 
    desc means describes the database
* get all data from your table by typing SELECT * FROM 'database'

SELECT * FROM users; (shows you rows and columns table inputs(retreives info))
example of inserting values
1. INSERT into users VALUES(2, 'john@dev.com', '1234567');
2.  SELECT user_id, email FROM users; (brings only indicated columns)
3. SELECT * FROM users WHERE user_id = 1
  TO CHANGE OR UPDATE A TABLE 
where users is database name
1. UPDATE 'users' SET email = 'victormathias001@gmail.com' WHERE user_id = 1
 If you don't specify user_id , it will update all the email column.

DELETING INFORMATION
 1. DELETE FROM 'database_name' WHERE email = victormathias001@gmail.com;
 but if you don specify, it will delete everything.
 OR 
 2. DROP DATABASE IF EXIST 'database_name' 
 desc means display 
CRUD -
create 
Read 
Update 
Delete

NB caps lock does not seem compulsory

another example  INSERT INTO customers(first_name, last_name) VALUES("Victor","Mathias");
USING A FOREIGN KEY 
A foreign key is a key that comes from another table,


mysql> CREATE TABLE  orders (orderid INT  PRIMARY KEY,
    -> customerid INT,
    -> FOREIGN KEY (customerid) REFERENCES customers(id));

    DATA MODELLING
    Database design

 1. Hierarchical Model
 2. Network Model
 3. Entity-relationship model
 4. Relational Model
 Other subtopics

 Select Statement
 Alter and Delete
 MySQL Select
 Order By
 Distinct Where And Or Where 

 */