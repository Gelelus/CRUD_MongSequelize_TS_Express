import {Sequelize} from "sequelize";
import dotenv from "dotenv";

dotenv.config(); //env reader

//console.log(process.env.host, process.env.user, process.env.database, process.env.password)
if(!process.env.database || !process.env.user || !process.env.password || !process.env.host){
  throw new Error('bad options in .env file')
}
export default new Sequelize(
  process.env.database,
  process.env.user,
  process.env.password,
  {
    dialect: "mysql",
    host: process.env.host,
    define: {
      timestamps: false,
    },
  }
);
