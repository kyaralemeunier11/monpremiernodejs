// import du frameword ExpressJS
const express = require("express");

// on crée l'application ExpressJs
const app = express();

// on définit un route de type GET
app.get("/", (req, res) => {
    res.end("Hello, i am the server");
});
// crée la route "/bonjour" de type GET
app.get('/bonjour', (req, res) => {
    res.send("How are you?");
})
// crée une route "/cuisine" de type GET
app.get("/cuisine", (req, res) => {
    res.send("Vous êtes dans la cuisine");
});
 //  crée une route "/bungalow" de type GET
app.get("/bungalow", (req, res) => {
    res.send("bungalow 1");
})

app.listen(3001,() => {
    console.log("Serveur écoute le port 3001");
});