const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Servidor Express.JS funcionando corretamente!')
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor está rodando na porta ${PORT}`)
});