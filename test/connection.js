const mongoose = require('mongoose');
<<<<<<< HEAD
const bodyParser = require('body-parser');
=======
>>>>>>> fccd69b3b00dea74c13e9ddf5990d8ddaf92ec1d
mongoose.set('useNewUrlParser', true);
mongoose.connect('mongodb://localhost/airbnb');
const db = mongoose.connection.once('open', function(){
    console.log('Database has been Connected');
}).on('error',function(error){
    console.log('Check Database Connection', error);
})
<<<<<<< HEAD
=======
 
module.exports = db; 
>>>>>>> fccd69b3b00dea74c13e9ddf5990d8ddaf92ec1d
