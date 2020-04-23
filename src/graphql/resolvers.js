const { Tools } = require("../../database/models");

const resolvers = {
  Query: {
    findAll: async () => {
      return await Tools.findAll();
    },
    findById: async (_, { id }) => {
      return await Tools.findAll({ where: { id } });
    }
  },
  Mutation: {
    create: async (_, { tools }) => {
      await Tools.create(tools);
      return "Created";
    },
    updateOne: async (_, { id, tools }) => {
      await Tools.update(tools, { where: { id } });
      return "Updated";
    },
    deleteOne: async (_, { id }) => {
      await Tools.destroy({ where: { id } });
      return "Deleted";
    }
  }
};

module.exports = resolvers;
