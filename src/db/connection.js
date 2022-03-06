const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/myapp', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('connected ');

    } catch (e) {
        console.log(e);
    }
}

module.exports = {connectDB}