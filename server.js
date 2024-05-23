const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/api/auth/login', (req, res) => {
    const { username, password } = req.body;

    if (username === 'usuario' && password === 'senha') {
        res.status(200).json({ message: 'Login bem-sucedido' });

    } else {
        res.status(401).json({ error: 'Credenciais inválidas' });
    }
});


app.listen(PORT, () => {
    console.log(`Servidor está rodando na porta ${PORT}`)
});