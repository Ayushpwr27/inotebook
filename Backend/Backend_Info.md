## what is middleware #

Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

Middleware functions can perform the following tasks:
- Execute any code.
- Make changes to the request and the response objects.
- End the request-response cycle.
- Call the next middleware function in the stack.


An Express application can use the following types of middleware:
- Application-level middleware
- Router-level middleware
- Error-handling middleware
- Built-in middleware
- Third-party middleware

## What is a database schema?
A database schema defines how data is organized within a relational database; this is inclusive of logical constraints such as, table names, fields, data types, and the relationships between these entities

#### The models folder here contains 2 schema of notes and user which defines how the data will be stored in the mongoDb Database


## What is Routes?
A route is a section of Express code that associates an HTTP verb (GET, POST, PUT, DELETE, etc.), a URL path/pattern, and a function that is called to handle that pattern.
##### Here for this application we are using two routes files, one for user authentication and other for Notes CRUD(create,read,update,delete)

* Inside the file auth.js we define 3 routes
    - Route to create a user
    - Route to Authenticate a user and let him log in
    - Route to get the user details

* Inside the file notes.js we define 4 routes
    - Route to read the data 
    - Route to create the note
    - Route to update the note
    - Route to delete a note


## What does db.js File does?
db.js file contains the details of mongodb URL and a function to run the mongoDb Server to store the data and fetch it later for further use

## what is in index.js file?
The Index.js is the main backend file that contains all the neccesary commands for backend including the DB call and express js call
Here we assign the port no( in genral port 5000 for backend), call the routes that we will use and then set app.listen function for connection


# Steps to run the backend
1. In terminal use cd backend to get inside the backend folder
2. write the command (  nodemon index.js  )
This will run your database and backend