(function () {

    var app=angular.module('app', []);
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

} ());