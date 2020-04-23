"use strict";
module.exports = (sequelize, DataTypes) => {
  const Tools = sequelize.define(
    "Tools",
    {
      title: DataTypes.STRING,
      link: DataTypes.STRING,
      description: DataTypes.STRING,
      tags: DataTypes.ARRAY(DataTypes.STRING)
    },
    {}
  );
  Tools.associate = function(models) {
    // associations can be defined here
  };
  return Tools;
};
