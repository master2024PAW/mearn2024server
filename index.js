const express = require('express')
const path = require('path');
const app = express()
const fileRoutes = require('./routes/file-upload-routes');

const cors = require('cors');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000

const connectToMongoDB = require('./mongodb.connection'); // Zaimportuj moduł połączenia

connectToMongoDB(); // Wywołaj funkcję połączenia

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(cors()); 
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api', fileRoutes.routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})