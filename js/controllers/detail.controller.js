app.controller("detailController",["$scope","dataService",function($scope,dataService){
    //console.log($stateParams.selectedPerson);
    /*$scope.contactInfoList=["Work","Mobile","Home","SkypeId","emailId","emailId","location"];
    $scope.workProfile=["accoliteId","type","BU"];
    $scope.superior2="abcd";
    $scope.superior1="defg";*/
   // $scope.tooltip=false;
    dataService.getData().then(function(result){
        $scope.people=result.data; 
    })
   // $scope.data=dataService.storedData;
   
    /*var searchId=$stateParams.id;
    var peoples=$scope.data.people.item;
    var length=peoples.length;
    for(var i=0;i<length;i++){
        if(searchId==peoples[i].id){
            $scope.people=peoples[i];
        }
    }*/
    //$scope.people=$scope.data.people.item[0];
    //$scope.people=$scope.data;
    //$scope.people.seniorSupervisior="abc";
    //$scope.people.supervisor="def";
   //$scope.contingents=$scope.people.contingents;
    //$scope.directs=$scope.people.directs;
    
    
}])