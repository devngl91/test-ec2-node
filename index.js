require('dotenv').config()
const express = require('express')

const app = express()

app.get('/', (req, res) => {
	res.send('My node-express Docker! V1.6')
})

app.get('/1', (req, res) => {
	res.send('ROTA 1')
})

app.get('/2', (req, res) => {
	res.send('ROTA 2')
})

app.get('/3', (req, res) => {
	res.send('ROTA 2')
})

app.get('/test', (req, res) => {
	res.send(`resposta : ${process.env.TEST_ENV}`)
})

// port que externaliza a aplicação do ( CONTAINER )
app.listen(80)
