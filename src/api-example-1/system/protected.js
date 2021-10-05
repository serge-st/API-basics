const protected = (req) => {
    // User to which the access is allowed:
    const username = "Bob";
    const password = "123";
    
    // Hashing data:
    const allowedUser = `Basic ${Buffer.from(username + ":" + password).toString("base64")}`;
    
    // Supplied basic authorization:
    const reqAuthentication = req.headers.authorization;
    
    // Test if supplied authorization is valid:
    if (reqAuthentication === allowedUser) {
        return {
            status: 200,
            message: "Secret content"
        };
    } else {
        return {
            status: 401,
            message: "Protected resource, access to unautherized users is not allowed"
        };
    }
};

module.exports = protected;