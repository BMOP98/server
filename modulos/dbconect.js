const {mongoose} = require('mongoose')

mongoose.connect("mongodb+srv://maximo98:BMOPpineda1@cluster0.gqrlqzi.mongodb.net/")
    .then(db => console.log('Conectado a la base de datos'))
    .catch(error => console.log(error))