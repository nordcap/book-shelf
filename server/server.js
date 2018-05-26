const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const config = require('./config/config').get(process.env.NODE_ENV);

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(config.DATABASE);

app.use(bodyParser.json());
app.use(cookieParser());

const { User } = require('./models/user');
const { Book } = require('./models/book');


// GET requests


// POST requests
app.post('/api/book', (req, res) => {
    const book = new Book(req.body);

    book.save((err, doc) => {
        if (err) return res.status(400).send(err);
        res.status(200).json({
            post: true,
            bookId: doc._id
        });
    });


});

// UPDATE requests


// DELETE requests


const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});


