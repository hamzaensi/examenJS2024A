const express = require("express")
const fs = require("fs")
const ejs = require("ejs")
const path = require("path")
const bodyParser = require('body-parser');
const app = express()
const port = 3000
app.use(bodyParser.json());
app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    res.render('home')
})
/* 
- Ajouter les routes necessaires
- On peut ajouter un nouveau produit au panier 
- On peut supprimer un produit 
- utiliser products.json pour sauvergarder les objects produits

*/


app.listen(port, console.log(`Server is listerning on port ${port}`))
