const fs = require('fs').promises;

const getAllUsers = require(__dirname + '/getAllUsers');

const deleteUser = async (req, res) => {
    const users = (await getAllUsers()).message;

    // Search for the index of the user with the requested ID:
    const indexToDelete = users.map(user => user.id).indexOf(Number(req.params.id));

    // Process the request:
    if (indexToDelete === -1){
        return {
            status: 404,
            message: `User with ID ${req.params.id} was not found.`
        };
    } else {
        const username = users[indexToDelete].name;
        users.splice(indexToDelete, 1);

        fs.writeFile(__dirname + '/db.json' , JSON.stringify(users));

        return {
            status: 200,
            message: `User ${username} with ID ${req.params.id} was deleted.`
        };
    }
};

module.exports = deleteUser;