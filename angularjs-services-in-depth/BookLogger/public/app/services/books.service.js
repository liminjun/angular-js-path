$provide.provider('books',function(){
    this.$get=function(){
        var appName="Book Logger";
        return {
            appName:appName
        }
    }
});