const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    img: String,
    
})

const productModel = mongoose.model("products", productSchema)

module.exports = {
    productModel
}