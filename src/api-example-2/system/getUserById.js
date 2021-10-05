const fs = require('fs').promises;

const getAllUsers = require(__dirname + '/getAllUsers');

const getUserById = async (id) => {
    const users = (await getAllUsers()).message;

    const user = users.filter(user => user.id === Number(id));

    return {
        status: 200,
        message: (user.length === 0 ? `User with ID ${id} was not found` : user)
    };
};

module.exports = getUserById;