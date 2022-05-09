const express = require("express"); 
const app = express(); 
require('./config/mongoose.config'); 
// ! update name of route file below

// below is "body parser"
app.use(express.json()); 
app.use(express.urlencoded({extended: true})); 

// all routes must be listed here: below the express.json/urlencoded and above the port/app.listen 
require('./routes/ent.routes')(app); 

const port = 8000; 
app.listen(port, () => {
    console.log(`Express server running on port ${port}.  Rack 'em.`)
});

