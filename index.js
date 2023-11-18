const express = require('express')

const app = express()

app.get('/', (req, res) => {
	res.send('My node-express Docker!')
})

app.listen(4001)
