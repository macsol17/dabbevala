

admapp.controller('dvadmCtrl', function($scope, $http, $window, $location, dvaservice) {
    


    
   	var selectedFruits = {
    Breakfast: true
  };
  var subtyp = {
    NorthIndian: true
  };
  var fodtyp= {
    Veg : true
  };
  var calculateSomeSelected = function() {
    $scope.someSelected = Object.keys(selectedFruits).some(function (key) {
      return selectedFruits[key];
    });
  };
  var subtypSelected = function() {
    $scope.somesubtypSelected = Object.keys(subtyp).some(function (key) {
      return subtyp[key];
    });
  };
var fodtypSelected = function() {
    $scope.somefodtypSelected = Object.keys(fodtyp).some(function (key) {
      return fodtyp[key];
    });
  };
  $scope.formData = {
    selectedFruits: selectedFruits,
    subtyp: subtyp,
    fodtyp: fodtyp
  };
  $scope.fodtyp = [{'name':'Veg'}, {'name':'NonVeg'}];
  $scope.subtyp = [{'name':'NorthIndian'}, {'name':'SouthIndian'}];
  $scope.fruits = [{'name':'Breakfast'}, {'name':'Lunch'}, {'name':'Dinner'}];
  
  $scope.fodtypChanged = fodtypSelected;
  $scope.subtypChanged = subtypSelected;
  $scope.checkboxChanged = calculateSomeSelected;
  subtypSelected();
  calculateSomeSelected();
  fodtypSelected();

     
//  $scope.dataType = ['type1', 'type2', 'type'];
      $scope.dataType = [
    {id: 1, colId:['col1', 'col4'], dataTypeName: 'Date'},
    {id: 2, colId:['col2', 'col3'], dataTypeName: 'Alpha'},
    {id: 3, colId:['col5', 'col6', 'col7', 'col8'], dataTypeName: 'List Value'}
  ];
  
 $scope.columns = [{colId: 'col1', validity:'',  price:''}];
  
  $scope.addNewColumn = function() {
    var newItemNo = $scope.columns.length+1;
    $scope.columns.push({'colId':'col'+newItemNo});
  };
    

  $scope.removeColumn = function(index) {
    // remove the row specified in index
    $scope.columns.splice( index, 1);
    // if no rows left in the array create a blank array
    if ( $scope.columns.length() === 0 || $scope.columns.length() == null){
      alert('no rec');
      $scope.columns.push = [{"colId":"col1"}];
    }
		
  
  };
   

 


	 	   var promise=dvaservice.getmnu();
         promise.then(
          function(response) {
              $scope.menu = response.data;
               console.log($scope.menu);
        
               $window.localStorage.setItem("menu",JSON.stringify($scope.menu));
          },
          function(errorResponse) {
              $log.error('failure loading Flights', errorResponse);
          });



	 	
	 		 

	

	 	   var promise=dvaservice.getprdc();
         promise.then(
          function(response) {
              $scope.product = response.data;
               console.log($scope.product);
               $window.localStorage.setItem("product",JSON.stringify($scope.product));
          },
          function(errorResponse) {
              $log.error('failure loading Flights', errorResponse);
          });

	 	
	 

	 

	 	   var promise=dvaservice.getuser();
         promise.then(
          function(response) {
              $scope.dvusers = response.data;
               console.log($scope.dvusers);
               $window.localStorage.setItem("dvusers",JSON.stringify($scope.dvusers));
          },
          function(errorResponse) {
              $log.error('failure loading Flights', errorResponse);
          });

          var promise=dvaservice.getinvty();
         promise.then(
          function(response) {
              $scope.inventory = response.data;
               console.log($scope.inventory);
        
               $window.localStorage.setItem("inventory",JSON.stringify($scope.inventory));
          },
          function(errorResponse) {
              $log.error('failure loading Flights', errorResponse);
          });
	 	
          var promise=dvaservice.getplans();
         promise.then(
          function(response) {
              $scope.plans = response.data;
               console.log($scope.plans);
        
               $window.localStorage.setItem("plans",JSON.stringify($scope.plans));
          },
          function(errorResponse) {
              $log.error('failure loading Flights', errorResponse);
          });


	 $scope.del = function(id,tbl){
	 	var cnd="id='"+id+"'";

	
		var promise=dvaservice.deldta(tbl, cnd);
         promise.then(
          function(response) {
              console.log(response.data);
               location.href=tbl+".html";
               
          },
          function(errorResponse) {
              $log.error('failure loading Flights', errorResponse);
          });


	}


$scope.createplan=function(){
	console.log($scope);
	console.log($scope.columns);
     var time, subtyp, fdtyp;
     
     if ($scope.formData.selectedFruits.Breakfast) {time='Breakfast,';}
     if ($scope.formData.selectedFruits.Lunch) {time=time+' Lunch,';}
     if ($scope.formData.selectedFruits.Dinner) {time=time+' Dinner,';}
	if ($scope.formData.subtyp.NorthIndian) {subtyp='NorthIndian,';}	
	if ($scope.formData.subtyp.SouthIndian) {subtyp=subtyp+' SouthIndian';}
	if ($scope.formData.fodtyp.Veg) {fdtyp='Veg, ';}
	if ($scope.formData.fodtyp.NonVeg) {fdtyp=fdtyp+'NonVeg';}

	$scope.fplan={
		 'pname': $scope.pname,
		 'time': time,
		 'subtyp':subtyp,
		 'foodtype':fdtyp,
		 'plandesc':$scope.columns
	};

	var dta="(name, tme, subscriptiontype, foodtype, plandesc) VALUES ('"+$scope.pname+"', '"+time+"', '"+subtyp+"', '"+fdtyp+"', '"+JSON.stringify($scope.columns)+"')"
    var tbl="plans";
      	var promise=dvaservice.addplan(tbl, dta);
         promise.then(
          function(response) {
              
               //console.log(response.data);
             document.write(response.data);
               
          },
          function(errorResponse) {
              $log.error('failure loading Flights', errorResponse);
          });
	console.log($scope.fplan);
}


	



  $scope.admlogin=function(){

    var dta= "username ='"+$scope.usrname+ "' AND password ='"+$scope.usrpass+"'";
         //console.log(dta);
          var promise=dvaservice.getdta("dvusers", dta);
         promise.then(
          function(response) {
              $scope.adminusr = response.data;
              if ($scope.adminusr == 'No Results') {
                $window.location.href=".";
              }else{
               $window.localStorage.setItem("adminuser",JSON.stringify($scope.adminusr));
               $window.location.href="dashboard.html";
               }
        
               
          },
          function(errorResponse) {
              $log.error('failure loading Flights', errorResponse);
          });
         console.log($scope);
  }

});