const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, 'resours')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'resours', 'index.html'));
});

app.get('/pizza', (req, res) => {
    res.send('Сторінка замовлення піци');
});

app.get('/shaurma', (req, res) => {
    res.send('Сторінка замовлення шаурму');
});

app.get('/sushi', (req, res) => {
    res.send('Сторінка замовлення суші');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server working now...\nhttp://localhost:${PORT}/`);
});
