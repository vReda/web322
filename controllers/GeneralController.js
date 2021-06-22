const express = require('express')
const ProductModel = require('../models/productModel.js');
const router = express.Router()


//home

router.get("/", (req, res)=>{
    
    const types = ProductModel.getTypes();
    const locations = ProductModel.getLocations();
    
    res.render("home",{
        types,
        locations,
        title: "Home"
    });
})

//about

router.get("/about-us", (req, res)=>{
    res.render("about",{
        title: "About"
    });
})

module.exports = router