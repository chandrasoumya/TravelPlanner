const mongoose = require("mongoose");

// Connecting to the database
mongoose.connect("mongodb+srv://soumya220033:chandra2003%40@tplanner.g6ciukq.mongodb.net/?retryWrites=true&w=majority&appName=TPlanner", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000, // Increase this value
    socketTimeoutMS: 45000, // Increase this value
}).then(() => {
    console.log("Database is connected");
}).catch((err) => {
    console.log(err);
});
