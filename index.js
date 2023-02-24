const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const POST = process.env.POST || 4000;

app.listen(POST, () => {
    console.log(`Server running at post ${POST}`);
});
