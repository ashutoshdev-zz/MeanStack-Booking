var Picture = require('../models/picture');
// Posts API
module.exports = function(apiRouter,photoupload,Link) {
    // get all posts
    apiRouter.get('/pictures', function(req, res) {
        Picture.find({}, function(err, pictures) {
            if (err)
                res.send(err);

            res.json(pictures);
        });
    });
    // add a post
    apiRouter.post('/pictures/add', function(req, res) {
        var picture = new Picture();
        picture.title = req.body.title;
        picture.img = req.body.postimg;
        picture.save(function(err, dta) {
        if (err) {
            res.send(err.message);
        } else {
            res.send("You have successfully added Photo");
        }
    })
    });

//      // get a single post
    apiRouter.post('/pictures/uploadimage',photoupload.array('file',3), function(req, res, next) {
       // console.log(req.body);
        console.log(req.files);
        res.send(req.files);
    });
//    // get a single post
    apiRouter.post('/pictures/id', function(req, res) {
     // console.log(req.body.path)
        Picture.findById(req.body.path, function(err, pictures) {
           // console.log(pictures);
            if (err)
                res.send(err);

            res.json(pictures);
        });
    });
////        
//
//    // update a post
    apiRouter.post('/pictures/update', function(req, res) {
        //console.log(req.body);
        Picture.findById({'_id': req.body.id}, function(err, pictures) {
            if (err)
                res.send(err);            
            pictures.title = req.body.title;
            pictures.img = req.body.img;                      
            pictures.save(function(err) {
                if (err)
                    res.send(err);
                res.json('picture updated!');
            })
            
        });
    });
//    // delete a post
    apiRouter.post('/pictures/delete', function(req, res) {
        Picture.remove({
            _id: req.body.id
        }, function(err, pictures) {
            if (err)
                res.send(err);
            res.json({message: 'Pictures deleted!'});
        })
    });
  
     apiRouter.get('/links', function(req, res) {
        Link.find({}, function(err, links) {
            if (err)
                res.send(err);

            res.json(links);
        });
    });
    // add a post
    apiRouter.post('/links/add', function(req, res) {
        var links = new Link();
        links.linkname = req.body.linkname;
        links.img = req.body.img;
        links.save(function(err, dta) {
        if (err) {
            res.send(err.message);
        } else {
            res.send("You have successfully added Links");
        }
    })
    });

//    // get a single post
    apiRouter.post('/links/id', function(req, res) {
     // console.log(req.body.path)
        Link.findById(req.body.path, function(err, links) {
           // console.log(pictures);
            if (err)
                res.send(err);

            res.json(links);
        });
    });
////        
//
//    // update a post
    apiRouter.post('/links/update', function(req, res) {
        //console.log(req.body);
        Link.findById({'_id': req.body.id}, function(err, links) {
            if (err)
                res.send(err);            
            links.linkname = req.body.linkname;
            links.img = req.body.img;                      
            links.save(function(err) {
                if (err)
                    res.send(err);
                res.json('Links updated!');
            })
            
        });
    });
//    // delete a post
    apiRouter.post('/links/delete', function(req, res) {
        Link.remove({
            _id: req.body.id
        }, function(err, links) {
            if (err)
                res.send(err);
            res.json({message: 'Links deleted!'});
        })
    });

};