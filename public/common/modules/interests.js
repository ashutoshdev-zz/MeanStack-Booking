var interestsModule = angular.module('fwrk.interests', []);
interestsModule.service('Interests', function($http) {
    return {
        sigledata: function(d) {
            return $http({
                method: 'post',
                url: '/api/interests/id',
                data: d
            }).then(function(res) {
                // return the new post
                return res.data;
            }).catch(function(err) {
                console.error('Something went wrong adding the interest!');
                console.error(err);
                return err;
            });
        },
        singletrip: function(inst) {
            //console.log(inst);
            return $http({
                method: 'post',
                url: '/api/interests/trip_url',
                data: inst
            }).then(function(res) {
                // return the new post
                return res.data;
            }).catch(function(err) {
                console.error('Something went wrong adding the interest!');
                console.error(err);
                return err;
            });
        },
        saveinterest: function(inst) {
            // console.log(inst);
            return $http({
                method: 'post',
                url: '/api/interests/tripsave',
                data: inst
            }).then(function(res) {
                // return the new post
                return res.data;
            }).catch(function(err) {
                console.error('Something went wrong adding the interest!');
                console.error(err);
                return err;
            });
        },
        interestuid: function(inst) {
             console.log(inst);
            return $http({
                method: 'post',
                url: '/api/interests/interestuid',
                data: inst
            }).then(function(res) {
                // return the new post
                return res.data;
            }).catch(function(err) {
                console.error('Something went wrong adding the interest!');
                console.error(err);
                return err;
            });
        },
        interestparam: function(inst) {
             console.log(inst);
            return $http({
                method: 'post',
                url: '/api/interests/interestparmal',
                data: inst
            }).then(function(res) {
                // return the new post
                return res.data;
            }).catch(function(err) {
                console.error('Something went wrong adding the interest!');
                console.error(err);
                return err;
            });
        },
           paymentdetails: function(inst) {
             console.log(inst);
            return $http({
                method: 'post',
                url: '/api/interests/paymentdetails',
                data: inst
            }).then(function(res) {
                // return the new post
                return res.data;
            }).catch(function(err) {
                console.error('Something went wrong adding the interest!');
                console.error(err);
                return err;
            });
        }
    };
});