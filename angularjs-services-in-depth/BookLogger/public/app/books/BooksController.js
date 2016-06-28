(function () {

    angular.module('app')
        .controller('BooksController',['books','dataService','badgeService',BooksController]);


    function BooksController(books,dataService,badgeService) {

        var vm = this;//viewModel
        vm.appName=books.appName;

        //vm.allBooks=dataService.getAllBooks();
        dataService.getAllBooks()
            .then(function(books){
                vm.getAllBooks=books;
            },function(response){
                console.log(response);
            },function(notification){
                console.log('Promise Notifications:'+notification);
            })
            .catch(function(error){
                console.log('Error Message:'+error);
            });
        vm.allReaders=dataService.getAllReaders();

        vm.getBadge=badgeService.retrieveBadge;

    }


} ());