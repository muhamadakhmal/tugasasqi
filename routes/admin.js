var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    let data = {
        layout: 'admin',
        title: 'Dashboard',

    };
    res.render('dashboard', data);
});

module.exports = router;


// var express = require('express');
// var router = express.Router();

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/hotel', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// const connection = mongoose.connection;
// connection.once('open', function () {
//     console.log("MongoDB database connection established succesfully");
// });

// router.get('/', function (req, res, next) {
//     let data = {
//         layout: 'frontend',
//         title: 'Hotel Melati',

//     };

//     res.render('index', data);
// });

// // var Schema = mongoose.Schema;


// // var kamarSchema = new Schema({
// //     no_kamar: String,
// //     tempat_tidur: String,
// //     fasilitas: [String],
// //     harga_kamar: String
// // }, { collection: 'hotel'});

// // var kamarData = mongoose.model('kamarData', kamarSchema);

// // Router.get('/', function (req, res, next) {
// //     let email = req.query.inputEmail;
// //     let password = req.query.inputPassword;
// //     res.render('admin');
// // });

// // Router.get('/hotel', function (req, res, next) {
// //     kamarData.find()
// //         .then(function (doc) {
// //             res.render('/kamar', {
// //                 items: doc
// //             });
// //         });
// // });
// module.exports = router;