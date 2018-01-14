angular.module('angucomplete', [] ).directive('angucomplete',function($timeout,$http,$state,$rootScope){
	return{
		
		restrict:'EA',
		scope:{
			"placeholder":"@placeholder",
			"inputclass":"@inputclass",
            "url": "@url",
			"selectedObject": "=selectedobject",
			"searchFields": "@searchfields",
            "minLengthUser": "@minlength",
		},
template:'<div class="angucomplete-holder"><input type="text"  ng-model="searchStr" ng-change="keyPressed()" placeholder="{{placeholder}}" class="{{inputclass}}"  onmouseup="this.select();" ng-blur="hideResults()" /><div  class="angucomplete-dropdown" ng-if="showDropdown"><div class="angucomplete-searching" ng-show="searching">Searching...</div><div class="angucomplete-searching" ng-show="!searching && (!matches || matches.length == 0)">No results found</div><div class="angucomplete-row" ng-repeat="match in matches" ng-mousedown="selectResult(match)" ng-mouseover="hoverRow($index)" ng-class="{\'angucomplete-selected-row\': $index == currentIndex}"><div  class="angucomplete-description"><img ng-if="!match.pic" src="../../../images/user.png" /><img ng-if="match.pic && match.pic != \'\'" ng-src="{{match.pic}}" class="angucomplete-image"/>{{match.empFirstName}}&nbsp;{{match.empLastName}}({{match.empCode}})<div style="padding-left:15px"><i class="fa fa-md fa-skype"> {{match.skypeId}}</div></div></div></div>',
		link:function($scope,elem,attr){
			
			$scope.lastSearchTerm = null;
            $scope.currentIndex = null; 
            $scope.justChanged = false;
            $scope.searching = false;
            $scope.minLength = 3;
            $scope.searchStr = null;
			 $scope.matches = [];
			
			if ($scope.minLengthUser && $scope.minLengthUser != "") {
                $scope.minLength = $scope.minLengthUser;
            }
			isNewSearchNeeded = function(newTerm, oldTerm) {
                return newTerm.length >= $scope.minLength && newTerm != oldTerm
            }
			
			$scope.hideResults = function() {
               
               $scope.showDropdown = false;
                
            };

          

            $scope.hoverRow = function(index) {
                $scope.currentIndex = index;
            }
      
			
			

            $scope.keyPressed = function() {
                
                    if (!$scope.searchStr || $scope.searchStr == "") {
                        $scope.showDropdown = false;
                        $scope.lastSearchTerm = null; 
                        $scope.matches = [];
                        $scope.selectedObject=null;
                        
                    } else {
                        if (isNewSearchNeeded($scope.searchStr, $scope.lastSearchTerm)) {
                        $scope.lastSearchTerm = $scope.searchStr
                        $scope.showDropdown = true;
                        $scope.currentIndex = -1;
                        $scope.matches = [];
                        $scope.searching = true;
						$scope.selectedObject=null;
                        $scope.search($scope.searchStr);
                        
                        
                    }
                    else{
                         $scope.lastSearchTerm = $scope.searchStr;
                         $scope.showDropdown = false;
                        $scope.matches = [];
						$scope.selectedObject=null;
                        
                        
                    }
                    }
                    
                
            }
			
			
			 $scope.search = function(str) {
                
				$scope.matches = [];
                if (str.length >= $scope.minLength) {
                    $http.get($scope.url + str,{}).then(function(res){
                                   $scope.matches= $scope.matches.concat(res.data);
                        $scope.searching=false;
                            },function(error){
                            console.log(error);
                            })
                }
				
				else{
					$scope.showDropdown = false;
					
				}
            }
			
			
			
			$scope.selectResult = function(result) {
                
                $scope.searchStr = $scope.lastSearchTerm = result.empFirstName + ' '+ result.empLastName;
                $scope.selectedObject = result;
                $scope.showDropdown = false;
                $scope.matches = [];
                $state.go("details",{"selectedPerson":$scope.selectedObject});
                $rootScope.home=false;
                //$scope.$apply();
            }
			
			
	$scope.resetResult=function(){
				$scope.searchStr =null;
                $scope.selectedObject = null;
                $scope.showDropdown = false;
                $scope.matches = [];
		
	}
			
		},
	}
})