require("dotenv").config();
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const mongoose = require("mongoose");

mongoose.connect(
  `mongodb+srv://Yoshi106:${process.env.PASSWORD}@cluster0.b5ptp.mongodb.net/workflow_ipics?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const userSchema = new mongoose.Schema({
  name: String,
  role: String,
  hushpass: String,
});
const User = mongoose.model("User", userSchema);

const taskSchema = new mongoose.Schema({
  num: String,
  country: String,
  date: Date,
  status: String,
  technical: String,
  assistant: String,
  responsible: String,
  histories: [{ date: Date, responsible: String }],
});
const Task = mongoose.model("Task", taskSchema);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
  context() {
    return { User, Task };
  },
});

const app = express();
app.use(express.static("build"));

server.applyMiddleware({ app });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Running a GraphQL API server with Apollo at localhost:${PORT}/graphql`
  );
});
