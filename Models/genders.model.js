import sequelize from '../Config/db.sequelize.js'
import { Model, DataTypes } from 'sequelize'

// Deklarerer Class Category som udvider SQ's model klasse
class Gender extends Model {}

// Definerer modellens felter og generelle options
Gender.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false
		},
		name: {
			type: DataTypes.STRING,
            allowNull: false
		}
	},
	{
		sequelize
	}
)

export default Gender