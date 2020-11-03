const { gql } = require("apollo-server");

const typeDefs = gql`
  scalar Date

  type Member {
    id: ID
    name: String
    role: String
  }

  type Tasks {
    id: ID
    num: String
    country: String
    date: Date
    status: String
    technical: String
    assistant: String
  }

  type Response {
    boolean: Boolean
  }

  input MemberInput {
    name: String!
    role: String
    password: String!
  }

  type Message {
    msg: String
  }

  type Query {
    getAllTasks: [Tasks]
    findMember(name: String): Member
    findAllMembers: [Member]
    logIn(user: String, password: String): Message
  }
  type Mutation {
    modifyGroup(name: String, group: String): Message
    createMember(input: MemberInput): Message
    removeMember(name: String): Message
  }
`;

module.exports = typeDefs;
