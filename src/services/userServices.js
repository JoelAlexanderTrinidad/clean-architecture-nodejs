const userRepository = require('../repositories/userRepository');

const getAllUsers = async (user) => {
    try {

        // nos fijamos si el usuario que está intentando traer a todos los usuarios está permitido
        if(!user || user.role !== 'Admin'){
            throw {
                error: true,
                status: 500,
                message: 'You are not allowed to see this information'
            }
        }

        const users = await userRepository.getAllUsers();
        if(users.lenght){
            return users;
        }else{
            return [];
        }
    } catch (err) {
        // console.log(err)
        throw err
    }
}

module.exports = {
    getAllUsers
}