app.controller("employeeListController",["$scope","dataService","$state",function($scope,dataService,$state){
    
  var grid;
    
  $scope.place="";
  $scope.date="";    
  $(function() {
    $("#datepicker").datepicker();
  });
    var columnFilters = {};
  var columns = [
    {id: "firstName", name: "firstName", field: "firstName",cssClass:'gridColumnStyle'},
    {id: "lastName", name: "lastName", field: "lastName",cssClass:'gridColumnStyle'},
    {id: "employeeCode", name: "employeeCode", field: "employeeCode",cssClass:'gridColumnStyle'},
    {id: "skypeId", name: "skypeId", field: "skypeId",cssClass:'gridColumnStyle'}
    
    
  ];
  var options = {
    enableCellNavigation: true,
    enableColumnReorder: false,
    forceFitColumns:true,
    showHeaderRow: true,
    headerRowHeight: 30,
    explicitInitialization: true  
  };
    //$scope.products=[];
    dataService.getEmployee().then(function(data){
              var objArray=[];
              var dataArray=data.data;    
              for(var i=0;i<dataArray.length;i++){
                  var obj={};
                  obj.firstName=dataArray[i].firstName;
                  obj.lastName=dataArray[i].lastName;
                  obj.employeeCode=dataArray[i].employeeCode;
                  obj.skypeId=dataArray[i].skypeId;
                  obj.id=i;
                  objArray.push(obj);
              }
                dataService.gridData=objArray;
              dataService.data=data.data; 
              
             //$scope.gridInstance = new Slick.Grid("#myGrid", dataService.gridData, columns, options);
            
            var  dataView = new Slick.Data.DataView();
    $scope.gridInstance = new Slick.Grid("#myGrid", dataView, columns, options);


    dataView.onRowCountChanged.subscribe(function (e, args) {
      $scope.gridInstance.updateRowCount();
      $scope.gridInstance.render();
    });

    dataView.onRowsChanged.subscribe(function (e, args) {
      $scope.gridInstance.invalidateRows(args.rows);
      $scope.gridInstance.render();
    });


    $($scope.gridInstance.getHeaderRow()).delegate(":input", "change keyup", function (e) {
      var columnId = $(this).data("columnId");
      if (columnId != null) {
        columnFilters[columnId] = $.trim($(this).val());
        dataView.refresh();
      }
    });

    $scope.gridInstance.onHeaderRowCellRendered.subscribe(function(e, args) {
        $(args.node).empty();
        $("<input type='text'>")
           .data("columnId", args.column.id)
           .val(columnFilters[args.column.id])
           .appendTo(args.node);
    });

    $scope.gridInstance.init();

    dataView.beginUpdate();
    dataView.setItems(dataService.gridData);
    dataView.setFilter(filter);
    dataView.endUpdate();
        
                $scope.gridInstance.onClick.subscribe(function(e, args){
                   
                    var paramName=e.target.textContent;
                   
                    $state.go("listEmployee.detailEmployee",{paramId: paramName});
                });
    },function(error){
        console.log(error);
    });
    
   function filter(item) {
    for (var columnId in columnFilters) {
      if (columnId !== undefined && columnFilters[columnId] !== "") {
        var c = $scope.gridInstance.getColumns()[$scope.gridInstance.getColumnIndex(columnId)];
        if (item[c.field] != columnFilters[columnId]) {
          return false;
        }
      }
    }
    return true;
  }
    
    
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
    
       
    
    
   function filter(item) {
    for (var columnId in columnFilters) {
      if (columnId !== undefined && columnFilters[columnId] !== "") {
        var c = $scope.gridInstance.getColumns()[$scope.gridInstance.getColumnIndex(columnId)];
        if (item[c.field] != columnFilters[columnId]) {
          return false;
        }
      }
    }
    return true;
  } 
    
 
}]);