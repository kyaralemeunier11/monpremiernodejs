// import du frameword ExpressJS
const express = require("express");

// on crée l'application ExpressJs
const app = express();

// app.use((req, res) => {
//     res.json({message : "Votre message a bien été reçu"});
// });

// on définit un route de type GET
app.get("/", (req, res) => {
    res.end("Hello, i am the server");
});
// route /accueil
app.get("/accueil", (req, res) => {
    res.end("Vous êtes à l'accueil");
});
// route /apropos
app.get("/apropos", (req, res) => {
    res.end("Page à propos");
});
// route /services
app.get("/services", (req, res) => {
    res.end("Page services");
});
// route contact
app.get("/contact", (req, res) => {
    res.end("Page contact");
});

// créer une route avec la méthode POST
app.post("/matin", (req, res) => {
    res.end("MATIN");
});
// créer une route avec la méthode PUT
app.put("/midi", (req, res) => {
    res.end("MIDI");
});
// créer une route avec la méthode DELETE
app.delete("/soir", (req, res) => {
    res.end("SOIR");
});

module.exports = app;

// // crée la route "/bonjour" de type GET
// app.get('/bonjour', (req, res) => {
//     res.send("How are you?");
// })
// // crée une route "/cuisine" de type GET
// app.get("/cuisine", (req, res) => {
//     res.send("Vous êtes dans la cuisine");
// });
//  //  crée une route "/bungalow" de type GET
// app.get("/bungalow", (req, res) => {
//     res.send("bungalow 1");
// });

// app.listen(3001,() => {
//     console.log("Serveur écoute le port 3001");
// });