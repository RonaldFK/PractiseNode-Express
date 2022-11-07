// Je require express, puis le module Router
const express = require('express')
const router = express.Router();
// Je require mon module cars
const cars = require('./modules/cars.json')

// Ma route principal

router.get('/',(request,response) => {
    response.render('index', {
        cars
    });
})

// Route paramétré pour génération page par modèle de car
router.get('/:name',(request,response) => {
    // Définition d'une variable à vide que je vais incrémenter par la suite.
    let modelFind = ''
    
    for (let car of cars) {
        // Condition : si l'url demandé correspond bien au nom d'un véhicule de notre base JSON
        if (request.params.name.toLowerCase() === car.Name.toLowerCase()) {
            modelFind = car       
        }}
        if (modelFind) {
            // Je cible le car qui correspond à la demander utilisateur, puis récupère son poid, son origine
            const FindCar = cars.find(car => car.Name === request.params.name)
            const WeightOfCar = FindCar.Weight_in_lbs
            const OriginOfCar = FindCar.Origin
            // filtre des cars qui poddèdent un poid identique ou compris entre le poid -50 kg et le poid +50kg
            // Je demande les cars supérieur au poid -50kg et inférieur au poid +50kg pour avoir un filtre plus léger
            const sameCarPerWeight = cars.filter(car => car.Weight_in_lbs >= WeightOfCar - 50 && car.Weight_in_lbs <= WeightOfCar +50)
            response.render('detailMod', {modelFind,sameCarPerWeight,OriginOfCar})
        } else {
            const inputError = request.params.name
            response.render('error', {inputError})
            
        }
        
    })

// Export de mon module
module.exports = router;