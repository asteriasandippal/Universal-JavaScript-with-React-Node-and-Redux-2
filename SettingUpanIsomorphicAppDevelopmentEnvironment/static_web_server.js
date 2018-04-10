const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World! assa'))

app.listen(5555, () => console.log('Example app listening on port 5555!'))