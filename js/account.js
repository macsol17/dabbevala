
app.controller('lgnreg', function($scope, $http, $window, $location, dvservice) { 

 $scope.mngpg="login.html";
 console.log($scope.mngpg);
$scope.change= function(){
	$scope.mngpg = "register.html";
	console.log($scope.mngpg);

}


});
app.controller('llogin', function($scope, $http, $window, $location, dvservice) { 


$scope.login = function(){
         //alert("login init");
         var dta= "username ='"+$scope.uname+ "' AND password ='"+$scope.upass+"'";
         //console.log(dta);
          var promise=dvservice.getdta("dvusers", dta);
         promise.then(
          function(response) {
              $scope.usr = response.data;
              if ($scope.usr == 'No Results') {
                $window.location.href="accounts.html";
              }else{
               console.log($scope.usr);
               $window.localStorage.setItem("user",JSON.stringify($scope.usr));
               if ($window.localStorage.getItem('cart')) {
               	$window.location.href="checkout.html";
               }else{
                $window.location.href=".";
               }
               }
        
               
          },
          function(errorResponse) {
              $log.error('failure loading Flights', errorResponse);
          });
         console.log($scope);

	}


	$scope.reg = function(){
		var pass = Math.random().toString(36).slice(-8);
    $scope.usr=[{'firstname': $scope.fname,
     'lastname':$scope.lname, 
     'username': $scope.email, 
     'password': pass, 
     'ph':$scope.uph,
    'address':$scope.add, 
    'city':$scope.city, 'state': $scope.state, 'country':$scope.country, 'zipcode':$scope.zipcode, 'email':$scope.email, 'mainbalance':0,
     'rewardbalance':0, 'type':"user"}]

    var dta = "(firstname, lastname, username, password, ph,address, city, state, country, zipcode, email, mainbalance, rewardbalance, type) VALUES ('"+$scope.fname+"', '"+$scope.lanme+"', '"+$scope.email+"','"+pass+"', '"+$scope.uph+"', '"+$scope.add+"', '"+$scope.city+"', '"+$scope.state+"', '"+$scope.country+"', '"+$scope.zipcode+"', '"+$scope.email+"','0','0', 'user')";
     console.log(dta);
     $window.localStorage.setItem("user",JSON.stringify($scope.usr));
     $window.localStorage.setItem("cusr",dta);
     $window.localStorage.setItem("uph",$scope.uph);
     var dta= "ph ='"+$scope.uph+"'";
         //console.log(dta);
          var promise=dvservice.getdta("dvusers", dta);
         promise.then(
          function(response) {
              console.log(response.data);
              if (response.data == '"No Results"') {
                $window.location.href="validation.html";
              }else{
                alert("User already exist");
                            }
        
               
          },
          function(errorResponse) {
              $log.error('failure loading Flights', errorResponse);
          });
     
		
	}




	});

app.controller('valid', function($scope, $http, $window, $location, dvservice) { 
    var a = Math.floor(100000 + Math.random() * 900000);   
    a = String(a);
    a = a.substring(0,4);
    //alert( "valor:" +a );
    var ph= $window.localStorage.getItem('uph');

    var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      alert(this.responseText);
      document.getElementById("demo").style.display = "block";
    }
  };
  var txt ="Your account creation OTP for Dabbevala is "+a;
  xhttp.open("GET", "http://nimbusit.co.in/api/swsendSingle.asp?username=t1dabbevala&password=18547608&sender=DBVALA&sendto="+ph+"&message="+txt, true);
  xhttp.send();

$scope.validate= function(){
  $scope.usr=JSON.parse($window.localStorage.getItem("user"));
  if ($scope.otp == a) {
  dta = $window.localStorage.getItem('cusr');
 var promise=dvservice.addusr("dvusers", dta);
         promise.then(
          function(response) {
              
                      if ($window.localStorage.getItem('cart')) {
                $window.location.href="checkout.html";
               }else{
                $window.location.href=".";
               }
               
          },
          function(errorResponse) {
              $log.error('failure loading Flights', errorResponse);
          });
   

  }
}

  });