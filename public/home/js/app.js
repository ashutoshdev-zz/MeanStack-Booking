
var app = angular.module('fwrk.home', [
    'ui.router',
    'fwrk.posts',
    'fwrk.pages',
    'fwrk.portfolios',
    'fwrk.users',
    'fwrk.categories',
    'fwrk.trips',
    'fwrk.tripcategories',
    'fwrk.interests'
]).config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
            .state('edit', {
                url: "/edit",
                templateUrl: "/home/templates/users/edit.html",
                controller: 'ProfileCtrl'
            })
            .state('blog', {
                url: '/blog',
                templateUrl: '/home/templates/blog/blog.html',
                controller: 'BlogCtrl'
            })
            .state('triplist', {
                url: '/triplist',
                templateUrl: '/home/templates/trips/trip.html',
                controller: 'TriplistCtrl'
            })
            .state('whoweare', {
                url: '/whoweare',
                templateUrl: '/home/templates/pages/whoweare.html',
                controller: 'PostCtrl'
            })
            .state('about', {
                url: '/about',
                templateUrl: '/home/templates/pages/about.html',
                controller: 'PostCtrl'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: '/home/templates/pages/contact.html',
                controller: 'PostCtrl'
            })
            .state('faq', {
                url: '/faq',
                templateUrl: '/home/templates/pages/faq.html',
                controller: 'PostCtrl'
            })
            .state('home', {
                url: "/",
                templateUrl: "/home/templates/users/myprofile.html",
                controller: 'PagesCtrl'
            })
            .state('posttrip', {
                url: "/posttrip",
                templateUrl: "/home/templates/trips/addposttrip.html",
                controller: 'PosttripCtrl',
            })
            .state('trip', {
                url: "/trip/*",
                templateUrl: "/home/templates/trips/tripdetails.html",
                controller: 'TripdetailCtrl',
            })
            .state('tourtrip', {
                url: "/tourtrip",
                templateUrl: "/home/templates/trips/tourtrip.html",
                controller: 'TourtripCtrl',
            })
             .state('interestedlist', {
                url: "/interestedlist",
                templateUrl: "/home/templates/users/interestedlist.html",
                controller: 'ProfileCtrl',
            })
             .state('paymenthistory', {
                url: "/paymenthistory",
                templateUrl: "/home/templates/users/payment_history.html",
                controller: 'ProfileCtrl',
            })
             .state('myalltrip', {
                url: "/myalltrip",
                templateUrl: "/home/templates/trips/myalltrip.html",
                controller: 'ProfileCtrl',
            })
             .state('allinterested', {
                url: "/allinterested",
                templateUrl: "/home/templates/trips/allinterested.html",
                controller: 'ProfileCtrl',
            })
             .state('allpayment', {
                url: "/allpayment",
                templateUrl: "/home/templates/trips/allpayment.html",
                controller: 'ProfileCtrl',
            })
            .state('changepassword', {
                url: "/changepassword",
                templateUrl: "/home/templates/users/changepassword.html",
                controller: 'ProfileCtrl',
            })
            .state('forgotpassword', {
                url: "/forgotpassword",
                templateUrl: "/home/templates/users/forgetpassword.html",
                controller: 'ForgetCtrl'
            });

}).run(function($rootScope, $window) {
    $rootScope.tripPopUp = function() {
        $('#createtrip').modal({
            backdrop: 'static',
            keyboard: false});
    }
    $rootScope.openNav = function() {
        document.getElementById("mySidenav").style.width = "355px";
        document.getElementById("overlay1").style.display = "block";
    }
    $rootScope.closeNav = function() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("overlay1").style.display = "none";
    }
    $rootScope.dropNav = function() {
        // document.getElementById("editprofile1").style.display = "block";
        var x = document.getElementById('editprofile1');
        if (x.style.height === '0px') {
            x.style.height = '250px';
        } else {
            x.style.height = '0px';
        }
    }
    $rootScope.TraTour = {};
    $rootScope.tra_tour = function(TraTour) {
        $rootScope.TraTour_global = TraTour.traveller;
        console.log($rootScope.TraTour_global);
        if ($rootScope.TraTour_global == 'traveller') {
            $('#createtrip').modal('hide');
            localStorage.setItem('TraTour_global', $rootScope.TraTour_global);
            $window.location.href = "/home/#/posttrip";
        } else if ($rootScope.TraTour_global == 'tourguide') {
            $('#createtrip').modal('hide');
            localStorage.setItem('TraTour_global', $rootScope.TraTour_global);
            ;
            $window.location.href = "/home/#/tourtrip";
        }
    }
}).directive('fileModel', ['$parse', function($parse) {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                var model = $parse(attrs.fileModel);
                var modelSetter = model.assign;

                element.bind('change', function() {
                    scope.$apply(function() {
                        modelSetter(scope, element[0].files[0]);
                    });
                });
            }
        };
    }]).service('fileUpload', ['$http', function($http) {
        this.uploadFileToUrl = function(file, uploadUrl) {
            var fd = new FormData();
            fd.append('file', file);
            $http.post(uploadUrl, fd, {
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined}
            })
                    .success(function() {
                    })
                    .error(function() {
                    });
        }
    }]).filter('trim', function() {
        return function(value) {
        if (!angular.isString(value)) {
            return value;
        }
        return value.replace(/ /g, ''); // you could use .trim, but it's not going to work in IE<9
    };
});