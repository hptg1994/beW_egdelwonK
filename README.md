
# Q&A Install and Usage guide
## Installation
### Pre-Requisites
1. Mongo DB
2. Node JS

### Steps
1. Download or clone the git repository.
2. Install all NPM dependencies by running the following command
```
npm install
```
3. Run MongoDB server on your local machine using the folllowing command
```
mongod
```
4. To run the server run the command:
```
npm start
```
5. Access the web app at localhost:3030

### Featuers implemented
#### 1. Sign up
User by clicking the "sign up" buttton could switch to sign up mode. Then user would enter username, password and confirm password to create a new user
#### 2. Log In
User by clicking the "log in" button could swith to log in mode. In log in mode,user could log in with an existing combination of username and password.
#### 3. Personal Page
Each user has access to their personal page, which would list all the questions that the user has asked as well as all the corresponding comments. 
#### 4. Create Question and Answer
User can create a question by clicking on "ask" button from either the main page or the Home page. Clicking on the option takes you to a form in which can be filled out to add a question and answers.
#### 5. Log out
User can log out using the log out button visible if the user is logged in.
#### 6. Home page
The home page contains a list of all the questions in the database displayed according to the priority of the questions.
#### 7. Question Page
The question page could show the specific question with all the corresponding answers. In this page, users could express a comment for each answer or submit an 
answer for the question. Furthermore, users could click on the 'like' and 'dislike' button.


Group project for CS 546 at Stevens Institute of Technology
Group number： Pintaigao He, Ye YUAN, Ying Liu, Zekang Shi, Zhiyang Wang, Fang Wang
Group Members:
