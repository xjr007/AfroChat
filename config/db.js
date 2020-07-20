const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = () => {
    mongoose.connect(db,
         { useNewUrlParser: true,
            useUnifiedTopology: true
         })
         .then(() => console.log("MongoDB connected"))
         .catch(err => console.error(err.message))
}

module.exports = connectDB;