const express = require("express");
var cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require("mongoose");
const mongoDB = "mongodb://127.0.0.1:27017/testdb"
const Books = require("./models/Books");
mongoose.connect(mongoDB);
console.log(mongoose.connection.readyState);
console.log("CONNECT");
mongoose.Promise = Promise;
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error"));
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();
const port  = 1234
app.use(bodyParser.json()) ;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.resolve("..", "client", "build")))
    app.get("*", (req, res) => {
        res.sendFile(path.resolve("..", "client", "build", "index.html"))
    })
} else if(process.env.NODE_ENV === "development") {
    var corsOptions = {
        origin: "http://localhost:3000",
        optionsSuccessStatus: 200
    };
    app.use(cors(corsOptions));
}

app.use(cors({origin: "http://localhost:3000", optionsSuccessStatus: 200}))

app.post("/api/book/", (req, res) => {
    const {author, name, pages} = req.body;
    Books.findOne({name: name})
    .then((book) => {
        if(!book) {
            new Books({
                author: author,
                name: name,
                pages: pages
            }).save()
            res.status(200).send("ok")
        }
    })
})

app.get("/book/:name", (req, res) => {
    Books.find({name: req.params.name})
    .then((result) => {
        console.log(req.params.name)
        if (result.length != 0) {
            res.send(result[0]);
        } else {
            console.log("wrong")
            res.send({message:"this is not the webpage you are looking for"})
        }
    });
})

app.listen(port, () => {
    console.log("Server listen!")
})

module.exports = app;
