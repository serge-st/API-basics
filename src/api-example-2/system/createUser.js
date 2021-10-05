const fs = require('fs').promises;

const getAllUsers = require(__dirname + '/getAllUsers');

const dataValidator = {
    errors: [],
    createRecord(errorCode, errorMessage) {
        this.errors.push({
            code: `Some custom code ${errorCode}`,
            message: errorMessage
        });
    },
    process(req) {
        // Reset errors array:
        this.errors = [];        

        // Remove ID field if it was provided:
        req.body.id = null;

        // Check if Content-Type is set (can be that API accepts both JSON and XML):
        const requestHeader = req.header('Content-Type');
        if (requestHeader !== "application/json") {
            this.createRecord(1234, "A valid Content-Type Header is not specified");
        }
        
        // Check if all mandatory fields are supplied:
        const mandatoryFields = ["name", "age", "isAdmin", "skills", "languages"];
        const suppliedFields = Object.keys(req.body);
        const compareFields = mandatoryFields.filter(element => !suppliedFields.includes(element));
        if (compareFields.length !== 0) {
            this.createRecord(4321, `Mandatory field/s missing: '${compareFields.join(', ')}'`);
        } else {
            // Verify each mandatory field type:
            if (typeof req.body.name !== "string") {
                this.createRecord(2345, `Name should be String type.`);
            }
            if (typeof req.body.age !== "number") {
                this.createRecord(2345, `Age should be Number type.`);
            }
            if (typeof req.body.isAdmin !== "boolean") {
                this.createRecord(2345, `isAdmin should be Boolean type.`);
            }
            if (!Array.isArray(req.body.skills)) {
                this.createRecord(2345, `Skills should be Array type.`);
            }
            if (typeof req.body.languages !== "object") {
                this.createRecord(2345, `Languages should be Object type.`);
            }
            if (Object.values(req.body.languages).filter(value => typeof value !== "boolean").length > 0) {
                this.createRecord(2345, `Values of Languages Object should be Boolean type.`);
            }
            if (req.body.hobbies !== undefined && !Array.isArray(req.body.hobbies)) {
                this.createRecord(2345, `Hobbies should be Array type.`);
            }
        }


        // Return an error is the request data is faulty:
        if (this.errors.length > 0) {
            return {
                status: 400
            };
        } else {
            return {
                status: 201
            };
        }
    }
};

const createUser = async (req, res) => {
    // Validate input data:
    const { status } = dataValidator.process(req);

    if (status !== 201) return {
        status: status,
        message: dataValidator
    };

    // Get all users:
    const users = (await getAllUsers()).message;

    // Calculate new ID:
    const calculateId = async () => {
        if (users.length === 0) {
            return 1;
        } else {
            return users[users.length - 1].id + 1;
        }
    };

    // Add new user:
    req.body.id = await calculateId();
    users.push(req.body)
    fs.writeFile(__dirname + '/db.json' , JSON.stringify(users));
    
    // Return the status and the response:
    return {
        status: status,
        message: `User ${req.body.name} with ID ${req.body.id} was successfully created.`
    };
};

module.exports = createUser;