app.service("dataService",["$http","$q",function($http,$q){
    

    this.getData=function(){
        var defered=$q.defer();
        $http.get('sample.json').then(function(data){
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
        $http.get('http://localhost:8080/accolite/hrms/reference/getAllLookups').then(function(data){
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
}
    
    
])