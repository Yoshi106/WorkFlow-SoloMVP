const { gql } = require("apollo-server");

const typeDefs = gql`
type Member {
    id: Int
    name: String
    group: String
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
