# Getting Started with SIMPLE WORKFLOW APP

This project was created during my time as a student at Code Chrysalis

## Available Scripts

In the project directory, you can run:

### `yarn cli:start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `yarn server`

Nodemon automatically build and start your apollo server!


### How to Use 
This app uses MONGO DB. Befor starting using, please make your account in MongoDB atlas and get your database URL and Passward.
Please make .env faile and store your password in it.

When this App is launched, you can see "login" and "sign up". "sign up" allows you to create user in your mongoDB. Password is required to registration of user.
When "sign up" or "login" is successfuly perfromed, success message pops up. Then your can check your own tasks in table.
When you logs out from the app, please refresh or close the app.

### Future Features
- Logout
- Task Adding
- Task Passing to another user
- History Display of Tasks
