const exxpress = require("express");
const cors = require("cors");

const app = exxpress();

app.use(cors());
app.use(exxpress.json());

app.get("/", (req, res) => {
    res.json({ message: "Welcome to contact book application."});
});

module.exports = app;