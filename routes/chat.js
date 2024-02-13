const express = require("express");
const data = require("./data");
const router = express.Router();


router.get("/chat", (req, res, next) => {
  res.send(`
  <h6>${data.join("<br>")}</h6>
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
    `);
});

router.post("/chat", (req, res, next) => {
  data.push(`${req.body.username}: ${req.body.message}`);
  res.redirect("/chat");
});

module.exports = router;
