const express = require('express');
const expressHandlebars = require('express-handlebars');



const app = express();
app.engine('handlebars', expressHandlebars({defaultLayoutL 'main'}));
app.set('view engine', 'handlebars');
