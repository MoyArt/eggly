angular
.module('Eggly',[
    'ui.router',
    'categories',
    'categories.bookmarks',
])
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('eggly', {
            url:'',
            abstract: true,
        });
    $urlRouterProvider.otherwise('/')
})
.controller('MainController', function($scope){
    $scope.hello = 'world';
    $scope.categories = [
        {"id":1, "name": "Development"},
        {"id":2, "name": "Design"},
        {"id":3, "name": "Exercise"},
        {"id":4, "name": "Humor"},
        {"id":5, "name": "Memes"},
    ];
    $scope.bookmarks = [
        {"id":0, "title": "AngularJS", "url": "http://angularjs.org", "category": "Development" },
        {"id":1, "title": "Egghead.io", "url": "http://angularjs.org", "category": "Development" },
        {"id":2, "title": "A List Apart", "url": "http://alistapart.com/", "category": "Design" },
        {"id":3, "title": "One Page Love", "url": "http://onepagelove.com/", "category": "Design" },
        {"id":4, "title": "MobilityWOD", "url": "http://www.mobilitywod.com/", "category": "Exercise" },
        {"id":5, "title": "Robb Wolf", "url": "http://robbwolf.com/", "category": "Exercise" },
        {"id":6, "title": "Senor Gif", "url": "http://memebase.cheezburger.com/senorgif", "category": "Humor" },
        {"id":7, "title": "Wimp", "url": "http://wimp.com", "category": "Humor" },
        {"id":8, "title": "Dump", "url": "http://dump.com", "category": "Humor" }
    ]

    $scope.currentCategory = null;
    function setCurrentCategory(category){
        $scope.currentCategory = category;
        cancelCreating();
        cancelEditing();
    }
    function isCurrentCategory(category){
        return $scope.currentCategory !== null && category.name === $scope.currentCategory.name;
    }
    $scope.setCurrentCategory = setCurrentCategory;
    $scope.isCurrentCategory = isCurrentCategory;

    /*----------------------------------------------
    * CREATING CRUD
    -----------------------------------------------*/
    function resetCreateForm(){
        $scope.newBookmark = {
            title: '',
            url: '',
            category: $scope.currentCategory
        }
    };

    function createBookmark(bookmark){
        bookmark.id = $scope.bookmarks.length;
        bookmark.category = $scope.currentCategory.name;
        $scope.bookmarks.push(bookmark);
        resetCreateForm();
    }

    $scope.createBookmark = createBookmark;
    $scope.editedBookmark = null;

    function setEditedBookmark(bookmark){
        $scope.editedBookmark = angular.copy(bookmark);
    }

    function updateBookmark(bookmark){
        const index = _.findIndex($scope.bookmarks, (b)=>{
            return b.id === bookmark.id
        })
        $scope.bookmarks[index] = bookmark;
        $scope.editedBookmark = null;
        $scope.isEditing = false;
    }

    function isSelectedBookmark(bookmarkId){
        return $scope.editedBookmark !== null && $scope.editedBookmark.id === bookmarkId;
    }

    function deleteBookmark(bookmark){
        _.remove($scope.bookmarks, (b)=>{
            return b.id === bookmark.id;
        })
    }

    $scope.setEditedBookmark = setEditedBookmark;
    $scope.updateBookmark = updateBookmark;
    $scope.isSelectedBookmark = isSelectedBookmark;
    $scope.deleteBookmark = deleteBookmark;

    /*----------------------------------------------
    * CREATING STATE FOR THE APP
    -----------------------------------------------*/

    $scope.isCreating = false;
    $scope.isEditing = false;

    function startCreating(){
        $scope.isCreating = true;
        $scope.isEditing = false;
        resetCreateForm();
    }

    function cancelCreating(){
        $scope.isCreating = false;
    }

    function startEditing(){
        $scope.isEditing = true;
        $scope.isCreating = false;
    }

    function cancelEditing(){
        $scope.isEditing = false;
    }

    function shouldShowCreating(){
        return $scope.currentCategory && !$scope.isEditing;
    }

    function shouldShowEditing(){
        return $scope.isEditing && !$scope.isCreating;
    }

    $scope.startCreating = startCreating;
    $scope.startEditing = startEditing;
    $scope.cancelCreating = cancelCreating;
    $scope.cancelEditing = cancelEditing;
    $scope.shouldShowCreating = shouldShowCreating;
    $scope.shouldShowEditing = shouldShowEditing;

});