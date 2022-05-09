// line below required on both model and config
const mongoose = require("mongoose"); 

const rockOutNewCollection = new mongoose.Schema (
    {
// ! update field names/types in this object 
        setup: {type: String}
        , punchline: {type: String}
        // , numberField: {type: Number}
        // , isBooleanField: {type: Boolean }
    }, 
    {
        timestamps: true
    }
); 

// ! update name of collection below, specific to what you want to create here.  change "ent" in next line to "students" or "users" or "widgets"
const Joke = mongoose.model('joke', rockOutNewCollection); 

module.exports = Joke; 