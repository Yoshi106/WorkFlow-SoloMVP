module.exports = {
  Query: {
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
    findAllMembers: (parent, args) => {
      return [{id: 1, name:"yoshi", group:"1G"}]
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
