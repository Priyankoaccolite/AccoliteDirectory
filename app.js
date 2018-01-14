var app=angular.module("directory",["ui.router","ngTouch", "angucomplete"]);

app.config(function($stateProvider){
    
   /* $stateProvider.state('home',{
        url: '/',
        templateUrl: 'home.html',
        controller: 'homeController',
        controllerAs: 'hc'
    })*/
    
    $stateProvider.state('details',{
        url: '/details',
        templateUrl: 'templates/detail.html',
        controller: 'detailController',
        controllerAs: 'dc',
        params:{
            selectedPerson:null,
        },
    userDetails: function($stateParams, dataService) {
      return dataService.getData($stateParams.selectedPerson.empCode);
    },
    })
    
     $stateProvider.state('employeeCreation',{
        url: '/employeeCreation',
        templateUrl: 'templates/employeecreation.html',
         controller: 'employeecreationController',
        
        
    })
    
})



 