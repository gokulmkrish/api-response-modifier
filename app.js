const express = require('express');


const { serialize, deserialize } = require('./lib/util');

const userData = require('./data/user_data.json');
const { userSchema } = require('./schema/userSchema');

const app = express();

const PORT = process.env.port || 5000;


app.use(express.json());
app.use(express.urlencoded({ urlencoded: true }));

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.get('/data', (req, res) => {
    res.send(userData);
});

app.get('/serialize', (req, res) => {
    const serializeData = serialize(userData, userSchema);
    res.send(serializeData);
});

app.post('/deserialize', (req, res) => {
    const body  = req.body;
    const deserializeData = deserialize(body, userSchema);
    res.send(deserializeData);
});

app.listen(PORT, () => {
    console.info(` =========== Server Started at: ${PORT} =========== `);
});
