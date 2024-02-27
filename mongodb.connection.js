const mongoose = require('mongoose');
const fs = require('fs');
//const certPath = '/Users/tomaszrak/MERN2024/mearn2024s/X509-cert-2405989301677726198.pem';
const certPath = './X509-cert-2405989301677726198.pem';

const uri = process.env.MONGODB_URI || 'mongodb+srv://cluster0.uzeo7xt.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority';

mongoose.set('strictQuery', false);

module.exports = connectToMongoDB;

function connectToMongoDB() {
    mongoose.connect(uri, {
      tls: true,
      tlsCertificateKeyFile: certPath,
    }).then(() => console.log('Connected to MongoDB......'))
    .catch(err => console.error('Error connecting to MongoDB:', err));
}
