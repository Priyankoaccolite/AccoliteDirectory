app.directive("autoSuggest",[function(){
    return {
        scope:{
          datas:'=',
          clickedFunction:'&'    
            
        },
        template:"<div> \
                    <input type='text' name='employeeList' ng-model='dataset' list='datas' ng-change='setChange(dataset)'> \
                    <datalist id='datas'> \
                             <option ng-repeat='data in datas'  \
                                    value={{data}}> \
                             </option> \
                    </datalist> \
                    </div> ",
        controller:function($scope,dataService){
               
                /*dataService.getEmployee.then(function(data){
                    dataService.employeeData=data;
                    $scope.employeeList=data;
                });*/
                $scope.datas=$scope.datas;
                var clickedFunction=$scope.clickedFunction;
        
                $scope.setChange=function(data){
                    var dataList=angular.element("#datas");
                    var len=dataList[0].options.length;
                    for(var i=0;i<len;i++){
                        if(data==dataList[0].options[i].value){
                            $scope.clickedFunction({data: data});
                        }
                    }
                    $scope.clickedFunction({data: data});
                };
                             
                /*$("input[name=employeeList]").focusout(function(){
                    alert($(this).val());
                });*/  
                             
                /*$("#datas option:selected").on('input', function(e){
                    var selected = $(this).val();
                }); */            
        }
        
    }
}])