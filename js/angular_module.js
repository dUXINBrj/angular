function GreetCtrl($scope,$rootScope){	//$rootscope根作用域类似<html>
	$scope.name='WORD';
	$rootScope.department = 'Angular';
}

function ListCtrl($scope){
	$scope.names=['Igor','Misko','Vojta'];
}
