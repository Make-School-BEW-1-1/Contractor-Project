const express = require('express');
const expressHandlebars = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');



const app = express();
app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
mongoose.connect('mongodb://localhost/contractor-project', { useNewUrlParser: true });
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const donation = require('./controller/donation.js');

const port = process.env.PORT || 3000;

donation(app);


app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
})
