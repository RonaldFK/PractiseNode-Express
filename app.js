// Je require mon serveur express, puis je récupère dans une variable la focntion express()
// => Suivre la doc Express / rien à modifier
const express = require('express');
const app = express();

// Je require mon fichier router
const router = require('./router');
// Je dis à express d'utiliser router
app.use(router);

// on précise à express le repertoire dans lequel on place nos fichiers statiques
app.use(express.static(__dirname + '/public'));

// je précise à express quelmoteur de template utiliser dans notre app
app.set('view engine', 'ejs');

// Je déclare mon port et je démarre mon serveur

const port = 3000;

app.listen(port,() =>{
    console.log(`Serveur démarré sur le port : ${port}`);
})