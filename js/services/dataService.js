app.service("dataService",["$http","$q",function($http,$q){
    

    this.getData=function(){
        var defered=$q.defer();
        $http.get('http://10.4.14.231:8080/accolite/hrms/employee/getEmployeeByEmpCode?employeeCode=0000').then(function(data){
            defered.resolve(data);
        },function(error){
            defered.reject(error); 
        });
        return defered.promise;
    };
    
    
}]);


app.service("lookupService",["$http","$q",function($http,$q){
    
    this.getAllLookups=function(){
          var defered=$q.defer();
        $http.get('http://10.4.14.164:8080/accolite/hrms/reference/getAllLookups').then(function(data){
            defered.resolve(data);
        },function(error){
            defered.reject(error); 
        });
        return defered.promise;
    };
    this.filterLookups=function(lookups,lookupType){
        var specificLookup=[];
        
        lookups.map(function(ele,index,lookupArray){
            if(ele.lookupGroup==lookupType){
               specificLookup.push(ele); 
            }
        })
        
        return specificLookup;
    }
   this.getAllCountries=function(){
        var defered=$q.defer();
        $http.get('http://10.4.14.179:8080/accolite/hrms/reference/getAllCountries').then(function(data){
            defered.resolve(data);
        },function(error){
            defered.reject(error); 
        });
        return defered.promise;
       
   } 
   
   this.getStates=function(countryId){
      var defered=$q.defer();
        $http.get('http://10.4.14.179:8080/accolite/hrms/reference/getStateForCountry/'+countryId).then(function(data){
            defered.resolve(data);
        },function(error){
            defered.reject(error); 
        });
        return defered.promise; 
   }
   
   this.getWorkLocations=function(){
      var defered=$q.defer();
        $http.get('http://10.4.14.164:8080/accolite/hrms/workLocation/getAll').then(function(data){
            defered.resolve(data);
        },function(error){
            defered.reject(error); 
        });
        return defered.promise; 
   } 
   
    this.getDesignations=function(){
      var defered=$q.defer();
        $http.get('http://10.4.14.164:8080/accolite/hrms/designation/getAll').then(function(data){
            defered.resolve(data);
        },function(error){
            defered.reject(error); 
        });
        return defered.promise; 
   } 
    this.getOrganizations=function(){
      var defered=$q.defer();
        $http.get('http://10.4.14.164:8080/accolite/hrms/organization/getAll').then(function(data){
            defered.resolve(data);
        },function(error){
            defered.reject(error); 
        });
        return defered.promise; 
   }
     this.getBusinessUnits=function(){
      var defered=$q.defer();
        $http.get('http://10.4.14.164:8080/accolite/hrms/business/getAll').then(function(data){
            defered.resolve(data);
        },function(error){
            defered.reject(error); 
        });
        return defered.promise; 
   } 
     
     this.getClients=function(businessUnitId){
      var defered=$q.defer();
        $http.get('http://10.4.14.164:8080/accolite/hrms/client/getAll').then(function(data){
            defered.resolve(data);
        },function(error){
            defered.reject(error); 
        });
        return defered.promise; 
   }
     
     this.getProjects=function(clientId){
      var defered=$q.defer();
        $http.get('http://10.4.14.164:8080/accolite/hrms/reference/getProjects?client='+clientId).then(function(data){
            defered.resolve(data);
        },function(error){
            defered.reject(error); 
        });
        return defered.promise; 
   }
     
}
    
    
])