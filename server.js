// importer le protocole http
//const http = require('http'); => code selon ES5 (avant 2015)
import { createServer } from "http";
//import { app } from "./app";

//app.set("port", 3000);
// déclaration du serveur en utilisant http
//const server = http.createServer((req, res) => {});
const server = createServer((req, res) =>{
    res.end("Bonjour, je suis le serveur.")
});

// le serveur est dispo sur le port 3000
server.listen(3000);    

// on va lancer le serveur!!
// sur GitBash, exécuter la commande node server
// sur le navigateur web, tapez localhost:3000