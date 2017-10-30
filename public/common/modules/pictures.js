var picturesModule = angular.module('fwrk.pictures', []);
picturesModule.service('Pictures', function($http) {
    return {
        all: function() {
            return $http.get('/api/pictures').then(function(photoList ) {
                return photoList.data;
            });
        },
        add: function(newdata) {
            console.log(newdata);
            return $http({
                method: 'post',
                url: '/api/pictures/add',
                data: newdata
            }).then(function(res) {
                // return the new post
                return res.data;
            }).catch(function(err) {
                console.error('Something went wrong adding the pictures!');
                console.error(err);
                return err;
            });
        },
        remove: function(newdata) {
            return $http({
                method: 'post',
                url: '/api/pictures/delete',
                data: newdata
            }).then(function(res) {
                // return the new post
                return res.data;
            }).catch(function(err) {
                console.error('Something went wrong adding the pictures!');
                console.error(err);
                return err;
            });
        },
        update: function(newdata) {
            return $http({
                method: 'post',
                url: '/api/pictures/update',
                data: newdata
            }).then(function(res) {
                // return the new post
                return res.data;
            }).catch(function(err) {
                console.error('Something went wrong adding the pictures!');
                console.error(err);
                return err;
            });

        },
        sigledata: function(id) {

            return $http({
                method: 'post',
                url: '/api/pictures/id',
                data: id
            }).then(function(res) {
                // return the new post
                return res.data;
            }).catch(function(err) {
                console.error('Something went wrong adding the pictures!');
                console.error(err);
                return err;
            });
        },
        uploadimage: function(image) {
            //console.log("dd");
            //console.log(image);
            var fd = new FormData();
            //Take the first selected file
            fd.append("file", image);
            return $http({
                method: 'post',
                url: '/api/pictures/uploadimage',
                data: fd,
                withCredentials: true,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).then(function(res) {
                // return the new post
                return res.data;
            }).catch(function(err) {
                console.error('Something went wrong adding the pictures!');
                console.error(err);
                return err;
            });
        },
         linkall: function() {
            return $http.get('/api/links').then(function(linkList ) {
                return linkList.data;
            });
        },
        linkadd: function(newdata) {
            console.log(newdata);
            return $http({
                method: 'post',
                url: '/api/links/add',
                data: newdata
            }).then(function(res) {
                // return the new post
                return res.data;
            }).catch(function(err) {
                console.error('Something went wrong adding the links!');
                console.error(err);
                return err;
            });
        },
        linkremove: function(newdata) {
            return $http({
                method: 'post',
                url: '/api/links/delete',
                data: newdata
            }).then(function(res) {
                // return the new post
                return res.data;
            }).catch(function(err) {
                console.error('Something went wrong adding the pictures!');
                console.error(err);
                return err;
            });
        },
        linkupdate: function(newdata) {
            return $http({
                method: 'post',
                url: '/api/links/update',
                data: newdata
            }).then(function(res) {
                // return the new post
                return res.data;
            }).catch(function(err) {
                console.error('Something went wrong adding the pictures!');
                console.error(err);
                return err;
            });

        },
        linksigledata: function(id) {
            return $http({
                method: 'post',
                url: '/api/links/id',
                data: id
            }).then(function(res) {
                // return the new post
                return res.data;
            }).catch(function(err) {
                console.error('Something went wrong adding the links!');
                console.error(err);
                return err;
            });
        },
             linkuploadimage: function(image) {
            //console.log("dd");
            //console.log(image);
            var fd = new FormData();
            //Take the first selected file
            fd.append("file", image);
            return $http({
                method: 'post',
                url: '/api/pictures/uploadimage',
                data: fd,
                withCredentials: true,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).then(function(res) {
                // return the new post
                return res.data;
            }).catch(function(err) {
                console.error('Something went wrong adding the pictures!');
                console.error(err);
                return err;
            });
        }
    };
});