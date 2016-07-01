(function () {

    angular.module('app')
        .controller('BooksController',['books','dataService','badgeService','$cookies','$cookieStore','$log',BooksController]);


    function BooksController(books,dataService,badgeService,$cookies,$cookieStore,$log) {

        var vm = this;//viewModel
        vm.appName=books.appName;

        //vm.allBooks=dataService.getAllBooks();
        dataService.getAllBooks()
            .then(function(books){
                vm.allBooks=books;
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

        vm.favoriteBook=$cookies.favoriteBook;

        vm.lastEdited=$cookieStore.get("lastEdited");

        $log.log('logging with log');
        $log.info('logging with info');
        $log.warn('logging with warn');
        $log.error('logging with error');
        $log.debug('logging with debug');
    }


} ());