# MVC-Blog-site


[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)   

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Screenshot](#screenshot)
- [Application link](#application-link)
- [Contribute](#contribute)
- [License](#license)
- [Questions](#questions)

## Description
The challenge was to build a CMS-style blog site where developers can publish their blog posts and comment on other developers’ posts as well.  The app follows the MVC structure and uses Handlebars.js as the templating language.  Sequelize is used for database functionality, and express-session is used for authentication.


## Acceptance Criteria

```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view posts and comments but I am prompted to log in again before I can add, update, or delete posts
```


## Installation
 - [Visual Studio Code](https://code.visualstudio.com/)
 - [node.js](https://nodejs.org/en)
 - [mysql2](https://www.npmjs.com/package/mysql2)
 - [dotenv](https://www.npmjs.com/package/dotenv)
 - [nodemon](https://www.npmjs.com/package/nodemon)
 - [express](https://www.npmjs.com/package/express)
 - [express-session](https://www.npmjs.com/package/express-session)
 - [sequelize](https://www.npmjs.com/package/sequelize)
 - [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize)
 - [insomnia](https://insomnia.rest/)
 - [bcrypt](https://www.npmjs.com/package/bcrypt)
 - [handlebars](https://www.npmjs.com/package/express-handlebars)
 
       

## Usage

1. Run `npm i` in the command line to make sure all installations are complete.
2. Open your MySQL shell with command `mysql -u root -p`
3. Use the `schema.sql` file in the db folder to create the database by typing `SOURCE db/schema.sql` in the MySQL shell.
4. Use environment variables to store sensitive data in the `.env` file, like your MySQL username, password, and database name.
5. From the CLI, type `npm run seed` to seed data to the database.
6. Then run `npm start` to start the server. ( Or to use nodemon type `npm run watch`)




## Screenshot

![](./assets/Tech-Blog-screenshot.png)

## Application link

[Click here](https://arcane-hamlet-47926-17c19d5fa5ec.herokuapp.com/)

## Credits

 - This application is an assignment from module 14 from [The Ohio State University Coding Boot Camp](https://eng-bootcamps.osu.edu/).  The Acceptance Criteria above is from the challenge in module 14.
 The miniproject from the course materials was used as a base template for this application.
 - CSS styling is from [jass.css](https://github.com/necolas/normalize.css) (aka normalize.css), which is also used in the bootcamp course materials.

## Future Development

I would like to implement a different CSS framework for better styling of app.

## Contribute 

If you would like to contribute please use the [Contributor Covenant](https://www.contributor-covenant.org/).



## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)   

***MIT License***

## Questions

 - Github Profile for [rickibobbii](https://github.com/rickibobbii)
