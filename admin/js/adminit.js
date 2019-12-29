var admapp=angular.module('dvadm', []);
/*
 *   Universal Functions      
 *
*/

admapp.factory('dvaservice', function($http,$window) {
         var factory={};
             
              
    return{
       

        /*Function for Airport List*/
            getmnu: function() {
                    
                     return $http({
                                method: "POST",   
                                url: "../modules/appfunctions.php",
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
                                url: "../modules/appfunctions.php",
                                async:   true,
                                cache:   false,
                                data:  "func=dbselect&table=product&data=1",
                                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                            }).catch(function(e){console.log(e);});
                   
            },
            /*End Of Function */

                 /*Function for country List*/
            getuser: function() {
                    
                     return $http({
                                method: "POST",   
                                url: "../modules/appfunctions.php",
                                async:   true,
                                cache:   false,
                                data:  "func=dbselect&table=dvusers&data=1",
                                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                            }).catch(function(e){console.log(e);});
                   
            },
            /*End Of Function */
                /*Function for country List*/
            getinvty: function() {
                    
                     return $http({
                                method: "POST",   
                                url: "../modules/appfunctions.php",
                                async:   true,
                                cache:   false,
                                data:  "func=dbselect&table=inventory&data=1",
                                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                            }).catch(function(e){console.log(e);});
                   
            },
            /*End Of Function */
              getplans: function() {
                    
                     return $http({
                                method: "POST",   
                                url: "../modules/appfunctions.php",
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
                                url: "../modules/appfunctions.php",
                                async:   true,
                                cache:   false,
                                data:  "func=dbselect&table="+tbl+"&data="+dt,
                                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                            }).catch(function(e){console.log(e);});
                   
            },
            /*End Of Function */

              /*Function for Airport List*/
            deldta: function(tbl,dt) {
                    
                     return $http({
                                method: "POST",   
                                url: "../modules/appfunctions.php",
                                async:   true,
                                cache:   false,
                                data:  "func=dbdelete&table="+tbl+"&data="+dt,
                                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                            }).catch(function(e){console.log(e);});
                   
            },
            /*End Of Function */
            addplan: function(tbl,dt) {
                    
                     return $http({
                                method: "POST",   
                                url: "../modules/addplans.php",
                                async:   true,
                                cache:   false,
                                data:  "table="+tbl+"&data="+dt,
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
