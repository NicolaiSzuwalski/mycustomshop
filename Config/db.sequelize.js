import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config()

// Deklarerer sequelize connection objekt med login oplysning til databasen
const sequelize = new Sequelize(
	process.env.DBNAME,
	process.env.DBUSER,
    process.env.DBPASSWORD,
    {
		host: process.env.DBHOST,
		port: process.env.DBPORT,
		dialect: "mysql"
	}
)

export default sequelize;