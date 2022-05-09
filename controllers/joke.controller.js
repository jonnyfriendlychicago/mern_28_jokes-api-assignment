const Joke = require('../models/joke.model'); 

const homePageDelivery =  (request, response) => {
    response.send("Hello, JRF world!  Ya hearin me?  Go Blue Jays.")
}; 

const createJoke = (request, response) => {
    console.log("createJoke: request.body:", request.body)
    Joke.create(request.body)
    .then((newJoke) => {
        response.status(201).json(newJoke); 
    })
    .catch((err) => {
        response.status(500).json(err); 
    }); 
}; 

const getJokes = (request, response) => {
    Joke.find({})
    .then((jokes) => {
        response.json(jokes); 
    })
    .catch((err) => {
        response.status(500).json(err); 
    }); 
}; 

const getJokeById = (request, response) => {
    // Joke.find({ "_id": request.params.id })
    // above-is-one-way-to-do-it , Mach recommends below instead.  but above is required if searching by another field.  
    Joke.findById(request.params.id )
    .then((joke) => {
        response.json(joke); 
    })
    .catch((err) => {
        response.status(500).json(err); 
    }); 
}; 

const updateJoke = (request, response) => {
    Joke.findByIdAndUpdate (request.params.id, request.body , {new: true} )
    .then((joke) => {
        response.json(joke); 
    })
    .catch((err) => {
        response.status(500).json(err); 
    }); 
}; 

const deleteJoke = (request, response) => {
    Joke.findByIdAndDelete(request.params.id )
    .then((joke) => {
        response.json(joke); 
    })
    .catch((err) => {
        response.status(500).json(err); 
    }); 
}; 

module.exports = {
    createJoke, 
    getJokes, 
    getJokeById, 
    updateJoke, 
    deleteJoke, 
    homePageDelivery
};