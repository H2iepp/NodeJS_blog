const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/h2iepp_product', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connect success');
    } catch (error) {
        console.log('Connect fail');
    }
}

module.exports = { connect };
