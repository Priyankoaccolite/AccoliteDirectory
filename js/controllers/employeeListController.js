app.controller("employeeListController",["$scope","dataService","$state",function($scope,dataService,$state){
    
  var grid;
    
  $scope.place="";
  $scope.date="";    
  $(function() {
    $("#datepicker").datepicker();
  });
  var columns = [
    {id: "firstName", name: "firstName", field: "firstName"},
    {id: "middleName", name: "middleName", field: "middleName"},
    {id: "lastName", name: "lastName", field: "lastName"},
    {id: "employeeCode", name: "employeeCode", field: "employeeCode"},
    {id: "skypeId", name: "skypeId", field: "skypeId"}
    
    
  ];
  var options = {
    enableCellNavigation: true,
    enableColumnReorder: false,
    forceFitColumns:true
  };
    //$scope.products=[];
    dataService.getEmployee().then(function(data){
              var objArray=[];
              var dataArray=data.data;    
              for(var i=0;i<dataArray.length;i++){
                  var obj={};
                  obj.firstName=dataArray[i].firstName;
                  obj.middleName=dataArray[i].middleName;
                  obj.lastName=dataArray[i].lastName;
                  obj.employeeCode=dataArray[i].employeeCode;
                  obj.skypeId=dataArray[i].skypeId;
                  objArray.push(obj);
              }
                dataService.gridData=objArray;
              dataService.data=data.data; 
              
             $scope.gridInstance = new Slick.Grid("#myGrid", dataService.gridData, columns, options);
                $scope.gridInstance.onClick.subscribe(function(e, args){
                   
                    var paramName=e.target.textContent;
                   
                    $state.go("listEmployee.detailEmployee",{paramId: paramName});
                });
    },function(error){
        console.log(error);
    });
    
   
    
    
   /* $scope.getData=function(){
        var finalData=[];
        
        for(var i=0;i<dataService.data.length;i++){
            var temp=dataService.data[i];
         if($scope.product==temp.product_name && $scope.place==temp.place && $scope.date==temp.date){
             finalData.push(dataService.data[i]);
         }
             console.log("set");  
        }
        grid = new Slick.Grid("#myGrid", finalData, columns, options);
    }*/
    
    
    
 
}]);