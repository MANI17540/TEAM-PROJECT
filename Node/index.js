var app = require('express')
var express = require('express')  
var app = express()

app.use(express.static("team project"))

app.get("/registration", function (req, res){
    res.sendFile(__dirname + "/team project/" + "registration.html")
})

var admin = require("firebase-admin");

var serviceAccount = require("./key.json");

const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore} = require('firebase-admin/firestore');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = getFirestore();

app.get("/reg", function (req, res){
    db.collection('students').add({
       FullName: req.query.name,
       Email: req.query.email,
       Password: req.query.password
    })
    .then(()=>{
        res.send("SIGNUP SUCCESSFUL, PLEASE LOGIN <a href='/login'>LOGIN</a>")
    })
    
})

app.get("/login", function (req, res){
    res.sendFile(__dirname + "/team project/" + "login.html")
})

app.get("/signin", function (req, res){
    db.collection('students')
    .where("Email", "==", req.query.email)
    .where("Password", "==", req.query.password)
    .get()
    .then((data)=>{
        if(data.empty){
            res.send("not Successful")
        }
        else{
            res.redirect("/new.html")
        }
    })
})
app.listen(3000, function () {  
console.log('Example app listening on port 3000!');
})