app.service("dataService",["$http","$q",function($http,$q){
    

    this.getData=function(){
        var defered=$q.defer();
        $http.get('../../sample.json').then(function(data){
            defered.resolve(data);
        },function(error){
            defered.reject(error); 
        });
        return defered.promise;
    };
    
    
}]);