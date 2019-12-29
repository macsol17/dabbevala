var app = angular.module('dva', ['ngMaterial', 'jkAngularRatingStars']);


/*
 *      Function to clear local storage before window close
 *
*/

jQuery(window).unload(function(){

    window.localStorage.removeItem('menu');
    window.localStorage.removeItem('product');
});



 app.directive('loading',   ['$http' ,function ($http)  
 {  
     return {  
         restrict: 'A',  
         template: '<div class="loading-spiner"></div>',  
         link: function (scope, elm, attrs)  
         {  
             scope.isLoading = function () {  
                 return $http.pendingRequests.length > 0;  
             };  
  
             scope.$watch(scope.isLoading, function (v)  
             {  
                 if(v){  
                     elm.show();  
                 }else{  
                     elm.hide();  
                 }  
             });  
         }  
     };  
 }]); 




/*
 *   Universal Functions      
 *
*/

app.factory('dvservice', function($http,$window) {
         var factory={};
             
              
    return{
        /*Currency Conversion function*/
        currcov: function(){
            return $http({
                    method : "GET",
                      url : "https://api.exchangeratesapi.io/latest"
                  }).catch(function(e){console.log(e);});
        },
        /*End Of Currency conversion Function*/
         /*End Of Function */
            addusr: function(tbl,dt) {
                    
                     return $http({
                                method: "POST",   
                                url: "../modules/register.php",
                                async:   true,
                                cache:   false,
                                data:  "table="+tbl+"&data="+dt,
                                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                            }).catch(function(e){console.log(e);});
                   
            },
            /*End Of Function */
        /*Function for Airport List*/
            getmnu: function() {
                    
                     return $http({
                                method: "POST",   
                                url: "./modules/appfunctions.php",
                                async:   true,
                                cache:   false,
                                data:  "func=dbselect&table=menu&data=1",
                                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                            }).catch(function(e){console.log(e);});
                   
            },
            /*End Of Function */
            
             /*Function for country List*/
            getprdc: function() {
                    
                     return $http({
                                method: "POST",   
                                url: "./modules/appfunctions.php",
                                async:   true,
                                cache:   false,
                                data:  "func=dbselect&table=product&data=1",
                                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                            }).catch(function(e){console.log(e);});
                   
            },
            /*End Of Function */
                getplans: function() {
                    
                     return $http({
                                method: "POST",   
                                url: "./modules/appfunctions.php",
                                async:   true,
                                cache:   false,
                                data:  "func=dbselect&table=plans&data=1",
                                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                            }).catch(function(e){console.log(e);});
                   
            },
            /*End Of Function */
        

            /*Function for Airport List*/
            getdta: function(tbl,dt) {
                    
                     return $http({
                                method: "POST",   
                                url: "./modules/appfunctions.php",
                                async:   true,
                                cache:   false,
                                data:  "func=dbselect&table="+tbl+"&data="+dt,
                                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                            }).catch(function(e){console.log(e);});
                   
            },
            /*End Of Function */
            /*function to store in localstorage*/
            locstg: function(name,data){
              $window.localStorage.setItem(name,data);
              return true;
            },
            /*End Of Function*/

            /*Function to retrieve data from local storage*/
            rtvlocstg:function(name){
                return $window.localStorage.getItem(name);

            }
            /*End of function*/
            
           

         }




    });



app.filter('setDecimal', function ($filter) {
    return function (input, places) {
        if (isNaN(input)) return input;
        // If we want 1 decimal place, we want to mult/div by 10
        // If we want 2 decimal places, we want to mult/div by 100, etc
        // So use the following to create that factor
        var factor = "1" + Array(+(places > 0 && places + 1)).join("0");
        return Math.round(input * factor) / factor;
    };
});



