var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/hotel', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once('open', function () {
    console.log("MongoDB database connection established successfully");
});

const Kamar = mongoose.model('kamar', {
    no: String,
    jml: String,
    fasilitas: String,
    harga: String

});

router.get('/', function (req, res, next) {
    Kamar.find((err, resData) => {
        let data = {
            layout: 'admin',
            title: 'list Kamar',
            kamar: resData
        };
        res.render('kamar/list', data);
    });
});

router.get('/edit/:id', function (req, res, next) {
    Kamar.findById(req.params.id, (err, resData) => {
        let data = {
            layout: 'admin',
            title: 'list Kamar',
            kamar: resData
        };
        res.render('kamar/ubah', data);
    });
});

router.post('/:id/update', function (req, res, next) {
    let dataKamar = req.body;
    Kamar.findById(req.params.id, function (err, resData) {
        if (!resData) {
            res.status(404).send("data tidak ditemukan!");
        } else {
            resData.no = dataKamar.no;
            resData.jml = dataKamar.jml;
            resData.fasilitas = dataKamar.fasilitas;
            resData.harga = dataKamar.harga;

            resData.save().then(resData => {
                res.redirect('/admin/kamar');
            })
        }
    });
});

router.get('/:id/delete', function (req, res, next) {
    Kamar.findById(req.params.id, function (err, resData) {
        if (!resData) {
            res.status(404).send("data tidak ditemukan!");
        } else {
            resData.delete().then(resData => {
                res.redirect('/admin/kamar');
            })
        }
    });
});

router.get('/tambah', function (req, res, next) {

    let data = {
        layout: 'admin',
        title: 'Tambah Kamar',
        content: 'Halaman Kamar'
    };
    res.render('kamar/tambah', data);
});

router.post('/tambah', function (req, res, next) {
    let dataKamar = req.body;
    let kamar = new Kamar(dataKamar);
    kamar.save().then(resData => {
        res.redirect('/admin/kamar');
    }).catch(err => {
        res.status(400).send('Simpan kamar gagal!');
    });
});

module.exports = router;