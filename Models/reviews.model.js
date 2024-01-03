import sequelize from '../Config/db.sequelize.js'
import { Model, DataTypes } from 'sequelize'

// Deklarerer Class Category som udvider SQ's model klasse
class Review extends Model {}

// Definerer modellens felter og generelle options
Review.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false
		},
		num_stars: {
			type: DataTypes.ENUM(1,2,3,4,5),
            allowNull: false
		},
		comment: {
			type: DataTypes.STRING,
            allowNull: false
		},
        product_id: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        user_id: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW(),
            allowNull: false
        },


	},
	{
		sequelize
	}
)

export default Review