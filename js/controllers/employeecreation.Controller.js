app.controller("employeecreationController",["$scope","lookupService","$stateParams","$http","$q",function($scope,lookupService,$stateParams,$http,$q){
    
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

    $scope.clientList=[];
    $scope.stateList1=[];


    $scope.datas=["employee1","employee2","employee3","employee4","employee5"];


    $scope.employee={};
    $scope.employee.address=[];
    function employeeAddress(addressType,address,country,state,city,pincode){
         this.addressType=addressType;
         this.address=address;
         this.country=country;
         this.state=state;
         this.city=city;
         this.pincode=pincode;
     }
    
    $scope.employee.address.push(new employeeAddress(null,"",null,null,"",""),new employeeAddress(null,"",null,null,"",""));
    var getAllLookupPromise=lookupService.getAllLookups();
    var getDesignationsPromise=lookupService.getDesignations();
    var organizationPromise=lookupService.getOrganizations();
    var businessUnitPromise=lookupService.getBusinessUnits();
    var countryPromise=lookupService.getAllCountries();
    var workLocationsPromise=lookupService.getWorkLocations();
   $q.all([getAllLookupPromise,workLocationsPromise,getDesignationsPromise,organizationPromise,
           businessUnitPromise,countryPromise]).then(function(res){
        getParticularLookUp(res[0].data);
        $scope.locationsList=$scope.locationsList.concat(res[1].data);
        $scope.designationList= $scope.designationList.concat(res[2].data);
        $scope.organzationList=$scope.organzationList.concat(res[3].data);
        $scope.businessUnitList= $scope.businessUnitList.concat(res[4].data);
        $scope.countryList=$scope.countryList.concat(res[5].data);
        
        
        });
    
    $scope.getStateList=function(countryRef){
        if(countryRef){
            lookupService.getStates($scope.employee.address[1].country).then(function(res){
            $scope.stateList1=[];
            $scope.stateList1=$scope.stateList.concat(res.data);
        }) 
        }
        else{
             lookupService.getStates($scope.employee.address[0].country).then(function(res){
            $scope.stateList=[];
            $scope.stateList=$scope.stateList.concat(res.data);
        })
        }
    }
       

    

    $scope.getallLookups=function(){
      lookupService.getAllLookups().then(function(res){
         getParticularLookUp(res.data);
          
      },function(error){
          console.log(error);
      })

    }
    
    $scope.getClientList=function(){
        lookupService.getClients($scope.employee.businessUnit).then(function(res){
            $scope.clientList=[];
            $scope.clientList=$scope.clientList.concat(res.data);
        })
    }
    
     $scope.projectList=function(){
        lookupService.getProjects($scope.employee.client).then(function(res){
            $scope.projectList=[];
            $scope.projectList=$scope.projectList.concat(res.data);
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
    

    // $scope.getallLookups();
    
    

     $scope.dataFunction=function(data){
         alert("clicked");
         var result=data;
         console.log(result);
     };
    

    
}])