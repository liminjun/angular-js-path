(function () {

    angular.module('app')
        .controller('BooksController', BooksController);


    function BooksController(books,dataService) {

        var vm = this;//viewModel
        vm.appName=books.appName;

        vm.allBooks=dataService.getAllBooks();
    }


} ());