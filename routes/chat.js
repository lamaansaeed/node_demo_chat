// chat.js
const express = require("express");
const dataModule = require('./data');
const router = express.Router();

router.get('/chat', (req, res, next) => {
    res.send(`
    <form action="/chat" onsubmit="setUsername()" method="POST">
        <input id="message" type="text" name="message" placeholder="message">
        <input type="hidden" name="username" id="username">
        <button type="submit">Send</button>
    </form>
    <script>
        function setUsername() {
            var usernameValue = localStorage.getItem('username');
            document.getElementById('username').value = usernameValue;
        }
    </script>
    <h6>${dataModule.getData().join('<br>')}</h6>`);
});

router.post('/chat', (req, res, next) => {
    const message = `${req.body.username}: ${req.body.message}`;
    dataModule.addMessage(message);
    res.redirect('/chat');
});

module.exports = router;
