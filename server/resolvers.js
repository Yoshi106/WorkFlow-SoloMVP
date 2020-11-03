// const { GraphQLDateTime } = reqire("graphql-iso-date");

// const customScalarResolver = {
//   Date: GraphQLDateTime
// };
// export default customScalarResolver;

// const openConnection = require("./mongoose");
const mongoose = require("mongoose");
require("dotenv").config();

const resolvers = {
  Query: {
    getAllTasks: async (parent, args, { Task }) => {
      let result;
      await Task.find((err, tasks) => {
        if (err) return console.error(err);
        console.log(tasks);
        result = tasks;
      });
      return result;
    },
    findMember: (parent, args) => {
      return knex
        .select()
        .table("company")
        .then((members) => {
          let output;
          [output] = members.filter((member) => member.name === args.name);
          return output;
        });
    },
    findAllMembers: async (parent, args, { User }) => {
      let result;
      await User.find((err, users) => {
        if (err) return console.error(err);
        result = users;
      });
      return result;
    },
  },

  Mutation: {
    modifyGroup: async (parent, args) => {
      await knex("company")
        .where({
          name: args.name,
        })
        .update({
          group: args.group,
        });
      return { msg: "Updated!" };
    },
    createMember: async (parent, args) => {
      await knex("company").insert(args.input);
      return { msg: "Created!" };
    },
    removeMember: async (parent, args) => {
      await knex("company")
        .where({
          name: args.name,
        })
        .delete();
      return { msg: "Removed!" };
    },
  },
};

module.exports = resolvers;
