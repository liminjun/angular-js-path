describe('rootScope',function(){
    var $rootScope;
    var $scope;

    var menuController=function($scope){
        $scope.items=[
            'Beverages',
            'Condiments'
        ];
        if($scope.selected!==undefined){
            $scope.message="You selected "+$scope.items[$scope.selected];
        }
    };

    beforeEach(inject(function(_$controller_,_$rootScope_){
        $rootScope=_$rootScope_;
        $rootScope.selected=0;
        $scope=$rootScope.$new();

        _$controller_(menuController,{
            $scope:$scope
        })
    }));

    it('should demo rootScope',function(){
        expect($scope.message).toBe('You selected Beverages');
    });
})