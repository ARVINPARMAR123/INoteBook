const connectToMongo = require('./db.jsx');
const express = require('express')

connectToMongo();

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/auth', require('./routes/author.jsx'))
app.use('/api/notes', require('./routes/notes.jsx'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

