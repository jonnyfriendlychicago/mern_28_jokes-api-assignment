const express = require("express"); 
const app = express(); 
require('./config/mongoose.config'); 

// below is "body parser"
app.use(express.json()); 
app.use(express.urlencoded({extended: true})); 

// all programmatic route files must be listed here: below the express.json/urlencoded and above the port/app.listen 
// ! update name of route file below
require('./routes/joke.routes')(app); 

const port = 8000; 
app.listen(port, () => {
    console.log(`Express server running on port ${port}.  Rack 'em.`)
});

