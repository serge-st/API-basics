// API Project Setup:
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = 80;

// Features:
const getAllUsers = require(__dirname + '/system/getAllUsers');
const deleteUser = require(__dirname + '/system/deleteUser');
const createUser = require(__dirname + '/system/createUser');
const getUserById = require(__dirname + '/system/getUserById');
/* ========================================== */

// Get All Users:
app.get('/users', async (req, res) => {
    const {status, message} = await getAllUsers();
    res.status(status).send(message);
});
/* ========================================== */

// Get User by ID:
app.get('/users/:id', async (req, res) => {
    const {status, message} = await getUserById(req.params.id);
    res.status(status).send(message);
});
/* ========================================== */

// Create New User:
app.post('/users', async (req, res) => {
    const {status, message} = await createUser(req);
    res.status(status).send(message);
});
/* ========================================== */

// Delete User:
app.delete('/users/:id', async (req, res) => {
    const { status, message } = await deleteUser(req);
    res.status(status).send(message);
});

// API Docs example:
app.get('/api/docs', function (req, res) {
    res.status(200).sendFile(__dirname + '/system/docs.html');
});

// Launch Express Local Server:
app.listen(PORT, () => console.log(`App from Example 2 started on port ${PORT}`));