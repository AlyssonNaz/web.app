var express = require('express');
var router = express.Router();
var db = requireCore('rah.db');
var utils = requireCore('rah.utils');
var path = require('path');
var fs = require('fs');

router.get('/core/:folder/:file', function(req, res, next) {   
    var filename = process.env.ROOT_DIR  + '/web/core/' + req.params.folder + '/' + req.params.file;
    fs.exists(filename, function(existis) {
        if (existis)
            res.set('Content-Type', 'text/html').sendFile('/web/core/' + req.params.folder + '/' + req.params.file,  { root: process.env.ROOT_DIR });
        else 
            res.status(404).send();
    }); 
});

router.get('/modules/:folder/:file', function(req, res, next) {   
    var filename = process.env.ROOT_DIR  + '/web/modules/' + req.params.folder + '/' + req.params.file;
    fs.exists(filename, function(existis) {
        if (existis)
            res.set('Content-Type', 'text/html').sendFile('/web/modules/' + req.params.folder + '/' + req.params.file,  { root: process.env.ROOT_DIR });
        else 
            res.status(404).send();
    }); 
});

/* GET partials for angular routeProvider pages. */
router.get('/*', function(req, res, next) {  
    console.log('lalala');
    res.set('Content-Type', 'text/html').sendFile('/rah/web/modules/index.html',  { root: process.env.ROOT_DIR });
});



module.exports = router;