// ! update below const to be "ProgramController" or "WhateverController" etc. 
// ! addListener, make sure all of the routes are updated
const JokeController = require("../controllers/joke.controller"); 
const { addListener } = require("../models/joke.model");

module.exports = (app) => {
    app.get('/', JokeController.homePageDelivery); 
    app.get("/api/jokes", JokeController.getJokes); 
    app.get("/api/jokes/:id", JokeController.getJokeById); 
    app.post("/api/jokes",JokeController.createJoke); 
    app.put("/api/jokes/:id", JokeController.updateJoke); 
    app.delete("/api/jokes/:id", JokeController.deleteJoke); 
};

