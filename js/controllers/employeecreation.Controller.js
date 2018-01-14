app.controller("employeecreationController",["$scope","lookupService","$stateParams","$http",function($scope,lookupService,$stateParams,$http){
    
    $scope.genderList=[];
    $scope.employementTypeList=[];
    $scope.locationsList=[];
    $scope.addressTypeList=[];
    $scope.countryList=[];
    $scope.stateList=[];
    $scope.organzationList=[];
    $scope.businessUnitList=[];
    $scope.designationList=[];
    $scope.projectList=[];
    $scope.martialStatusList=[];
    $scope.datas=["employee1","employee2","employee3","employee4","employee5"];
    $scope.getallLookups=function(){
      lookupService.getAllLookups().then(function(res){
          /*$scope.genderList=lookupService.filterLookups(res.data,'GENDER');
          $scope.employementTypeList=lookupService.filterLookups(res.data,'EMPLOYMENT_TYPE');
          $scope.martialStatusList=lookupService.filterLookups(res.data,'MARITAL_STATUS');
          $scope.addressTypeList=lookupService.filterLookups(res.data,'ADDRESS_TYPE');
          $scope.countryList=lookupService.filterLookups(res.data,'COUNTRY');
          $scope.organzationList=lookupService.filterLookups(res.data,'ORGANIZATION');
          $scope.businessUnitList=lookupService.filterLookups(res.data,'BU');
          $scope.designationList=lookupService.filterLookups(res.data,'DESIGNATION');
          $scope.projectList=lookupService.filterLookups(res.data,'PROJECT');
          $scope.locationsList=lookupService.filterLookups(res.data,'LOCATION');*/
          getParticularLookUp(res.data);
          
      },function(error){
          console.log(error);
      })
    }
    
    
    function getParticularLookUp(allLookUps){
        for(var i in allLookUps){
            if(allLookUps[i].lookupGroup=='GENDER'){
                  $scope.genderList.push(allLookUps[i]);
            }
           else if(allLookUps[i].lookupGroup=='EMPLOYMENT_TYPE'){
                  $scope.employementTypeList.push(allLookUps[i]);
            }
             else if(allLookUps[i].lookupGroup=='MARITAL_STATUS'){
                  $scope.martialStatusList.push(allLookUps[i]);
            }
            else if(allLookUps[i].lookupGroup=='ADDRESS_TYPE'){
                  $scope.addressTypeList.push(allLookUps[i]);
            }
             else if(allLookUps[i].lookupGroup=='COUNTRY'){
                  $scope.countryList.push(allLookUps[i]);
            }
             else if(allLookUps[i].lookupGroup=='ORGANIZATION'){
                  $scope.organzationList.push(allLookUps[i]);
            }
            else if(allLookUps[i].lookupGroup=='BU'){
                  $scope.businessUnitList.push(allLookUps[i]);
            }
            else if(allLookUps[i].lookupGroup=='DESIGNATION'){
                  $scope.designationList.push(allLookUps[i]);
            }
            else if(allLookUps[i].lookupGroup=='PROJECT'){
                  $scope.projectList.push(allLookUps[i]);
            }
            else if(allLookUps[i].lookupGroup=='LOCATION'){
                  $scope.locationsList.push(allLookUps[i]);
            }
            
             
            
        }
    }
    
     $scope.dataFunction=function(data){
         alert("clicked");
         var result=data;
         console.log(result);
     };
    
     $scope.getallLookups();
    
}])