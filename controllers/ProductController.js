const express = require('express')
const router = express.Router()

const ProductModel = require("../models/ProductModel.js");
//where a middleware decl would go
//const authMiddleware = require("../middleware/Authentication.js");



//listing
//www.domain.com/product/list
router.get("/listing", (req, res)=>{
    const products = ProductModel.getAll();
    res.render("productListing",{
        products,
        title: "Products"
    });
})

//description

router.get("/description", (req, res)=>{
    res.render("productDesc");

})

router.get("/:id",(req,res)=>{

    const id = parseInt(req.params.id)
    const product = ProductModel.getAProduct(id);

    if (product != undefined)
    {
        res.render("productDesc",{
            product,
            title: "Property ID: " + product.id
        })
    }
    else
    {
        //404 page
    }
    
    
})

module.exports = router

