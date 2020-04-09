"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
if (!process.env.database || !process.env.user || !process.env.password || !process.env.host) {
    throw new Error('bad options in .env file');
}
exports.default = new sequelize_1.Sequelize(process.env.database, process.env.user, process.env.password, {
    dialect: "mysql",
    host: process.env.host,
    define: {
        timestamps: false,
    },
});
