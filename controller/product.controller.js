import Product from "../Models/products.model.js"

export class ProductController {


    listall = async () => {
        console.log(1234);
        const result = await Product.findAll();
        return result;
    }

    getone = async (id) => {
        const result = await Product.findByPk();
        return result;
    }

    create = async (data) => {
        console.log(data)
        const result = await Product.create((data));
        return result;
    }

    update = async (data) => {
        const result = await Product.update(data, { where: { id : data.id } });
        return result;
    }

    delete = async id => {
        const result = await Product.destroy({ where: { id : id } });
        return result;
    }
}