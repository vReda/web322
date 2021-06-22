const express = require('express')
const router = express.Router()

router.post("/register",(req,res)=>{
    //Will be called if the client sends a post request domainname.com/user/registration
    //req.body.nameOfFormControl to access widgets

    const errors = [];
    first = req.body.firstName;
    if (req.body.firstName == "")
    {
        errors.push("Please enter a first name.");
    }
    if (req.body.lastName == "")
    {
        errors.push("Please enter a last name.");
    }
    if (req.body.email == "")
    {
        errors.push("Please enter a valid email.");
    }
    if (req.body.password == "")
    {
        errors.push("Please enter a password.");
    }
    if (req.body.password2 == "")
    {
        errors.push("Please enter the password a second time.");
    }
    if (req.body.password != req.body.password2)
    {
        errors.push("Passwords do not match.")
    }
    if ((req.body.password).length < 6)
    {
        errors.push("Password must be at least 6 characters long.")
    }

    if (errors.length > 0)
    {
        res.render("registration",{
            errors
        })
    }
    else
    {
        res.redirect("/user/dashboard");
    }

})

router.post("/login",(req,res)=>{
    const errors = [];
    if (req.body.email == "")
    {
        errors.push("Please enter a valid email.");
    }
    if (req.body.password == "")
    {
        errors.push("Please enter a valid password.");
    }

    if (errors.length > 0)
    {
        res.render("login",{
            errors
        })
    }
    else
    {
        res.redirect("/user/dashboard");
    }

})


//reg

router.get("/registration", (req, res)=>{
    res.render("registration", {
    title: "Register"
    });
})

//login

router.get("/login", (req, res)=>{
    res.render("login", {
        title: "Login"
    });
})

router.get("/dashboard", (req,res)=>{
    res.render("dashboard", {
        title: "Dashboard",
        name: first
    })
})


module.exports = router