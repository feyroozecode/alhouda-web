const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
// use bodyparser
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.end('Alhamdoulillah API is working fine')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})