const mongoose=require('mongoose');

mongoose.connect('mongodb://0.0.0.0/codeial_devlopment');

const db= mongoose.connection;
//mongoose.set('strictQuery', true);

db.on('error',console.error.bind(console,'Error connecting to MongoDB'));

db.once('open',function(){
    console.log('connected to database :: MongoDB');
});

module.exports = db;