const express = require("express");
const app = express();
const cors = require("cors")
const port =process.env.port || 5000;
const UserRouter = require("./db/router/users");
const PlanRouter = require("./db/router/plans");

app.use(express.json());
app.use(cors());

// database connection
require("./db/conn");


const path = require("path");
app.get("/", (req, res) => {
app.use(express.static(path.resolve(__dirname, "tplaner", "build")));
res.sendFile(path.resolve(__dirname, "tplaner", "build", "index.html"));
});


// CRUD operation
app.use(UserRouter);
app.use(PlanRouter);

app.listen(port,()=>{
    console.log("server is live on "+port);
})