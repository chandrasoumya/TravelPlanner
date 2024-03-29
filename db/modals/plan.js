const mongoose = require("mongoose");

const planSchema = new mongoose.Schema({
    Destination: {
        type: String,
        required: true, 
    },
    Date: {
        type: Date,
        required: true, 
    },
    TravelPartners: {
        type: String, 
        required: true, 
    },
    Mobile: {
        type: Number,
        required: true, 
    }
});

const Plan = mongoose.model("plans",planSchema);

module.exports = Plan;
