import sequelize from '../config/database';
import Sequelize from "sequelize";


import {UserModelStatic} from '../interfaces/UserModel'

  const Pet = <UserModelStatic>sequelize.define("pet", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });

  
  export default  Pet