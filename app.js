const express = require('express');
const expressHandlebars = require('express-handlebars');



const app = express();
app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

const donation = require('./controller/donation.js');

const port = process.env.PORT || 3000;

donation(app);


app.listen(port, ()=> {
    console.log(`App listening on port ${port}!`);
})
