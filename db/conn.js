const mongoose = require("mongoose");

// Connecting to the database
mongoose.connect("mongodb+srv://soumya220033:chandra2003@@tplanner.g6ciukq.mongodb.net/?retryWrites=true&w=majority&appName=TPlanner", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Database is connected");
}).catch((err) => {
    console.log(err);
});
