"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var database_1 = __importDefault(require("../config/database"));
var sequelize_1 = __importDefault(require("sequelize"));
var Pet = database_1.default.define("pet", {
    id: {
        type: sequelize_1.default.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: sequelize_1.default.STRING,
        allowNull: false
    }
});
exports.default = Pet;
