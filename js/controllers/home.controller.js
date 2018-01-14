app.controller("homeController",["$scope","$rootScope","dataService","$state",function($scope,$rootScope,dataService,$state){
    $scope.testing="Testing";
    
    $scope.directoryData={};
    $rootScope.home=true;
    $scope.selectedPerson=null;
    $scope.changeRoute=function(stateName){
        $rootScope.home=false;
        $state.go(stateName);
    };
    $scope.peoples=[];
    /*dataService.getData().then(function(data){
        dataService.storedData=data.data;
        $scope.directoryData=data.data;
        $scope.peoples.push(dataService.storedData.people.item[0]);
    },function(error){
        console.log(error);
    });*/
    
   /*$scope.$watch("selectedPerson",function(newValue, oldValue) {
        
        if(newValue!=null && newValue!=undefined ){
        
            $scope.home=false;
            $state.go("details");
        }
       
   });*/
    
    /*$scope.$watchCollection("selectedPerson",function(newValue,oldValue){
            console.log($scope.selectedPerson);
        });*/
    
   /* $scope.init=function(){
        $scope.selectedPerson={};
        
    }*/
    
    
    
   //$scope.changeRoute();
}])