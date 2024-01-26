const Job = require("../models/job");

const createJob = async (req, res) => {
    console.log(req.body);
    const result = await Job.create(req.body);
    return res.status(200).json(result);
}

const readJobs = async (req, res) => {
    let responseArray;
    const result = await Job.find({});
    if (req.query.searchTerm) {
        responseArray = result.filter((doc) => doc.title.toLowerCase().includes(req.query.searchTerm.toLowerCase()));
    } else {
        responseArray = result;
    }
    return res.status(200).json(responseArray);
}

module.exports = { createJob, readJobs };
