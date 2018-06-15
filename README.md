## User Management System 
A single page application(SPA) for a user management system.

### Technologies Used
* React.js
* React Router 4
* Express.js
* MongoDB
* Webpack
* Bootstrap

### Prerequisites
To test out the application on your machine you should have these on your system
* A local setup of MongoDB database server
* Node.js (version 6 or 8)

### Getting started
1. Clone the repository
```
> git clone https://github.com/rakeshCoursera/UserMgmtSystem.git
```
2. Run `yarn` or `npm install` in the project repository
```
> npm install
```
3. The run the commands
```
> npm build
> npm start
```

This will start a server `http://localhost:3000`. Open chrome and run this url. At this point of time we haven't have any data available in the database. So only a page with navbar and some filter input field will appear with a text saying `Loading data from the database...!!!`.

### Data Insertion in the Database
For inserting and modifying the data in the database, some APIs have been made. They are as:

#### /v1/user
* `POST`: To create a new users and save into the database with **body** as 
  ```
  {
    "first_name": "Rakesh",
    "last_name": "Sharma",
    "email": "rakeshsharma@example.com",
    "mobile": "8999998999",
    "dob": "1991/12/18",
    "active": true,
  }
  ```
* `GET`: Get all the users from the database

#### /v1/user/:id

* `GET`: To retrieve a particular user information
* `PUT`: To update a particular user information with *body* same as above
* `DELETE`: To delete a particular user 


### Bugs to Solve Right Now
* Popup loads/closes/updates when clicked twice
* Popup model reset to default not happening

