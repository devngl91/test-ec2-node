require('dotenv').config()
const express = require('express')

const app = express()

app.get('/', (req, res) => {
	res.send('My node-express Docker! V1.0')
})

app.get('/test', (req, res) => {
	res.send(`resposta : ${process.env.TEST_ENV}`)
})

app.listen(80)
