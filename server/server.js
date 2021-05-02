// Set up
var express = require('express');
var app = express();                               // create our app w/ express
var mongoose = require('mongoose');                     // mongoose for mongodb
var morgan = require('morgan');             // log requests to the console (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var cors = require('cors');
var engines = require('consolidate');
var async = require('async');
var path = require('path');
var fs = require('fs');
var crypto = require('crypto');
var session = require('express-session');
// Configuration
mongoose.connect('mongodb://localhost:27017/wegudok');
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use(morgan('dev'));                                         // log every request to the console
app.use(express.urlencoded({ 'extended': 'true' }));            // parse application/x-www-form-urlencoded
app.use(express.json());                                     // parse application/json

app.use(methodOverride());
app.use(cors());

//세션 설정
app.use(session({
    secret: 'work hard'
    , saveUnintialized: true
}));
// view 경로 설정
app.set('views', __dirname + '/views');

// 화면 engine을 html로 설정
app.engine('html', engines.mustache);
app.set('view engine', 'html');

// 기본 path를 /public으로 설정(css, javascript 등의 파일 사용을 위해)
app.use(express.static(__dirname + '/public'));

//Encryption

//function encrypt

var key = 'D0gwPBtkk2BnIsgNlXQcLNUNrWkVZk8a'; //시크릿키로 키생성

function encrypt(key, data) {
	var cipher = crypto.createCipher('aes-256-cbc', key); //use crypto module to create cipher and decipher
	var crypted = cipher.update(data, 'utf-8', 'hex'); //updates plain text to crypted text
	crypted += cipher.final('hex'); //produces encrypted text

	return crypted;
}
//function decrypt
function decrypt(key, data) {
	var decipher = crypto.createDecipher('aes-256-cbc', key);
	var decrypted = decipher.update(data, 'hex', 'utf-8');
	decrypted += decipher.final('utf-8');

	return decrypted;
}


// Models
var Subscription = mongoose.model('Subscription', {
    accountno: Number,
    title: String,
    date: Date,
    price: Number
});

var User = mongoose.model('User', {
    email: { type: String, required : true },
    password: { type: String, required : true },
    accountno: String,
    name: String,
    phoneno: String,
});
// Routes
//login
app.post('/', function (req, res) {
    console.log(req.body);
/*    if (req.session.email) {
        res.redirect('/members/tab1');
    }
    else {*/

        async.parallel({
            user: function (callback) {
                User.findOne({ 'email': req.body.email }).exec(callback);
            },
        }, function (err, results) {
            if (err) { return err; }
            else if (results.user == null) {
                res.json({'empty':1000});
            }
            else {
                res.json({'Logged in!':300});
                ans = decrypt(key, results.user.password);
                if (req.body.password == ans) {
                    req.session.email = results.user.email;
                    req.session.accountno = results.user.accountno;
                }
                
            }
        }
        );
        console.log(req.session.email);
                

    //}

});
//Register
    app.post('/register',function(req,res){
        console.log(req.body);
        var password = encrypt(key,req.body.password);
        var userinfo = new User({
            email: req.body.email,
            password: password,
            accountno: req.body.accountno,
            name: req.body.name,
            phoneno: req.body.phonenumber,

        });

        userinfo.save(function(err){
            if(err){res.json({'Message':'Not Registered!'})}
        });
        req.session.email = req.body.email;
        req.session.accountno = req.session.accountno;

        res.json({'Registered!':200});
        



    });
    // Get sublist for tab1
    app.get('/member/tab1', function (req, res) {

    console.log("fetching subs");

    // use mongoose to get all reviews in the database
    Subscription.find({ 'accountno': req.session.account }, function (err, data) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err)
            res.send(err)

        res.json(data); // return all reviews in JSON format
    });
});

// create review and send back all reviews after creation
app.post('/api/reviews', function (req, res) {

    console.log("creating review");

    // create a review, information comes from request from Ionic
    Review.create({
        title: req.body.title,
        description: req.body.description,
        rating: req.body.rating,
        done: false
    }, function (err, review) {
        if (err)
            res.send(err);

        // get and return all the reviews after you create another
        Review.find(function (err, reviews) {
            if (err)
                res.send(err)
            res.json(reviews);
        });
    });

});

// delete a review
app.delete('/api/reviews/:review_id', function (req, res) {
    Review.remove({
        _id: req.params.review_id
    }, function (err, review) {

    });
});


// listen (start app with node server.js) ======================================
app.listen(3000);
console.log("App listening on port 3000");
