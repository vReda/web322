const express = require("express");
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');


const generalController = require("./controllers/GeneralController.js");
const productController = require("./controllers/ProductController.js");
const userController = require("./controllers/UserController.js");


const app = express();


app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


app.use(express.static("public"));


app.use(bodyParser.urlencoded({ extended: false }));



app.use("/",generalController);
app.use("/product",productController);
app.use("/user",userController);

// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
/*javascript
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const msg = {
  to: 'test@example.com', // Change to your recipient
  from: 'vreda@myseneca.ca', // Change to your verified sender
  subject: 'Welcome to TravelYoung',
  text: 'Your adventure awaits!',
  //html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })*/


const PORT =3001;

app.listen(PORT, ()=>{
    console.log(`Web Server Assignment is up and running on PORT: ${PORT}`);
})