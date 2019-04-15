const mongoose = require('mongoose');
const bodyParser = require('body-parser');
mongoose.set('useNewUrlParser', true);
mongoose.connect('mongodb://localhost/airbnb');
const db = mongoose.connection.once('open', function(){
    console.log('Database has been Connected');
}).on('error',function(error){
    console.log('Check Database Connection', error);
})
 
module.exports = db; 
