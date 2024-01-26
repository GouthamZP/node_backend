const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String
    },
    salary: {
        type: Number,
        required: true,
    },
    experienceRequired: {
        type: Number,
    }
});

module.exports = mongoose.model("jobs", jobSchema);
