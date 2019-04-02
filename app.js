const express = require('express');
const app = express();
const path = require('path');

app.use('/materialize', express.static('materialize'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// cotrollers
app.get('/', function(req, res){
  res.render('index');
});

app.listen(3000);
console.log('i am in port 3000');
