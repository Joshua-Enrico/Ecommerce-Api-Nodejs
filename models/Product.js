const mongoose = require("mongoose")


const ProductSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, unique: true },
        description: { type: String, required: true},
        img: { type: String, required: true },
        categories: { type: Array, required: true },
        size: { type: Array, required: true },
        color: { type: Array, required: true },
        price: { type: Number, required: true },
        amount: { type: Number, required: true },
        active: { type: Boolean, default: true },
        inStock: { type: Boolean, default: true },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Product", ProductSchema);