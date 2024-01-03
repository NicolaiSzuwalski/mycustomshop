import User from "../Models/users.model.js"

export class UserController {


    listall = async () => {
        console.log(1234);
        const result = await User.findAll();
        return result;
    }

    getone = async (id) => {
        const result = await User.findByPk();
        return result;
    }

    create = async (data) => {
        console.log(data)
        const result = await User.create((data));
        return result;
    }

    update = async (data) => {
        const result = await User.update(data, { where: { id : data.id } });
        return result;
    }

    delete = async id => {
        const result = await User.destroy({ where: { id : id } });
        return result;
    }
}