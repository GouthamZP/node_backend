const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");

const taskControllers = require("./controller/taskController");

dotenv.config();

const app = express();
app.use(express.json());

app.post("/tasks", taskControllers.createTask);
app.get("/tasks", taskControllers.getTasks);
app.get("/tasks/:id", taskControllers.getTaskById);
app.patch("/tasks/:id", taskControllers.updateTask);

app.get("/:id", (req, res) => {
    res.status(200).json({
        message: "hello",
        id: req.params.id
    });
});

app.post("/", (req, res) => {
    res.status(200).json(req.body);
});

mongoose.connect("mongodb+srv://deepak:Option1@cluster0.wrzjctb.mongodb.net")
    .then(() => {
        console.log("db connected");
    }).catch((err) => {
        console.log(err);
    });

app.listen(process.env.PORT, () => {
    console.log("Server running on ", process.env.PORT);
});
