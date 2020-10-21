var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://95.111.235.214:32768/";
const express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.post('/createPost', (req, res, next) => {
    console.log("Se Ejecuto", req.body);
    // req.set('Access-Control-Allow-Origin', '*')
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        dbo.collection("customers").insertOne(req.body, function (err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
        });
    });
    res.json({
        codRes: "00",
        message: "Suceess"
    })
})



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})