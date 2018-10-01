require('dotenv').config();
const express = require('express');
const expressHandlebars = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app = express();
app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
mongoose.connect(process.env.MONGODB_URI||'mongodb://localhost/contractor-project', { useNewUrlParser: true });
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const donation = require('./controller/donation.js');
const charity = require('./controller/charity.js')
const user = require('./controller/user.js')

const port = process.env.PORT || 3000;

donation(app);
charity(app);
user(app);

app.listen(port, () => {

  console.log(`Example app listening on port: ${port}`);
})
