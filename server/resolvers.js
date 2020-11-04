// const { GraphQLDateTime } = reqire("graphql-iso-date");

// const customScalarResolver = {
//   Date: GraphQLDateTime
// };
// export default customScalarResolver;

// const openConnection = require("./mongoose");
const mongoose = require("mongoose");
require("dotenv").config();
const bcrypt = require("bcrypt");

const resolvers = {
  Query: {
    getAllTasks: async (parent, args, { Task }) => {
      let result;
      await Task.find((err, tasks) => {
        if (err) return console.error(err);
        result = tasks;
      });
      return result;
    },
    getTask: async (parent, args, { Task }) => {
      const result = await Task.find({ responsible: args.user }).exec();
      return result;
    },
    // findMember: (parent, args) => {
    //   return knex
    //     .select()
    //     .table("company")
    //     .then((members) => {
    //       let output;
    //       [output] = members.filter((member) => member.name === args.name);
    //       return output;
    //     });
    // },
    findAllMembers: async (parent, args, { User }) => {
      let result;
      await User.find((err, users) => {
        if (err) return console.error(err);
        result = users;
      });
      return result;
    },
    logIn: async (parent, args, { User }) => {
      try {
        const user = await User.find({ name: args.user }).exec();
        const res = await bcrypt.compare(args.password, user[0].hushpass);
        if (res) return { msg: "success" };
        else return { msg: "failed" };
      } catch {
        return { boolean: "error" };
      }
    },
  },

  Mutation: {
    // modifyGroup: async (parent, args) => {
    //   await knex("company")
    //     .where({
    //       name: args.name,
    //     })
    //     .update({
    //       group: args.group,
    //     });
    //   return { msg: "Updated!" };
    // },
    createMember: async (parent, args, { User }) => {
      try {
        const salt = 10;
        const hushedPassword = await bcrypt.hash(args.input.password, salt);
        const user = new User({
          name: args.input.name,
          role: args.input.role,
          hushpass: hushedPassword,
        });
        await user.save((err, users) => {
          if (err) return { msg: "error" };
        });
        return { msg: "success" };
      } catch {
        return { msg: "error" };
      }
    },
    // removeMember: async (parent, args) => {
    //   await knex("company")
    //     .where({
    //       name: args.name,
    //     })
    //     .delete();
    //   return { msg: "Removed!" };
    // },
  },
};

module.exports = resolvers;
