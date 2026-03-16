const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ override: true });

const app = express();
const port = 5000;

const mongoURI = process.env.MONGO_URL || process.env.MONGO_URI || process.env.MONGODB_URI;

const connectToMongo = async () => {
  if (!mongoURI) {
    throw new Error('MongoDB URI is missing. Set MONGO_URL (or MONGO_URI/MONGODB_URI) in Backend/.env');
  }

  await mongoose.connect(mongoURI);
  console.log('Connected to MongoDB successfully');
};

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin) {
      return callback(null, true);
    }

    const isLocalhost = /^http:\/\/(localhost|127\.0\.0\.1):\d+$/.test(origin);
    if (isLocalhost) {
      return callback(null, true);
    }

    return callback(new Error('Not allowed by CORS'));
  }
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/auth', require('./routes/author.js'));
app.use('/api/notes', require('./routes/notes.js'));

const startServer = async () => {
  try {
    await connectToMongo();
    app.listen(port, () => {
      console.log(`iNoteBook backend listening on port ${port}`);
    });
  } catch (error) {
    console.error('Failed to start backend:', error.message);
    process.exit(1);
  }
};

startServer();