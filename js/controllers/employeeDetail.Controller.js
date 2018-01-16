app.controller("detailEmployeeController",["$scope","dataService","$state","lookupService",function($scope,dataService,$state,lookupService){
    
    console.log("Detail Controller");
    
    $scope.detailEmployeeData=dataService.data;
    
    var employeeParams=$state.params.paramId;
    
    $scope.employeedata={};
    var allEmployeeData=dataService.data;
    for(var i=0;i<allEmployeeData.length;i++){
        if(allEmployeeData[i].firstName==employeeParams){
            $scope.employeedata=allEmployeeData[i];
        }
    }
    
    
}])