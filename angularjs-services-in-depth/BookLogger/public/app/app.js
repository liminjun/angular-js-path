(function () {

    var app=angular.module('app', ['ngRoute']);
    app.config(function ($provide) {

        $provide.provider('books', ['constants',function (constants) {
            var includeVersionInTitle=false;
            this.setIncludeVersionInTitle=function(value){
                includeVersionInTitle=value;
            }
            this.$get = function () {
                var appName=constants.APP_TITLE;
                var version=constants.APP_VERSION;

                if(includeVersionInTitle){
                    appName+=' ' +version;
                }
            
                var appDesc=constants.APP_DESC
                return {
                    appName: appName,
                    appDesc:appDesc
                };
            }
        }]);
        
    });

    app.config(['booksProvider','constants','dataServiceProvider',function(booksProvider,constants,dataServiceProvider){
        booksProvider.setIncludeVersionInTitle(true);
        console.log('title from constants service.'+constants.APP_TITLE);

        console.log(dataServiceProvider.$get);
    }]);

    app.config(['$routeProvider',function($routeProvider){
        $routeProvider
            .when('/',{
                templateUrl:"/app/templates/books.html",
                controller:"BooksController",
                controllerAs:'books'
            })
            .when('/AddBook',{
                templateUrl:"/app/templates/addBook.html",
                controller:"AddBookController",
                controllerAs:'addBook'
            })
            .when('/EditBook/:bookId',{
                templateUrl:"/app/templates/editBook.html",
                controller:"EditBookController",
                controllerAs:'bookEditor',
                resolve:{
                    books:function(dataService){
                        return dataService.getAllBooks();
                    }
                }
            })
            .otherwise('/');

    }]);

    app.run(['$rootScope',function($rootScope){
        $rootScope.$on('$routeChangeSuccess',function(event,current,previous){
            console.log('successfully changed routes');
        });

        $rootScope.$on('$routeChangeError',function(event,current,previous,rejection){
            console.log('error changed routes');

            console.log(event);
            console.log(current);
            console.log(previous);
            console.log(rejection);
        });
    }]);

} ());