const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.use(express.static(path.join(__dirname, './views')));

//Body parser middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))

/* GET home page. */
app.get('/', (req, res)=>{
    res.render('index', {name: "Visitor"})
})

app.listen(process.env.PORT || 3000);