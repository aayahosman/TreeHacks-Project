const User = require('../models/user');
const responseHandler = require('../utils/responsehandler');

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        responseHandler.success(res, users);
    } catch (err) {
        responseHandler.error(res, err.message);
    }
};