const mongoose = require("mongoose");

const mongoUrl = "mongodb+srv://hafizsameed:helloworld@cluster0-0wpce.mongodb.net/speedtyper2019?retryWrites=true&w=majority";
mongoose.connect(mongoUrl);

module.exports = mongoose;