const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Welcome to Jenkins CI/CD Demo</h1><h2>Version 1</h2>");
});

app.listen(3000, () => {
    console.log("Application Running");
});
