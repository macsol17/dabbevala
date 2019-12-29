app.controller('appnav',function($scope, $window){
	$scope.tusr="Login";
 if ($window.localStorage.getItem("user")) {

 	var user=JSON.parse($window.localStorage.getItem("user"));
user = user[0];
  console.log(user);
 	 $scope.tusr= "Hi "+user.firstname;
 	 $scope.wallet= user.wallet;
 }

});

app.controller('dvaCtrl', function($scope, $http, $window, $location, dvservice) {
	/* Theme Initialization*/
	$scope.thmclr="#263238";
	$scope.firstRate = 2;
$scope.appflt="";

var now = new Date();
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];


if (now.getDay() == 0) {
  $scope.day = days[ now.getDay() ];
  $scope.yesterday = days[6];
  $scope.tomorrow = days[2];
}else{
  if (now.getDay() == 6) {
    $scope.day = days[ now.getDay() ];
    $scope.yesterday = days[5];
  $scope.tomorrow = days[0];

  }else{
    $scope.day = days[ now.getDay() ];
    $scope.yesterday = days[ now.getDay()-1 ];
  $scope.tomorrow = days[now.getDay()+1];
  }

}

$scope.onItemRating = function(rating){
      alert('On Rating: ' + rating);
    };
  $scope.sleep=function(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
$scope.sleep(5000);

         if ($window.localStorage.getItem("appflt")) {
          $scope.appflt=$window.localStorage.getItem("appflt");
         }
       
       $scope.setappflt = function(apft){

       		$scope.appflt= apft;
       		$window.localStorage.setItem("appflt",apft);


       }




	
	 if ($window.localStorage.getItem("menu")) {
       
	 }else{


	 	   var promise=dvservice.getmnu();
         promise.then(
          function(response) {
              $scope.menu = response.data;
               console.log($scope.menu);
        
               $window.localStorage.setItem("menu",JSON.stringify($scope.menu));
          },
          function(errorResponse) {
              $log.error('failure loading Flights', errorResponse);
          });



	 	
	 	
	 }
	 if ($window.localStorage.getItem("product")) {

	 }else{

	 	   var promise=dvservice.getprdc();
         promise.then(
          function(response) {
              $scope.product = response.data;
               console.log($scope.product);
               $window.localStorage.setItem("product",JSON.stringify($scope.product));
          },
          function(errorResponse) {
              $log.error('failure loading Flights', errorResponse);
          });

	 	
	 }

   if ($window.localStorage.getItem("plans")) {
      $scope.plans = JSON.parse($window.localStorage.getItem('plans'));
   }else{

       var promise=dvservice.getplans();
         promise.then(
          function(response) {
              $scope.plans = response.data;
               console.log($scope.plans);
               $window.localStorage.setItem("plans",JSON.stringify($scope.plans));
          },
          function(errorResponse) {
              $log.error('failure loading Flights', errorResponse);
          });

    
   }


window.onload =function what(){
  if ($window.localStorage.getItem('cart')) {
    var tp=0;
    
    var temp=JSON.parse($window.localStorage.getItem('cart'));
        var submnu= JSON.parse(temp.plan.plandesc);
        console.log(submnu);
    var count=submnu.length;
    for (var i = 0; i < count; i++) {
      if (submnu[i].colId == temp.subplan) {
      document.getElementById("totalpdc").innerHTML = '1';   
      document.getElementById("tltprc").innerHTML = submnu[i].price;
      tp=submnu[i].price;
      }
    }
     
    $scope.crt=temp.plan;
     $scope.ptotl=tp;

    localStorage.setItem('totalpay', tp); 
   
    console.log($scope.ptotl);
  }
}

	 


	$scope.addcart = function(pid,pname,pprice, opt){
        //alert(pid+"=pid / "+pname);
        if ($window.localStorage.getItem('cart')) {
        //alert ("Cart Function Activated");
        //console.log(localStorage.getItem('cart'));
        var count=Object.keys(JSON.parse(localStorage.getItem('cart'))).length;
        var temp=JSON.parse(localStorage.getItem('cart'));
          temp[count]={id: pid,productname: pname, productprice: pprice};
          console.log(temp);

          localStorage.setItem('cart', JSON.stringify(temp));
        document.getElementById("totalpdc").innerHTML = count;
        document.getElementById("totalpdc1").innerHTML = count;
    }else{
    	//alert ("Cart Function Not Set");
    	var cart1=[{id: pid,productname: pname, productprice: pprice}];
    	console.log(cart1);
		localStorage.setItem('cart', JSON.stringify(cart1)); 
		document.getElementById("totalpdc").innerHTML = "1";
		document.getElementById("totalpdc1").innerHTML = "1";
    }
       
   if ( opt== 1) {
   	var x = document.getElementById("addedcrt");
   	var y = document.getElementById("addedcrtele");

   	y.innerHTML= pname;
   	x.style.display = "block";
   }
   
   

 if ($window.localStorage.getItem('cart')) {
		var tp=0;
		
		var temp=JSON.parse($window.localStorage.getItem('cart'));
    $scope.crt=temp;
    //alert("cart Activated");
    console.log($scope.crt);
		var count=JSON.parse(localStorage.getItem('cart')).length;
		for (var i = 0; i < count; i++) {
			tp=tp+parseFloat(temp[i]["productprice"]);
		}
		document.getElementById("tltprc").innerHTML = tp;
    document.getElementById("totalpdc").innerHTML = JSON.parse(localStorage.getItem('cart')).length;
		$window.localStorage.setItem('totalpay', tp);
    $scope.ptotl=tp; 
	}

  }



	 $scope.parJson = function (json) {
    //alert(json);
        return JSON.parse(json);
    }



    
});




app.controller('cartcontrol', function($scope, $http, $window, $location, dvservice) {



$scope.disc=0;

  if ($window.localStorage.getItem('cart')) {
    var tp=0;
    
    var temp=JSON.parse($window.localStorage.getItem('cart'));
        var submnu= JSON.parse(temp.plan.plandesc);
        console.log(submnu);
    var count=submnu.length;
    for (var i = 0; i < count; i++) {
      if (submnu[i].colId == temp.subplan) {
      document.getElementById("totalpdc").innerHTML = '1';   
      document.getElementById("tltprc").innerHTML = submnu[i].price;
      tp=submnu[i].price;
      }
    }
     
    $scope.crt=temp.plan;
     $scope.ptotl=tp;

    localStorage.setItem('totalpay', tp); 
   
    console.log($scope.ptotl);
  }

if ($window.localStorage.getItem('user')) {
  var usr= JSON.parse($window.localStorage.getItem('user'));
}

$scope.subscribe=$window.localStorage.getItem('subscription');


$scope.order= function(){
  console.log($scope.checkout);
  $window.location.href="payu.php";
}

$scope.txn= ($scope.ptotl - $scope.disc)*0.025;


$scope.appcpon=function(x){
if (x=='TRIAL01' || x == 'trial01') {
  $scope.disc=30;
  $window.localStorage.setItem('dicount', 30);
}


}


  
  });



app.controller('subs', function($scope, $http, $window, $location, dvservice) {
   if ($window.localStorage.getItem('dicount')) {
    $scope.disc=$window.localStorage.getItem('dicount');
   }else{
    $scope.disc=0;
   }
 
   
    $scope.subscribe=function(planid, psub){
      
      
      $scope.tcart= {'plan':$scope.plans[planid], 'subplan':psub};
      
     $window.localStorage.setItem('cart', JSON.stringify($scope.tcart));
     //console.log($scope.tcart);
     $window.location.href="checkout.html";
    } 
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

console.log($scope.formData);
   });


app.controller('upay', function($scope, $http, $window, $location, dvservice) {
    $scope.tpay=$window.localStorage.getItem('totalpay');
    console.log($scope.tpay);
    $scope.subs=$window.localStorage.getItem('subscription');
    $scope.np= ($scope.tpay * $scope.subs)+(($scope.tpay * $scope.subs)*0.05);
 });