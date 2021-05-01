// Set up
var express  = require('express');
var app      = express();                               // create our app w/ express
var mongoose = require('mongoose');                     // mongoose for mongodb
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var cors = require('cors');
var engines = require('consolidate');
// Configuration
//mongoose.connect('mongodb://localhost/reviewking');

app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());
app.use(cors({credentials: true, origin: "https://developer.wooribank.com"}));
app.options('*', cors());
// view 경로 설정
app.set('views', __dirname + '/views');

// 화면 engine을 html로 설정
app.engine('html', engines.mustache);
app.set('view engine', 'html');

// 기본 path를 /public으로 설정(css, javascript 등의 파일 사용을 위해)
app.use(express.static(__dirname + '/public'));



app.get('/',function(req,res){
    res.render('index',{title:'Test'});

});
/*
// Models
var Review = mongoose.model('Review', {
    title: String,
    description: String,
    rating: Number
});

// Routes

    // Get reviews
    app.get('/api/reviews', function(req, res) {

        console.log("fetching reviews");

        // use mongoose to get all reviews in the database
        Review.find(function(err, reviews) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(reviews); // return all reviews in JSON format
        });
    });

    // create review and send back all reviews after creation
    app.post('/api/reviews', function(req, res) {

        console.log("creating review");

        // create a review, information comes from request from Ionic
        Review.create({
            title : req.body.title,
            description : req.body.description,
            rating: req.body.rating,
            done : false
        }, function(err, review) {
            if (err)
                res.send(err);

            // get and return all the reviews after you create another
            Review.find(function(err, reviews) {
                if (err)
                    res.send(err)
                res.json(reviews);
            });
        });

    });

    // delete a review
    app.delete('/api/reviews/:review_id', function(req, res) {
        Review.remove({
            _id : req.params.review_id
        }, function(err, review) {

        });
    });

*/
// listen (start app with node server.js) ======================================
app.listen(3000);
console.log("App listening on port 3000");
