const isEmpty = require('lodash.isempty');

const greeting = (req) => {
    if (isEmpty(req.query)) {
        return { 
            status: 200, 
            message: `Hello user!`
        };
    }
    
    if (Object.keys(req.query)[0].toLocaleLowerCase() !== "name" || Object.keys(req.query).length > 1) {
        return { 
            status: 400, 
            message: `Only query parameter "name" is accepted`
        };
    } 
    
    if (JSON.stringify(Object.values(req.query)) === '[""]') {
        return {
            status: 400,
            message: `Please provide a value for "name"`
        };
    }
    
    return {
        status: 200,
        message: `Hello ${req.query[Object.keys(req.query)[0]]}`
    };
};

module.exports = greeting;