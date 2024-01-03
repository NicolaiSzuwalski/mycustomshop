import sequelize from '../Config/db.sequelize.js'
import { Model, DataTypes } from 'sequelize'

// Deklarerer Class Category som udvider SQ's model klasse
class Products extends Model {}

// Definerer modellens felter og generelle options
Products.init(
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
		},
		image: {
			type: DataTypes.STRING,
            allowNull: false
		},
        description : {
            type : DataTypes.STRING,
            allowNull : false
        },
        price : {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        stock : {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        brand_id : {
            type: DataTypes.INTEGER,
            allowNull: false
        }
	},
	{
		sequelize
	}
)

export default Product