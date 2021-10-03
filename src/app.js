const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const { partials } = require('handlebars');
const port = process.env.PORT || 3000;

//public static path
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partial_path = path.join(__dirname, "../templates/partials");

//setting view engine.
app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partial_path);

//using static files.
app.use(express.static(static_path))

//routes
app.get("/", (req, res) => {
    res.render('index');
})

app.get("/about", (req, res) => {
    res.render('about');
})

app.get("/weather", (req, res) => {
    res.render('weather');
})

app.get("*", (req, res) => {
    res.render('error', {
        errorMsg: "Oops Page Not Found!!"
    });
})

app.listen(port, () =>{
    console.log(`Listening on port ${port}`);
})