const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

//MongoDB
mongoose.connect('mongodb://localhost:27017/kc161', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});


app.get('/', (req, res) => {
    res.send('Hello, Express and MongoDB!');
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});