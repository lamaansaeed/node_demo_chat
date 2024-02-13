const express = require("express");


const router = express.Router();

router.get('/login', (req, res, next) => {
    res.send(`<form action="/login" onsubmit="saveToLocalStorage()" method="POST">
        <input id="username" type="text" name="username">
        <button type="submit">Login</button>
    </form>
    <script>
        function saveToLocalStorage() {
            var usernameValue = document.getElementById('username').value;
            localStorage.setItem('username', usernameValue);
        }
    </script>`);
});

router.post('/login', (req, res, next) => {
    
    res.redirect('/chat');
});

module.exports = router;