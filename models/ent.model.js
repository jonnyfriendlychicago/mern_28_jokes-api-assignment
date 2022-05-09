// line below required on both model and config
const mongoose = require("mongoose"); 

const rockOutNewCollection = new mongoose.Schema (
    {
        stringField: {type: String}
        , numberField: {type: Number}
        , isBooleanField: {type: Boolean }

        // stringField: String
        // , numberField: Number
        // , isBooleanField: Boolean
    }, 
    {
        timestamp: true
    }
); 

// ! update name of collection below, specific to what you want to create here.  change "ent" in next line to "students" or "users" or "widgets"
const Ent = mongoose.model('ent', rockOutNewCollection); 

module.exports = Ent; 