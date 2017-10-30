var Interest = require('../models/interest');
var Payment = require('../models/payment');
// Posts API
module.exports = function(apiRouter) {
    apiRouter.get('/interest/id', function(req, res) {
        Interest.find({'user_id':req.body.user_id,'trip_url':req.body.trip_url}, function(err, interest) {
            if (err)
                res.send(err);
                res.json(interest);
        });
    });
    apiRouter.post('/interests/trip_url', function(req, res) {
         Interest.find({'trip_url':req.body.trip_url,'status':1}, function(err, intrst) {
          //console.log(intrst);
        if (err)
        { res.send(err); }
        else {      
            global.paidstatus=intrst.length;
             Interest.find({'trip_url':req.body.trip_url}, function(err, interest) {
          if (err)
        { res.send(err); }
        else { 
            
            res.send({msg:interest.length+" Person Interested",paidstatus:paidstatus});
        }
    });
            //res.send({paidstatus:intrst.length});
        }
      });
        //console.log(req.body);
        
   //res.end(); 
});
 apiRouter.post('/interests/tripsave', function(req, res) {
        var interest = new Interest();
        interest.user_id = req.body.user_id;
        interest.trip_url = req.body.trip_url;
        interest.status = req.body.status;
        Interest.find({'trip_url': req.body.trip_url,'user_id': req.body.user_id}, function(err, pst) {
           // console.log(pst[0].status)
            if (pst.length > 0) {
                if(pst[0].status=='1'){
                     res.send("You have already paid for this trip");
                }else {
                 res.send("You have already Interested this trip");
                }
            } else {
                interest.save(function(err, interest) {
                    if (err) {
                        res.send(err.message);
                    } else {
                         Interest.find({'trip_url':req.body.trip_url}, function(err, intrst) {
                        if (err)
                        { res.send(err); }
                        else {
                            res.json(intrst.length+" Person Interested");
                        }
                    });
                    }
                })
            }
        });
    });
       apiRouter.post('/interests/interestuid', function(req, res) {
           //console.log(req.body);
        Interest.find({'user_id':req.body.userid}, function(err, interest) {
            if (err)
                res.send(err);
                res.json(interest);
        });
    });
         apiRouter.post('/interests/paymentdetails', function(req, res) {
           //console.log(req.body);
        Payment.find({'user_id':req.body.userid}, function(err, pmnt) {
            if (err)
                res.send(err);
                res.json(pmnt);
        });
    });
    
      apiRouter.post('/interests/interestparmal', function(req, res) {
           //console.log(req.body);
        Interest.find({'trip_url':req.body.paramal}, function(err, interest) {
            if (err)
                res.send(err);
                res.json(interest);
        });
    });
};