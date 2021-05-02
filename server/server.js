// Set up
var express = require('express');                            // create our app w/ express
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
var FileStore = require('session-file-store')(session)
var MongoStore = require('connect-mongo');
const { exec } = require('node:child_process');
// Configuration
mongoose.connect('mongodb://localhost:27017/wegudok');
mongoose.Promise = global.Promise;
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

var app = express();   
//세션 설정
app.use(session({
    secret: 'work hard'
    ,saveUninitialized: true,
    resave: false,
    store:new FileStore(),
    maxAge:null
}));

app.use(morgan('dev'));                                         // log every request to the console
app.use(express.urlencoded({ 'extended': 'true' }));            // parse application/x-www-form-urlencoded
app.use(express.json());                                     // parse application/json

app.use(methodOverride());
app.use(cors());


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
    accountno: String,
    title: String,
    date: Number,
    price: Number
});

var User = mongoose.model('User', {
    email: { type: String, required : true },
    password: { type: String, required : true },
    accountno: String,
    name: String,
    phoneno: String,
    balance: String
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
                
                ans = decrypt(key, results.user.password);
                if (req.body.password == ans) {
                    if(req.session.userID === undefined ){
                        req.session.userID = results.user.accountno;
                        req.session.save(function(err) {
                            // session saved
                          })
                    }
                    console.log('req.session: '+req.session.userID);
                }
                res.json({'Logged in!':300});
                
                
            }
        }
        );
        
                

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
            balance : '0'

        });

        userinfo.save(function(err){
            if(err){res.json({'Message':'Not Registered!'})}
        });
        if(req.session.email === undefined || req.session.accountno === undefined){
            req.session.userID = req.body.accountno;
            req.session.save(function(err) {
                // session saved
              })
        }
        res.json({'Registered!':200});
        



    });


    
    // Get sublist for tab1 and create sublist if none exists
    app.get('/sublist', function (req, res) {


        console.log(req.session.userID);
        Subscription.find({title : { $in:['Netflix','KakaoTalk','Coupang','Naver','YouTube'] },accountno:'10020703*****'},
        function(err,subs){

            if(err)
                res.send(err)
            res.json(subs)

        });

    })

   


    



// listen (start app with node server.js) ======================================
app.listen(3000);
console.log("App listening on port 3000");
