angular
.module('Eggly',[])
.controller('MainController', function($scope){
    $scope.hello = 'world';
    $scope.categories = [
        {"id":1, "name": "Development"},
        {"id":2, "name": "Design"},
        {"id":3, "name": "Exercise"},
        {"id":4, "name": "Humor"},
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
    * CREATING STATE FOR THE APP
    -----------------------------------------------*/

    $scope.isCreating = false;
    $scope.isEditing = false;

    function startCreating(){
        $scope.isCreating = true;
        $scope.isEditing = false;
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