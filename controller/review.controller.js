import Review from "../Models/reviews.model.js"

export class ReviewController {


    listall = async () => {
        console.log(1234);
        const result = await Review.findAll();
        return result;
    }

    getone = async (id) => {
        const result = await Review.findByPk();
        return result;
    }

    create = async (data) => {
        console.log(data)
        const result = await Review.create((data));
        return result;
    }

    update = async (data) => {
        const result = await Review.update(data, { where: { id : data.id } });
        return result;
    }

    delete = async id => {
        const result = await Review.destroy({ where: { id : id } });
        return result;
    }
}