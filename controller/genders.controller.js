import Gender from "../Models/genders.model.js"

export class GenderController {


    listall = async () => {
        console.log(1234);
        const result = await Gender.findAll();
        return result;
    }

    getone = async (id) => {
        const result = await Gender.findByPk();
        return result;
    }

    create = async (data) => {
        console.log(data)
        const result = await Gender.create((data));
        return result;
    }

    update = async (data) => {
        const result = await Gender.update(data, { where: { id : data.id } });
        return result;
    }

    delete = async id => {
        const result = await Gender.destroy({ where: { id : id } });
        return result;
    }
}