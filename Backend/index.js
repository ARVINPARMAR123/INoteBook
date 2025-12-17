const connectToMongo = require('./db.js');
const express = require('express')
const cors = require('cors')

connectToMongo();

const app = express()
const port = 5000

app.use(cors({origin: 'http://localhost:5173'}));
app.use(express.json());

app.use('/api/auth', require('./routes/author.js'))
app.use('/api/notes', require('./routes/notes.js'))

app.listen(port, () => {
  console.log(`iNoteBook backend listening on port ${port}`)
});