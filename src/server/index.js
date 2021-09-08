
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const express = require('express');
// const fetch = require('node-fetch');
const app = express();

dotenv.config();

app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const port = 8081;
app.listen(port, () => console.log(`Running on port: ${port}`));
app.use(express.static('dist'));

app.get('/', (req, res) => res.sendFile(path.resolve('dist/index.html')));

app.post('/language', (req, res) => {


    const key = process.env.API_KEY;
    const url = req.body.url;

    fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${key}&url=${url}&lang=en`, { method: 'POST' })
        .then(response => response.json())
        .then(data => res.send(data))
        .catch(error => console.log('error', error));
});
