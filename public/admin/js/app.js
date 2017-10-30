
var adminApp = angular.module('fwrk.admin', [
    'ui.router',
    'btford.markdown',
    'fwrk.posts',
    'fwrk.users',
    'fwrk.categories',
    'angular-page-loader',
    'fwrk.pages',
    'fwrk.contacts',
    'fwrk.trips',
    'fwrk.tripcategories',
    'fwrk.pictures'
]).config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
            .state('allPosts', {
                url: '/allPosts',
                templateUrl: '/admin/templates/posts/allPosts.html',
                resolve: {
                    postList: function(Posts) {
                        return Posts.all().then(function(data) {
                            return data;
                        });
                    }
                },
                controller: 'AllPostsCtrl'
            })
            .state('addPost', {
                url: '/addPost',
                templateUrl: '/admin/templates/posts/addPost.html',
                controller: 'AddPostCtrl',
                resolve: {
                    categoryList: function(Categories) {
                        return Categories.all().then(function(data) {
                            return data;
                        });
                    }
                },
            })
             .state('addCategory', {
                url: '/addCategory',
                templateUrl: '/admin/templates/category/addCategory.html',
                controller: 'AddCategoryCtrl'
            })
            .state('addUser', {
                url: '/addUser',
                templateUrl: '/admin/templates/users/addUser.html',
                controller: 'AddUserCtrl'
            })
            .state('userList', {
                url: '/userList',
                templateUrl: '/admin/templates/users/userList.html',
                resolve: {
                    userList: function(Users) {
                        return Users.all().then(function(data) {
                            return data;
                        });
                    }
                },
                controller: 'userListCtrl'
            })
            .state('categoryList', {
                url: '/categoryList',
                templateUrl: '/admin/templates/category/allCategories.html',
                resolve: {
                    categoryList: function(Categories) {
                        return Categories.all().then(function(data) {
                            return data;
                        });
                    }
                },
                controller: 'categoryListCtrl'
            })
            .state('profile', {
                url: '/profile',
                templateUrl: '/admin/templates/users/profileUser.html',
                controller: 'profileCtrl'
            })
            .state('dashboard', {
                url: '/',
                templateUrl: '/admin/templates/admin_index.html',
                controller: 'dashboardCtrl'
            })
            .state('editPost', {
                url: '/editPost/:paraml',
                templateUrl: '/admin/templates/posts/editPost.html',
                controller: 'EditPostsCtrl',
                resolve: {
                    categoryList: function(Categories) {
                        return Categories.all().then(function(data) {
                            return data;
                        });
                    }
                }
            })
             .state('editCategory', {
                url: '/editCategory/:id',
                templateUrl: '/admin/templates/category/editCategory.html',
                controller: 'editCategoryCtrl'
            })
            .state('editUser', {
                url: '/editUser/:id',
                templateUrl: '/admin/templates/users/editUser.html',
                controller: 'EditUsersCtrl'
            })
            .state('pageList', {
                url: '/pageList',
                templateUrl: '/admin/templates/pages/allPages.html',
                resolve: {
                    pageList: function(Pages) {
                        return Pages.all().then(function(data) {
                            return data;
                        });
                    }
                },
                controller: 'pageListCtrl'
            })
            .state('addPage', {
                url: '/addPage',
                templateUrl: '/admin/templates/pages/addPage.html',
                controller: 'AddPageCtrl'               
            })
            .state('editPage', {
                url: '/editPage/:id',
                templateUrl: '/admin/templates/pages/editPage.html',
                controller: 'EditPagesCtrl'
            })
            .state('messageList', {
                url: '/messageList',
                templateUrl: '/admin/templates/messageList.html',
                controller: 'messageListCtrl'
            })
              .state('addTripCategory', {
                url: '/addTripCategory',
                templateUrl: '/admin/templates/trips_category/addCategory.html',
                controller: 'addTripCategory'
            })
            .state('tripcategoryList', {
                url: '/tripcategoryList',
                templateUrl: '/admin/templates/trips_category/allCategories.html',
                resolve: {
                    tripcategoryList: function(Tripcategories) {
                        return Tripcategories.all().then(function(data) {
                            return data;
                        });
                    }
                },
                controller: 'tripcategoryList'
            })
              .state('editTripCategory', {
                url: '/editTripCategory/:id',
                templateUrl: '/admin/templates/trips_category/editCategory.html',
                controller: 'editTripCategory'
            })
               .state('tripList', {
                url: '/tripList',
                templateUrl: '/admin/templates/trips/allTrips.html',
                resolve: {
                    tripList: function(Trips) {
                        return Trips.all().then(function(data) {
                            return data;
                        });
                    }
                },
                controller: 'tripListCtrl'
            })
            .state('addTrip', {
                url: '/addTrip',
                templateUrl: '/admin/templates/trips/addTrip.html',
                controller: 'AddTripCtrl'    ,
                   resolve: {
                    tripcategoryList: function(Tripcategories) {
                        return Tripcategories.all().then(function(data) {
                            return data;
                        });
                    }
                },
            })
            .state('editTrip', {
                url: '/editTrip/:paraml',
                templateUrl: '/admin/templates/trips/editTrip.html',
                controller: 'EditTripsCtrl',
                resolve: {
                    tripcategoryList: function(Tripcategories) {
                        return Tripcategories.all().then(function(data) {
                            return data;
                        });
                    }
                },
            })
            .state('photoList', {                 
                url: '/photoList',
                templateUrl: '/admin/templates/social/pictureList.html',
                controller: 'plist',
                resolve: {
                    photoList: function(Pictures) {
                        return Pictures.all().then(function(data) {
                            return data;
                        });
                    }
                }
               
            })
            .state('addPhoto', {
                url: '/addPhoto',
                templateUrl: '/admin/templates/social/addPhoto.html',
                controller: 'AddPhotoCtrl'
            })
            .state('editPhoto', {
                url: '/editPhoto/:id',
                templateUrl: '/admin/templates/social/editPhoto.html',
                controller: 'EditPhotoCtrl'
            })
             .state('lnklst', {                 
                url: '/lnklst',
                templateUrl: '/admin/templates/social/linkList.html',
                controller: 'lst',
                resolve: {
                    linkList: function(Pictures) {
                        return Pictures.linkall().then(function(data) {
                            return data;
                        });
                    }
                }
               
            })
            .state('addLink', {
                url: '/addLink',
                templateUrl: '/admin/templates/social/addLink.html',
                controller: 'AddlnkCtrl'
            })
            .state('editLink', {
                url: '/editLink/:id',
                templateUrl: '/admin/templates/social/editLink.html',
                controller: 'editLnkCtrl'
            });
            

})
        
.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;

            element.bind('change', function () {
                scope.$apply(function () {
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}])

.service('fileUpload', ['$http', function ($http) {
    this.uploadFileToUrl = function (file, uploadUrl) {
        var fd = new FormData();
        fd.append('file', file);
        $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        })
        .success(function () {
        })
        .error(function () {
        });
    }
}]);