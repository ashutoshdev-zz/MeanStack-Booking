/**
 * post controller
 * @param {type} param1
 * @param {type} param2
 */
app.controller('PostCtrl', function($scope, Posts, Pages, $location, $timeout) {
    $scope.url = {};
    $scope.url.path = $location.absUrl().split('/')[3];
    Posts.sigledata($scope.url).then(function(res) {
        if (res == null) {
            window.location.href = '/404';
        } else {
            $scope.description = res.description;
            $scope.postimg = res.postimg;
            $scope.created_at = res.created_at;
            $scope.title = res.title;
        }
    });
//    Pages.singlepost().then(function(res) {
//        if (res == null) {
//            console.log(res);
//        } else {
//           // console.log(res);
//                    $scope.single_name=res.name;
//                    $scope.single_desc=res.description;
//                    $scope.single_image=res.image;
//                    $scope.single_dest=res.designation;                      
//        }
//    });
//     Portfolios.all().then(function(res) {
//        if (res == null) {
//            console.log(res);
//        } else {
//            $scope.portfolio={};
//            $scope.portfolio=res;
//           // console.log(res);
//                     
//        }
//    });
});
app.controller('PosttripCtrl', function($scope, Trips, $http, Tripcategories, $timeout, $rootScope) {
    if (localStorage.getItem('TraTour_global') == null) {
        $scope.TraTour_HS = true;
    } else {
        $scope.TraTour_HS = false;
        $rootScope.user_role = localStorage.getItem('TraTour_global');
    }
    $scope.cat = {};
    Tripcategories.all().then(function(data) {
        $scope.cat = data;
    });

    $scope.uploadFile = function(input) {
        $scope.loading = true;
        Trips.uploadimage(input.files[0]).then(function(res) {
            //console.log(res[0].location);
            $scope.loading = false;
            if (res) {
                $scope.imgshow = res[0].location;
            }
        });
    };
    $scope.uploadFile1 = function(input) {
        $scope.loading1 = true;
        Trips.uploadimage(input.files[0]).then(function(res) {
            //console.log(res[0].location);
            $scope.loading1 = false;
            if (res) {
                $scope.imgshow1 = res[0].location;
            }
        });
    };
    $scope.uploadFile2 = function(input) {
        $scope.loading2 = true;
        Trips.uploadimage(input.files[0]).then(function(res) {
            //console.log(res[0].location);
            $scope.loading2 = false;
            if (res) {
                $scope.imgshow2 = res[0].location;
            }
        });
    };
    $scope.uploadFile3 = function(input) {
        $scope.loading3 = true;
        Trips.uploadimage(input.files[0]).then(function(res) {
            //console.log(res[0].location);
            $scope.loading3 = false;
            if (res) {
                $scope.imgshow3 = res[0].location;
            }
        });
    };
    $scope.uploadFile4 = function(input) {
        $scope.loading4 = true;
        Trips.uploadimage(input.files[0]).then(function(res) {
            //console.log(res[0].location);
            $scope.loading4 = false;
            if (res) {
                $scope.imgshow4 = res[0].location;
            }
        });
    };
    $scope.addTrip = function(trip) {
        trip.tripimg = $scope.imgshow;
        trip.tripimg1 = $scope.imgshow1;
        trip.tripimg2 = $scope.imgshow2;
        trip.tripimg3 = $scope.imgshow3;
        trip.tripimg4 = $scope.imgshow4;
        trip.status = 0;
        trip.user_id = $rootScope.currentUser._id;
        if ($rootScope.user_role) {
            trip.user_role = $rootScope.user_role;
        } else {
            trip.user_role = trip.user_role;
        }
        trip.date = $('#datepicker').val();
        trip.date_end = $('#datepicker2').val();
        // console.log(trip); 
        trip.paramal = trip.title.replace(/ /gi, '-');
        Trips.add(trip).then(function(res) {
            console.log(res);
            if (res) {
                $scope.message = res;
            } else {
                $scope.message = res;
            }
        });
    };
    $timeout(function() {
        $("#datepicker").datepicker();
        $("#datepicker2").datepicker();
        // $("#createtrip").modal("show");
    }, 0.500);
});
/**
 *TourtripCtrl 
 */
app.controller('TourtripCtrl', function($scope, Trips, $http, Tripcategories, $timeout, $rootScope) {
    if (localStorage.getItem('TraTour_global') == null) {
        $scope.TraTour_HS = true;
    } else {
        $scope.TraTour_HS = false;
        $rootScope.user_role = localStorage.getItem('TraTour_global');
    }
    $scope.cat = {};
    Tripcategories.all().then(function(data) {
        $scope.cat = data;
    });

    $scope.uploadFile = function(input) {
        $scope.loading = true;
        Trips.uploadimage(input.files[0]).then(function(res) {
            //console.log(res[0].location);
            $scope.loading = false;
            if (res) {
                $scope.imgshow = res[0].location;
            }
        });
    };
    $scope.uploadFile1 = function(input) {
        $scope.loading1 = true;
        Trips.uploadimage(input.files[0]).then(function(res) {
            //console.log(res[0].location);
            $scope.loading1 = false;
            if (res) {
                $scope.imgshow1 = res[0].location;
            }
        });
    };
    $scope.uploadFile2 = function(input) {
        $scope.loading2 = true;
        Trips.uploadimage(input.files[0]).then(function(res) {
            //console.log(res[0].location);
            $scope.loading2 = false;
            if (res) {
                $scope.imgshow2 = res[0].location;
            }
        });
    };
    $scope.uploadFile3 = function(input) {
        $scope.loading3 = true;
        Trips.uploadimage(input.files[0]).then(function(res) {
            //console.log(res[0].location);
            $scope.loading3 = false;
            if (res) {
                $scope.imgshow3 = res[0].location;
            }
        });
    };
    $scope.uploadFile4 = function(input) {
        $scope.loading4 = true;
        Trips.uploadimage(input.files[0]).then(function(res) {
            //console.log(res[0].location);
            $scope.loading4 = false;
            if (res) {
                $scope.imgshow4 = res[0].location;
            }
        });
    };
    $scope.addTrip = function(trip) {
        trip.tripimg = $scope.imgshow;
        trip.tripimg1 = $scope.imgshow1;
        trip.tripimg2 = $scope.imgshow2;
        trip.tripimg3 = $scope.imgshow3;
        trip.tripimg4 = $scope.imgshow4;
        trip.status = 0;
        trip.user_id = $rootScope.currentUser._id;
        if ($rootScope.user_role) {
            trip.user_role = $rootScope.user_role;
        } else {
            trip.user_role = trip.user_role;
        }
        trip.date = $('#datepicker').val();
        trip.date_end = $('#datepicker2').val();
        // console.log(trip); 
        trip.paramal = trip.title.replace(/ /gi, '-');
        Trips.add(trip).then(function(res) {
            console.log(res);
            if (res) {
                $scope.message = res;
            } else {
                $scope.message = res;
            }
        });
    };
    $timeout(function() {
        $("#datepicker").datepicker();
        $("#datepicker2").datepicker();
        // $("#createtrip").modal("show");
    }, 0.500);
});
/**
 * TriplistCtrl
 */
app.controller('TripdetailCtrl', function($scope, Trips, $location, $timeout, Interests, $timeout, $rootScope,$http) {
    //console.log("here");
    $scope.url = {};
    $scope.url.path = $location.absUrl().split('/')[4];
    // console.log($scope.url.path);
    Trips.sigledata($scope.url).then(function(res) {
        if (res == null) {
            window.location.href = '/404';
        } else {
            //console.log(res);
            $scope.description = res.description;
            $scope.tripimg = res.tripimg;
            $scope.tripimg1 = res.tripimg1;
            $scope.tripimg2 = res.tripimg2;
            $scope.tripimg3 = res.tripimg3;
            $scope.tripimg4 = res.tripimg4;
            $scope.date = res.date;
            $scope.price_person = res.price_person;
            $scope.nooftravellers = res.nooftravellers;
            $scope.accommodation = res.accommodation;
            $scope.locationfrom = res.locationfrom;
            $scope.gender = res.gender;
            $scope.locationto = res.locationto;
            $scope.accommodation_info = res.accommodation_info;
            $scope.rental_car = res.rental_car;
            $scope.date_end = res.date_end;
            $scope.tripimg = res.tripimg;
            $scope.created_at = res.created_at;
            $scope.title = res.title;
            $rootScope.trip_url_post = res.paramal;
            $rootScope.price_person_post = res.price_person+"00";
        }
    });
//    if($rootScope.currentUser!=''){
//     $scope.interest_trip = {};
//     $scope.interest_trip.user_id= $rootScope.currentUser._id;
//     $scope.interest_trip.trip_url= $scope.url.path;
//     Interests.sigledata($scope.interest_trip).then(function(res) {
//        if (res == null) {
//             $scope.msg_interest="gsfdgfg";
//        } else {
//            $scope.msg_interest="here";
//        }
//      }); 
//    }
    $scope.int_trip = {};
    $scope.int_trip.trip_url = $scope.url.path;
    Interests.singletrip($scope.int_trip).then(function(res) {
        //console.log(res);
        if (res == null) {
            $scope.msg_interest = "error";
        } else {
            $scope.paidstatus = res.paidstatus;
            $scope.msg_interest = res.msg;
        }
    });
    $scope.interested = function() {
        if ($rootScope.currentUser != '') {
            $scope.interest_trip = {};
            $scope.interest_trip.user_id = $rootScope.currentUser._id;
            $scope.interest_trip.trip_url = $scope.url.path;
            $scope.interest_trip.status = 0;
            Interests.saveinterest($scope.interest_trip).then(function(res) {
                console.log(res);
                if (res == null) {
                    $scope.msg_interest = "error";
                } else {
                    $scope.msg_interest = res;
                    $("#paypop").modal("show");
                }
            });
        } else {
            $scope.msg_interest = "Please login to do interest";
        }
    }
    $timeout(function() {
        var galleryClass = '.gallery';
        $(galleryClass + ' li img').hover(function() {
            var $gallery = $(this).parents(galleryClass);
            $('.main-img', $gallery).attr('src', $(this).attr('src'));
        });
        /// stripe payment
        var handler = StripeCheckout.configure({
            key: 'pk_test_gPvQaxGgfuCcLRNeHpnps38j',
            image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
            locale: 'auto',
            token: function(token) {
                $scope.tkn={};
                $scope.tkn.token=token;
                $scope.tkn.trip_url=$rootScope.trip_url_post;
                $scope.tkn.user_id=$rootScope.currentUser._id;
                $scope.tkn.price_person_post=$rootScope.price_person_post;
                 Trips.createpayment($scope.tkn).then(function(res) { // check interest list full or not
                     $("#paypop").modal("hide");  // make status paid after paid
                     console.log(res);
                     window.location.href = '/home/#/paymenthistory';
                     
                     });
               // console.log(token);
                // You can access the token ID with `token.id`.
                // Get the token ID to your server-side code for use.
            }
        });
        document.getElementById('customButton').addEventListener('click', function(e) {
            // Open Checkout with further options:
            handler.open({
                name: 'SLUGr, Inc.',
                description: 'SLUGr',
                amount: $rootScope.price_person_post
            });
            e.preventDefault();
        });

// Close Checkout on page navigation:
        window.addEventListener('popstate', function() {
            handler.close();
        });
    }, 1000);
});
app.controller('TriplistCtrl', function($scope, Trips, $location, $timeout, $timeout, Tripcategories) {
    //category list// post list
    $scope.catlist = {};
    Tripcategories.all().then(function(data) {
        $scope.catlist = data;
        //console.log(data);
    });
    $scope.postlist = {};
    Trips.all().then(function(data) {
        $scope.postlist = data;
        //console.log(data);
    });
    //console.log($scope.catlist);
    $timeout(function() {
        $(".filter-button").click(function() {
            var value = $(this).attr('data-filter');

            if (value == "all")
            {
                $('.filter').show('1000');
            }
            else
            {
                $(".filter").not('.' + value).hide('3000');
                $('.filter').filter('.' + value).show('3000');

            }
        });

        if ($(".filter-button").removeClass("active")) {
            $(this).removeClass("active");
        }
        $(this).addClass("active");

    }, 1000);
});

