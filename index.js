const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jobController = require("./controller/jobController");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.post("/jobs", jobController.createJob);
app.get("/jobs", jobController.readJobs);
app.get("/jobs/:id");
app.patch("/jobs/:id");
app.delete("/jobs/:id");

mongoose.connect("mongodb+srv://deepak:Option1@cluster0.wrzjctb.mongodb.net")
    .then(() => {
        console.log("db connected");
        app.listen(process.env.PORT, () => {
            console.log("Server running on ", process.env.PORT);
        });
    }).catch((err) => {
        console.log(err);
    });
