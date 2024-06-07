import { Sequelize } from "sequelize"

export const sequelize = new Sequelize('instance-1', 'postgres', 'postgres', {
    host: 'localhost',
    dialect:'postgres',
    dialectModule: 'pg',
  })

// module.exports = {sequelize}