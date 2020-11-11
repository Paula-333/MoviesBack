const mongoose = require ('mongoose');
const MongoURI = process.env.MongoURI || 'mongodb://localhost:27017//heroku-mongo'


mongoose.connect(MongoURI, {useCreateIndex:true,useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log('conected to Mongodb:'+MongoURI))