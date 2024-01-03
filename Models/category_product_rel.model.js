import sequelize from '../Config/db.sequelize.js'
import { Model, DataTypes } from 'sequelize'
import Category from './category.model.js'
import Product from './product.model.js'

// Deklarerer Class Category som udvider SQ's model klasse
class CategoryProductRel extends Model {}

// Definerer modellens felter og generelle options
CategoryProductRel.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false
		},
		category_id: {
			type: DataTypes.INTEGER,
            allowNull: false,
			references: {
                model: Category,
                key: 'id'
            }
		},
		product_id: {
			type: DataTypes.INTEGER,
            allowNull: false,
			references: {
                model: Product,
                key: 'id'
            }
		}
	},
	{
		sequelize,
		underscored: true,
		modelName: 'category_product_rel',
		freezeTableName: true,
		timestamps: false
	}
)

export default CategoryProductRel