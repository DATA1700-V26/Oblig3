const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// routes
const routes = require("routes");
app.use("/api", routes);

app.listen(3000, () => {
    console.log("Server kjører på http://localhost:3000");
});