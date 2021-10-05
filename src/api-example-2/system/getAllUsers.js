const fs = require('fs').promises;

const getAllUsers =  async () => {
    try {
        const result = await fs.readFile(__dirname + '/db.json');
        const data = await JSON.parse(result);
        return {
            status: 200,
            message: data
        };
    }  catch (error) {
        console.error(error);
        return {
            status: 200,
            message: "No data"
        };
    }
};

module.exports = getAllUsers;