var Trip = require('../models/trip');
var Payment = require('../models/payment');
var Interest = require('../models/interest');
// Posts API
module.exports = function(apiRouter,upload,stripe) {

    // get all posts
    apiRouter.get('/trips', function(req, res) {
        Trip.find({}, function(err, trips) {
            if (err)
                res.send(err);

            res.json(trips);
        });
    });
    // add a post
    apiRouter.post('/trips', function(req, res) {
       // console.log(req.body);
        var trip = new Trip();
        trip.title = req.body.title;
        trip.description = req.body.description;
        trip.category = req.body.category;
        trip.accommodation = req.body.accommodation;
        trip.accommodation_info = req.body.accommodation_info;
        trip.date = req.body.date;
        trip.date_end = req.body.date_end;
        trip.gender = req.body.gender;
        trip.locationfrom = req.body.locationfrom;
        trip.locationto = req.body.locationto;
        trip.nooftravellers = req.body.nooftravellers;
        trip.price_person = req.body.price_person;
        trip.rental_car = req.body.rental_car;
        trip.tripimg = req.body.tripimg;
        trip.tripimg1 = req.body.tripimg1;
        trip.tripimg2 = req.body.tripimg2;
        trip.tripimg3 = req.body.tripimg3;
        trip.tripimg4 = req.body.tripimg4;
        trip.paramal = req.body.paramal;
        trip.user_id = req.body.user_id;
        trip.user_role = req.body.user_role;
        trip.status = req.body.status;
        Trip.findOne({'paramal': req.body.paramal}, function(err, pst) {
           // console.log(pst)
            if (pst) {
                   trip.paramal =trip.paramal+'-'+Math.random().toString(16).substr(2);
                                   
            }else {
               
            } 
           // console.log("here");
            // console.log(trip);
            trip.save(function(err, dta) {
                        if (err) {
                            res.send(err.message);
                        } else {
                            res.send("You have successfully added Trip");
                        }
                    })
        });
    });

    // get a single post
    apiRouter.get('/trips/:id', function(req, res) {
        Trip.findById(req.params.id, function(err, post) {
            if (err)
                res.send(err);

            res.json(post);
        });
    });
      // get a single post
    apiRouter.post('/trips/uploadimage',upload.array('file',3), function(req, res, next) {
       // console.log(req.body);
        console.log(req.files);
        res.send(req.files);
    });
    // get a single post
    apiRouter.post('/trips/parmal', function(req, res) {

        Trip.findOne({'paramal': req.body.path}, function(err, post) {
            if (err)
                res.send(err);

            res.json(post);
        });
    });
    
      apiRouter.post('/trips/myalltrips', function(req, res) {
        //console.log(req.body.userid);
        Trip.find({'user_id': req.body.userid}, function(err, post) {
            if (err)
                res.send(err);

            res.json(post);
        });
    });
//        

    // update a post
    apiRouter.post('/trips/editparmal', function(req, res) {
        //console.log(req.body);
        Trip.findById({'_id': req.body.id}, function(err, trip) {
            if (err)
                res.send(err);            
            trip.title = req.body.title;
            trip.description = req.body.description;
            trip.tripimg = req.body.tripimg;
            trip.tripimg1 = req.body.tripimg1;
            trip.tripimg2 = req.body.tripimg2;
            trip.tripimg3 = req.body.tripimg3;
            trip.tripimg4 = req.body.tripimg4;
            trip.gender = req.body.gender;
            trip.locationfrom = req.body.locationfrom;
            trip.locationto = req.body.locationto;    
            trip.category = req.body.category;  
            trip.date = req.body.date;
            trip.price_person = req.body.price_person;
            trip.nooftravellers = req.body.nooftravellers;
            trip.accommodation = req.body.accommodation;
            trip.accommodation_info = req.body.accommodation_info;
            trip.rental_car = req.body.rental_car;
            trip.status = req.body.status;            
            trip.save(function(err) {
                if (err)
                    res.send(err);
                res.json('trip updated!');
            })
            
        });
    });
    // delete a post
    apiRouter.post('/trips/delete', function(req, res) {
        Trip.remove({
            _id: req.body.id
        }, function(err, post) {
            if (err)
                res.send(err);
            res.json({message: 'Trip deleted!'});
        })
    });
    apiRouter.post('/trips/paydata', function(req, res) {
     // console.log(req.body);
      global.trip_url=req.body.trip_url;
      global.user_id=req.body.user_id;
      stripe.charges.create({
      amount: req.body.price_person_post,
      currency: "usd",
      source: req.body.token.id, // obtained with Stripe.js
      metadata: {order_id: "ORDERID-"+req.body.token.id},
      description: "Charge",
    }, function(err, charge) {
        //console.log(charge)
        if(charge.paid==true){
         payment= new Payment(); 
         payment.amount=charge.amount ;
         payment.balance_transaction= charge.balance_transaction;  
         payment.created= charge.created;  
         payment.currency= charge.currency;  
         payment.description= charge.description;  
         payment.ch_id= charge.id;  
         payment.order_id=charge.metadata.order_id; 
         payment.status=charge.status; 
         payment.paid =charge.paid; 
         payment.trip_url =trip_url; 
         payment.user_id =user_id; 
         payment.save(function(err,success) {
        if (err){
            res.send(err);
        }else {
          Interest.findOne({'user_id': success.user_id,'trip_url':success.trip_url}, function(err, interest) {
              console.log(interest);
            if (err)
                res.send(err);            
        interest.status=1;
        interest.save(function(err,scs) {
        if (err){
            res.send(err);
        }else {
          res.send(scs);  
        }     
        });            
        });    
     
         }     
            });
       }
    });
    });

};