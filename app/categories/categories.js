angular.module('categories', [
    'eggly.models.categories',
])
    .config(function($stateProvider){
        $stateProvider
            .state('eggly.categories',{
                url: '/',
                views: {
                    'categories@': {
                        controller: 'categoriesController',
                        templateUrl: 'app/categories/categories.tmpl.html',
                    },
                    'bookmarks@': {
                        controller: 'bookmarksController',
                        templateUrl: 'app/categories/bookmarks/bookmarks.tmpl.html',
                    },
                }
            })
    })
    .controller('categoriesController', function categoriesController($scope){

    })
    .controller('bookmarksController', function bookmarksController($scope){
        
    })