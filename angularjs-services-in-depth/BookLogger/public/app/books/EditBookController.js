(function () {

    angular.module('app')
        .controller('EditBookController', ['$routeParams','dataService', 'books', EditBookController]);

    function EditBookController($routeParams, dataService,books) {
        var vm=this;
        console.log($routeParams.bookID);

        vm.currentBook = books.filter(function (item) {
            return item.book_id == $routeParams.bookId;
        })[0];

        // dataService.getAllBooks()
        //     .then(function(books){
        //         debugger;
        //         vm.currentBook=books.filter(function(item){
        //             return item.book_id==$routeParams.bookId;
        //         })[0];
        //     });
    }

}());