const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Activity", {
    id: {
      type: DataTypes.INTEGER,
      allowNull:null,
      unique:true,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficulty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5,
      },
    },
    duration: {
      type: DataTypes.INTEGER,
    },
    season: {
      type: DataTypes.ENUM("Summer", "Autumn", "Winter", "Spring"),
      allowNull: false,
    },
  },{freezeTableName:true,timestamps:false}
  );
};
