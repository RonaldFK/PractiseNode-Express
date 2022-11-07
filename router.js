// Je require express, puis le module Router
const express = require('express')
const router = express.Router();
// Je require mon module voiture
const voitures = require('./modules/voitures.js')
const cars = require('./modules/cars.json')

// Pour créer une route, on va utiliser router.get

router.get('/',(request,response) => {
    response.render('index', {
        voitures
    });
})

router.get('/:models',(request,response) => {
    // Définition d'une variable à vide que je vais incrémenter par la suite de ma liste de voiture si True
    let modelFind = ''
    for (let voiture of voitures) {
        console.log(request.params.models.toLowerCase() == voiture.modele.toLowerCase())
        if (request.params.models.toLowerCase() === voiture.modele.toLowerCase()) {
            modelFind = voiture       
        }}
        if (modelFind) {
            response.render('detailMod', {
                modelFind
            })
        } else {
            const inputError = request.params.models
            response.render('error', {
                inputError
            })
            
        }
        
    })

// J'exporte mon fichier router en tant que module afin d'y accéder dans le reste de mon appli
module.exports = router;