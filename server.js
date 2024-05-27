const express = require('express');
const cors = require('cors');
const { config } = require('dotenv');
const router = require('./routes/index.route');

// Load environment variables from .env file
config({ path: `.env` });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());


app.use('/', router);


const PORT = process.env.API_PORT 
app.listen(PORT, () => {
    console.log(`🚀 App listening on the port ${PORT}`);
});