const Discord = require(`discord.js`);
const express = require('express');
const app = express();
const port = 2323;
app.get('/', (req, res) => res.send('Surfs is Alive!'));

app.listen(port, () => console.log(`Surfs is listening to http://localhost:${port}`));