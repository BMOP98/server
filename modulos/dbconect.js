const {mongoose} = require('mongoose')

mongoose.connect("mongodb+srv://maximo98:BMOPpineda1@cluster0.gqrlqzi.mongodb.net/")
    .then(db => console.log('Db is connected'))
    .catch(error => console.log(error))