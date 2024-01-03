import sequelize from '../Config/db.sequelize.js'
import { Model, DataTypes } from 'sequelize'

// Deklarerer Class Category som udvider SQ's model klasse
class User extends Model {}

// Definerer modellens felter og generelle options
User.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false
		},
		firstName: {
			type: DataTypes.STRING,
            allowNull: false
		},
		lastName: {
			type: DataTypes.STRING,
            allowNull: false
		},
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gender_id: {
            type: DataTypes.BIGINT,
            allowNull: false
        }
	},
	{
		sequelize
	}
)

export default User