app.controller("homeController",["$scope","$rootScope","dataService","$state",function($scope,$rootScope,dataService,$state){
    $scope.testing="Testing";
    
    $scope.directoryData={};
    $scope.home=true;
    //$scope.selectedPerson={};
    $scope.changeRoute=function(){
        $scope.home=false;
        $state.go("details");
    };
    $scope.peoples=[];
    dataService.getData().then(function(data){
        dataService.storedData=data.data;
        $scope.directoryData=data.data;
        $scope.peoples.push(dataService.storedData.people.item[0]);
    },function(error){
        console.log(error);
    });
    
   $scope.$watch("selectedPerson",function(newValue, oldValue) {
        
        if(newValue!=null && newValue!=undefined ){
        
            $scope.home=false;
            $state.go("details");
        }
       
   });
    
    /*$scope.$watchCollection("selectedPerson",function(newValue,oldValue){
            console.log($scope.selectedPerson);
        });*/
    
    $scope.init=function(selectedPerson){
        $scope.selectedPerson=selectedPerson;
    }
   
}])