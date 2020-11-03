const mongoose = require("mongoose");
require("dotenv").config();

async function openConnection() {
  await mongoose.connect(
    `mongodb+srv://Yoshi106:${process.env.PASSWORD}@cluster0.b5ptp.mongodb.net/workflow_ipics?retryWrites=true&w=majority`,
    { useNewUrlParser: true }
  );
  return mongoose.connection;
}

module.exports = openConnection;

// const db = openConnection();
// console.log(db);
// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", function () {
//   console.log("connected yeah");
//   const userSchema = new mongoose.Schema({
//     name: "String",
//     role: "String",
//   });
//   const User = mongoose.model("User", userSchema);

//   User.find((err, users) => {
//     if (err) return console.error(err);
//     console.log(users);
//   });

// adding a user in collection "users"
//   const user = new User({
//       name: "Fujiwara",
//       role: "Technical"
//   });
//   console.log(user.name);
//   user.save((err, users) => {
//       if(err) return console.error(err);
//       console.log(users);
//   });
// });
