const userService = require('../services/userService');

const getAllUsers = async (req, res, next) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json({
            result: users
        });
    } catch (err) {
        // console.log(err);
        next(err)
    }
}

module.exports = {
    getAllUsers
}