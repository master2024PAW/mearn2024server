const mongoose = require('mongoose');
const fs = require('fs');

// Dekodowanie certyfikatu z zmiennej środowiskowej
let cert;
if (process.env.MONGODB_CERT) {
  cert = Buffer.from(process.env.MONGODB_CERT, 'base64').toString('utf-8');
}

const uri = process.env.MONGODB_URI; // Upewnij się, że masz zmienną środowiskową MONGODB_URI

mongoose.set('strictQuery', false);

const connectToMongoDB = () => {
  mongoose.connect(uri, {
    tls: true,
    tlsCAFile: cert ? './X509-cert-2405989301677726198.pem' : undefined, // Tutaj użyjemy zmiennej cert
    // Możesz potrzebować dodatkowej konfiguracji w zależności od twojego połączenia
  }).then(() => console.log('Connected to MongoDB......'))
    .catch(err => console.error('Error connecting to MongoDB:', err));
};

module.exports = connectToMongoDB;


