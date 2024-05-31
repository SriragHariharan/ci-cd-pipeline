const express = require("express");
const app = express();

app.get("/cicd", (_req, res) => {
	res.status(200).send("Hurray!. I learned CI/CD pipeline");
});

module.exports = app;
