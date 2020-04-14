import Sequelize from "sequelize";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import sequelize from '../config/database';

import Pet from './pet'
import {UserModelStatic, UserModel} from '../interfaces/UserModel'

const User = <UserModelStatic>sequelize.define("user", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    age: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    avatarImg: {
      type: Sequelize.STRING,
      allowNull: false
    }

  });

  User.hasMany(Pet, { onDelete: "cascade" }); // создание связи один ко многим
  
  User.prototype.generateAuthToken = async function () {

    const user = this as UserModel;
    const token = jwt.sign({id: user.id.toString() }, 'expressapp');
    return token

}
  
  User.findByCredentials = async (login, password) => {
    
    const user = await User.findOne({where: {name: login}})

    if(!user) {
        throw new Error('Unable user')
    }
    
    const isMatch = await bcrypt.compare(password, user.password)
    
    if (!isMatch) {
        throw new Error('Unable to login')
    }

    return user
}
  //sequelize.sync()
  
export default User