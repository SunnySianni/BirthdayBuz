//create user model for usertable in mysql database 

import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST
        dialect: process.env.DB_DIALECT || 'postgres'
    }
);

export default sequelize; 