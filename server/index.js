// const express = require("express");
// const app = express();
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

// Setup global support for environment variable based proxy configuration.

const server = new ApolloServer({ typeDefs, resolvers });

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(
    `Running a GraphQL API server with Apollo at localhost:${PORT}/graphql`
  );
});


// app.use(express.static(__dirname + "/build"));

// app.get("/api", (req, res) => {
//     res.send("Hello World");
// })

// const port = process.env.PORT || 4000;
// app.listen(port, () => {
//         console.log("App listening on port" + port);
// });
