// API Project Setup:
const express = require('express');
const app = express();
const PORT = 80;

// Features:
const greeting = require(__dirname + '/system/greeting');
const protected = require(__dirname + '/system/protected');

// 404 example:
app.get('/', function (req, res) {
    res.status(404).send("Resource doesn't exist");
});

app.post('/', function (req, res) {
    res.status(404).send("Resource doesn't exist");
});
/* ========================================== */

// Greeting functionality example:
app.get('/greeting', function (req, res) {
    const processed = greeting(req, res);

    res.status(processed.status).send(processed.message);
});
/* ========================================== */

// Protected resource example:
app.get('/protected', function (req, res) {
    const processed = protected(req, res);
    
    res.status(processed.status).send(processed.message);
});
/* ========================================== */

// Docs example:
app.get('/api/docs', function (req, res) {
    res.status(200).sendFile(__dirname + "/system/docs.html");
});
/* ========================================== */

// Launch Express Local Server:
app.listen(PORT, () => console.log(`App from Example 1 started on port ${PORT}`));