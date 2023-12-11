import Brand from "../Models/brand.model.js";
import Category from "../Models/category.model.js";
import CategoryProductRel from "../Models/category_product_rel.model.js";
import Product from "../Models/product.model.js";

Product.belongsTo(Brand)
Product.belongsToMany(Category, {through: CategoryProductRel})
Category.belongsToMany(Product, {through: CategoryProductRel})

export default class ProductController {

	listall = async () => {
		const result = await Product.findAll();
		return result
	}

	getone = async (id) => {
		const result = await Product.findOne({
			where: { id: id },
			include: [{
				model: Brand
			},{
				model: Category
			}]
		});
		return result
	}

	create = async (data) => {
		const result = await Product.create(data);
		return result
    }

	update = async (data) => {
		const result = await Product.update(data, { where: { id: data.id } });
		return result
	}

	delete = async id => {
		const result = await Product.destroy({ where: { id: id } });
		return result
	}
}