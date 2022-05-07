'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stage_event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Stage_event.init({
    stage_event_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    stage_id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Stage',
        key: 'id'
      }
    },
    event_id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Event',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Stage_event',
    tableName: 'stage_event',
    timestamps: false
  });
  return Stage_event;
};