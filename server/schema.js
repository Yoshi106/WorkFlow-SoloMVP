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
    techinical: String
    assistant: String
  }

  input MemberInput {
    id: Int!
    name: String!
    group: String!
  }

  type Message {
    msg: String
  }

  type Query {
    getAllTasks: [Tasks]
    findMember(name: String): Member
    findAllMembers: [Member]
  }
  type Mutation {
    modifyGroup(name: String, group: String): Message
    createMember(input: MemberInput): Message
    removeMember(name: String): Message
  }
`;

module.exports = typeDefs;
