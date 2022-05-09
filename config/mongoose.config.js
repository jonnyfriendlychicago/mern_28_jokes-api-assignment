const mongoose = require("mongoose"); 
//! rename dbName value on line below 
const dbName = "mongoDatabase96"
const mongoURI = `mongodb://localhost:27017/${dbName}`; 
mongoose
    .connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{console.log(`Connected to ${dbName}`);
}) 
    .catch((err) => { console.log("Error in db connection", err); 
}); 
