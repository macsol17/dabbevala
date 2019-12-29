<?php
  session_start();

    
$MERCHANT_KEY = "vGCo15iC";
$SALT = "0eSWIB9p65";
// Merchant Key and Salt as provided by Payu.

$PAYU_BASE_URL = "https://sandboxsecure.payu.in";   // For Sandbox Mode
//$PAYU_BASE_URL = "https://secure.payu.in";      // For Production Mode

$action = '';

$posted = array();
if(!empty($_POST)) {
    //print_r($_POST);
  foreach($_POST as $key => $value) {    
    $posted[$key] = $value; 
  
  }
}

$formError = 0;

if(empty($posted['txnid'])) {
  // Generate random transaction id
  $txnid = substr(hash('sha256', mt_rand() . microtime()), 0, 20);
} else {
  $txnid = $posted['txnid'];
}
$hash = '';
// Hash Sequence
$hashSequence = "key|txnid|amount|productinfo|firstname|email|udf1|udf2|udf3|udf4|udf5|udf6|udf7|udf8|udf9|udf10";
if(empty($posted['hash']) && sizeof($posted) > 0) {
  if(
          empty($posted['key'])
          || empty($posted['txnid'])
          || empty($posted['amount'])
          || empty($posted['firstname'])
          || empty($posted['email'])
          || empty($posted['phone'])
          || empty($posted['productinfo'])
          || empty($posted['surl'])
          || empty($posted['furl'])
      || empty($posted['service_provider'])
  ) {
    $formError = 1;
  } else {
    //$posted['productinfo'] = json_encode(json_decode('[{"name":"tutionfee","description":"","value":"500","isRequired":"false"},{"name":"developmentfee","description":"monthly tution fee","value":"1500","isRequired":"false"}]'));
  $hashVarsSeq = explode('|', $hashSequence);
    $hash_string = '';  
  foreach($hashVarsSeq as $hash_var) {
      $hash_string .= isset($posted[$hash_var]) ? $posted[$hash_var] : '';
      $hash_string .= '|';
    }

    $hash_string .= $SALT;


    $hash = strtolower(hash('sha512', $hash_string));
    $action = $PAYU_BASE_URL . '/_payment';
  }
} elseif(!empty($posted['hash'])) {
  $hash = $posted['hash'];
  $action = $PAYU_BASE_URL . '/_payment';
}
?>
<html>
  <head>
  <script>
    var hash = '<?php echo $hash ?>';
    function submitPayuForm() {
      if(hash == '') {
        return;
      }
      var payuForm = document.forms.payuForm;
      payuForm.submit();
    }
  </script>
  </head>
  <body onload="submitPayuForm()">
    <?php
   
   
  $posted['firstname']="Uttkarsh";
  $posted['lastname']="pachori";
  $posted['email']="uttkarsh@mackerelsolutions.com";
  $posted['phone']="9910106154";
  $posted['productinfo']="dabba";
  $posted['surl']="http://dabbevala.com/paysuccess";
  $posted['furl']="http://dabbevala.com/payfailure"; 
    ?>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <link rel='stylesheet' id='pizzaro-woocommerce-style-css'  href='theme/woocommerce/woocommerced8f3.css?ver=4.9.12' type='text/css' media='all' />
<link rel='stylesheet' id='contact-form-7-css'  href='theme/contact-form-7/includes/css/styles5560.css?ver=5.0.4' type='text/css' media='all' />
<link rel='stylesheet' id='rs-plugin-settings-css'  href='theme/revslider/public/assets/css/settings23da.css?ver=5.4.8' type='text/css' media='all' />
<style id='rs-plugin-settings-inline-css' type='text/css'>
#rs-demo-id {}
</style>
<style id='woocommerce-inline-inline-css' type='text/css'>
.woocommerce form .form-row .required { visibility: visible; }
</style>
<link rel='stylesheet' id='wpsl-styles-css'  href='theme/wp-store-locator/css/styles.min2bc7.css?ver=2.2.17' type='text/css' media='all' />
<link rel='stylesheet' id='wcqi-css-css'  href='theme/woocommerce-quantity-increment/assets/css/wc-quantity-incrementd8f3.css?ver=4.9.12' type='text/css' media='all' />
<link rel='stylesheet' id='yith_wccl_frontend-css'  href='theme/yith-woocommerce-product-add-ons/assets/css/yith-wccl7fb9.css?ver=1.5.9' type='text/css' media='all' />
<style id='yith_wccl_frontend-inline-css' type='text/css'>
.select_option .yith_wccl_tooltip > span{background: ;color: ;}
            .select_option .yith_wccl_tooltip.bottom span:after{border-bottom-color: ;}
            .select_option .yith_wccl_tooltip.top span:after{border-top-color: ;}
</style>
<link rel='stylesheet' id='bootstrap-css'  href='theme/bootstrap.min7433.css?ver=3.3.7' type='text/css' media='all' />
<link rel='stylesheet' id='animate-css'  href='theme/animate.min9d52.css?ver=3.5.1' type='text/css' media='all' />
<link rel='stylesheet' id='pizzaro-style-css'  href='theme/stylea09d.css?ver=1.2.11' type='text/css' media='all' />
<link rel='stylesheet' id='pizzaro-color-css'  href='theme/color/redd8f3.css?ver=4.9.12' type='text/css' media='all' />
<link rel='stylesheet' id='pizzaro-fonts-css'  href='https://fonts.googleapis.com/css?family=Open%20Sans:400italic,400,300,600,700,800|Yanone+Kaffeesatz:400,700,300,200&amp;subset=latin%2Clatin-ext' type='text/css' media='all' />
<link rel='stylesheet' id='pizzaro-icons-css'  href='theme/font-pizzarod8f3.css?ver=4.9.12' type='text/css' media='all' />
<link rel='stylesheet' id='custom-scrollbar-css'  href='theme/jquery.mCustomScrollbar.minc6bd.css?ver=3.1.5' type='text/css' media='all' />
<link rel='stylesheet' id='pizzaro-jetpack-style-css'  href='theme/jetpack/jetpacka09d.css?ver=1.2.11' type='text/css' media='all' />
<link rel='stylesheet' id='woothemes-features-layout-css'  href='theme/features-by-woothemes/assets/css/layout8a54.css?ver=1.0.0' type='text/css' media='all' />
<link rel='stylesheet' id='pizzaro-demo-style-css'  href='theme/pizzaro-demo/assets/css/style8a54.css?ver=1.0.0' type='text/css' media='all' />
<link rel='stylesheet' id='dashicons-css'  href='theme/wp-includes/css/dashicons.mind8f3.css?ver=4.9.12' type='text/css' media='all' />
<style id='dashicons-inline-css' type='text/css'>
[data-font="Dashicons"]:before {font-family: 'Dashicons' !important;content: attr(data-icon) !important;speak: none !important;font-weight: normal !important;font-variant: normal !important;text-transform: none !important;line-height: 1 !important;font-style: normal !important;-webkit-font-smoothing: antialiased !important;-moz-osx-font-smoothing: grayscale !important;}
</style>
<link rel='stylesheet' id='jquery-ui-css'  href='theme/yith-woocommerce-product-add-ons/assets/css/jquery-ui.mine899.css?ver=1.11.4' type='text/css' media='all' />
<link rel='stylesheet' id='yith_wapo_frontend-css'  href='theme/yith-woocommerce-product-add-ons/assets/css/yith-wapo7fb9.css?ver=1.5.9' type='text/css' media='all' />
<style id='yith_wapo_frontend-inline-css' type='text/css'>

      .wapo_option_tooltip .yith_wccl_tooltip > span {
        background: #222222;
        color: #ffffff;
      }
      .wapo_option_tooltip .yith_wccl_tooltip.bottom span:after {
        border-bottom-color: #222222;
      }
      .wapo_option_tooltip .yith_wccl_tooltip.top span:after {
        border-top-color: #222222;
      }
</style>
<link rel='stylesheet' id='yith_wapo_frontend-colorpicker-css'  href='theme/yith-woocommerce-product-add-ons/assets/css/color-picker.min7fb9.css?ver=1.5.9' type='text/css' media='all' />
<link rel='stylesheet' id='kc-general-css'  href='theme/kingcomposer/assets/frontend/css/kingcomposer.mind537.css?ver=2.7.6' type='text/css' media='all' />
<link rel='stylesheet' id='kc-animate-css'  href='theme/kingcomposer/assets/css/animated537.css?ver=2.7.6' type='text/css' media='all' />
<link rel='stylesheet' id='kc-icon-1-css'  href='theme/kingcomposer/assets/css/iconsd537.css?ver=2.7.6' type='text/css' media='all' />
<link rel='stylesheet' id='jetpack_css-css'  href='theme/jetpack/css/jetpackb6a4.css?ver=6.6.1' type='text/css' media='all' />
<script type="text/template" id="tmpl-variation-template">
  <div class="woocommerce-variation-description">{{{ data.variation.variation_description }}}</div>
  <div class="woocommerce-variation-price">{{{ data.variation.price_html }}}</div>
  <div class="woocommerce-variation-availability">{{{ data.variation.availability_html }}}</div>
</script>
<script type="text/template" id="tmpl-unavailable-variation-template">
  <p>Sorry, this product is unavailable. Please choose a different combination.</p>
</script>

<script type='text/javascript' src='theme/wp-includes/js/jquery/jqueryb8ff.js?ver=1.12.4'></script>
<script type='text/javascript' src='theme/wp-includes/js/jquery/jquery-migrate.min330a.js?ver=1.4.1'></script>
<script type='text/javascript' src='theme/revslider/public/assets/js/jquery.themepunch.tools.min23da.js?ver=5.4.8'></script>
<script type='text/javascript' src='theme/revslider/public/assets/js/jquery.themepunch.revolution.min23da.js?ver=5.4.8'></script>
<script type='text/javascript' src='theme/woocommerce-quantity-increment/assets/js/wc-quantity-increment.mind8f3.js?ver=4.9.12'></script>
<link rel='https://api.w.org/' href='wp-json/index.html' />
<link rel="EditURI" type="application/rsd+xml" title="RSD" href="xmlrpc0db0.php?rsd" />
<link rel="wlwmanifest" type="application/wlwmanifest+xml" href="theme/wp-includes/wlwmanifest.xml" /> 
<script type="text/javascript">var kc_script_data={ajax_url:"wp-admin/admin-ajax.php"}</script>
<meta name="tec-api-version" content="v2">
<meta name="tec-api-origin" content="https://mackerelsolutions.com">

  <noscript><style>.woocommerce-product-gallery{ opacity: 1 !important; }</style></noscript>
  <meta name="generator" content="Dabbevala is here to give you maa ke hath ka khanna right at your doorstep." />

<!-- Jetpack Open Graph Tags -->
<meta property="og:type" content="website" />
<meta property="og:title" content="Dabbevala" />
<meta property="og:description" content="Dabbevala is here to give you maa ke hath ka khanna right at your doorstep." />
<meta property="og:url" content="http://dabbevala.com" />
<meta property="og:site_name" content="Dabbevala" />
<meta property="og:image" content="images/theme/ico1.png" />
<meta property="og:locale" content="en_US" />
<meta name="twitter:text:title" content="Home v2" />
<meta name="twitter:image" content="images/theme/ico1.png" />
<meta name="twitter:card" content="summary" />

<!-- End Jetpack Open Graph Tags -->
<link rel="icon" href="images/theme/ico1.png" sizes="32x32" />
<link rel="icon" href="images/theme/ico1.png" sizes="192x192" />
<link rel="apple-touch-icon-precomposed" href="images/theme/ico1.png" />
<meta name="msapplication-TileImage" content="images/theme/ico1.png" />
<script type="text/javascript">function setREVStartSize(e){                 
            try{ e.c=jQuery(e.c);var i=jQuery(window).width(),t=9999,r=0,n=0,l=0,f=0,s=0,h=0;
              if(e.responsiveLevels&&(jQuery.each(e.responsiveLevels,function(e,f){f>i&&(t=r=f,l=e),i>f&&f>r&&(r=f,n=e)}),t>r&&(l=n)),f=e.gridheight[l]||e.gridheight[0]||e.gridheight,s=e.gridwidth[l]||e.gridwidth[0]||e.gridwidth,h=i/s,h=h>1?1:h,f=Math.round(h*f),"fullscreen"==e.sliderLayout){var u=(e.c.width(),jQuery(window).height());if(void 0!=e.fullScreenOffsetContainer){var c=e.fullScreenOffsetContainer.split(",");if (c) jQuery.each(c,function(e,i){u=jQuery(i).length>0?u-jQuery(i).outerHeight(!0):u}),e.fullScreenOffset.split("%").length>1&&void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0?u-=jQuery(window).height()*parseInt(e.fullScreenOffset,0)/100:void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0&&(u-=parseInt(e.fullScreenOffset,0))}f=u}else void 0!=e.minHeight&&f<e.minHeight&&(f=e.minHeight);e.c.closest(".rev_slider_wrapper").css({height:f})          
            }catch(d){console.log("Failure at Presize of Slider:"+d)}           
          };</script>
<script type="text/javascript"></script><style type="text/css" id="kc-css-general">.kc-off-notice{display: inline-block !important;}.kc-container{max-width:1170px;}</style><style type="text/css" id="kc-css-render"></style><script async src='theme/s-201945.js'></script>





<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
  <script type="text/javascript" src="js/appinit.js"></script>
    <script type="text/javascript" src="js/appfunc.js"></script>
    <h2>Payment Being Processed</h2>
    <br/>
    <?php if($formError) { ?>
  
      <span style="color:red">Please fill all mandatory fields.</span>
      <br/>
      <br/>
    <?php } ?>
    <form  ng-app="dva" ng-controller="upay"  action="<?php echo $action; ?>" method="post" name="payuForm" >
      <input type="hidden" name="key" value="<?php echo $MERCHANT_KEY ?>" />
      <input type="hidden" name="hash" value="<?php echo $hash ?>"/>
      <input type="hidden" name="txnid" value="<?php echo $txnid ?>" />
      <table>
        <tr>
          <td><b>Mandatory Parameters</b></td>
        </tr>
        <tr>
          <td>Amount: </td>
          <td><input name="amount" value="{{np}}" /></td>
          <td>First Name: </td>
          <td><input name="firstname" id="firstname" value="<?php echo (empty($posted['firstname'])) ? '' : $posted['firstname']; ?>" /></td>
        </tr>
        <tr>
          <td>Email: </td>
          <td><input name="email" id="email" value="<?php echo (empty($posted['email'])) ? '' : $posted['email']; ?>" /></td>
          <td>Phone: </td>
          <td><input name="phone" value="<?php echo (empty($posted['phone'])) ? '' : $posted['phone']; ?>" /></td>
        </tr>
        <tr>
          <td>Product Info: </td>
          <td colspan="3"><textarea name="productinfo"><?php echo (empty($posted['productinfo'])) ? '' : $posted['productinfo'] ?></textarea></td>
        </tr>
        <tr>
          <td>Success URI: </td>
          <td colspan="3"><input name="surl" value="<?php echo (empty($posted['surl'])) ? '' : $posted['surl'] ?>" size="64" /></td>
        </tr>
        <tr>
          <td>Failure URI: </td>
          <td colspan="3"><input name="furl" value="<?php echo (empty($posted['furl'])) ? '' : $posted['furl'] ?>" size="64" /></td>
        </tr>

        <tr>
          <td colspan="3"><input type="hidden" name="service_provider" value="payu_paisa" size="64" /></td>
        </tr>

        <tr>
          <td><b>Optional Parameters</b></td>
        </tr>
        <tr>
          <td>Last Name: </td>
          <td><input name="lastname" id="lastname" value="<?php echo (empty($posted['lastname'])) ? '' : $posted['lastname']; ?>" /></td>
          <td>Cancel URI: </td>
          <td><input name="curl" value="" /></td>
        </tr>
        <tr>
          <td>Address1: </td>
          <td><input name="address1" value="<?php echo (empty($posted['address1'])) ? '' : $posted['address1']; ?>" /></td>
          <td>Address2: </td>
          <td><input name="address2" value="<?php echo (empty($posted['address2'])) ? '' : $posted['address2']; ?>" /></td>
        </tr>
        <tr>
          <td>City: </td>
          <td><input name="city" value="<?php echo (empty($posted['city'])) ? '' : $posted['city']; ?>" /></td>
          <td>State: </td>
          <td><input name="state" value="<?php echo (empty($posted['state'])) ? '' : $posted['state']; ?>" /></td>
        </tr>
        <tr>
          <td>Country: </td>
          <td><input name="country" value="<?php echo (empty($posted['country'])) ? '' : $posted['country']; ?>" /></td>
          <td>Zipcode: </td>
          <td><input name="zipcode" value="<?php echo (empty($posted['zipcode'])) ? '' : $posted['zipcode']; ?>" /></td>
        </tr>
        <tr>
          <td>UDF1: </td>
          <td><input name="udf1" value="<?php echo (empty($posted['udf1'])) ? '' : $posted['udf1']; ?>" /></td>
          <td>UDF2: </td>
          <td><input name="udf2" value="<?php echo (empty($posted['udf2'])) ? '' : $posted['udf2']; ?>" /></td>
        </tr>
        <tr>
          <td>UDF3: </td>
          <td><input name="udf3" value="<?php echo (empty($posted['udf3'])) ? '' : $posted['udf3']; ?>" /></td>
          <td>UDF4: </td>
          <td><input name="udf4" value="<?php echo (empty($posted['udf4'])) ? '' : $posted['udf4']; ?>" /></td>
        </tr>
        <tr>
          <td>UDF5: </td>
          <td><input name="udf5" value="<?php echo (empty($posted['udf5'])) ? '' : $posted['udf5']; ?>" /></td>
          <td>PG: </td>
          <td><input name="pg" value="<?php echo (empty($posted['pg'])) ? '' : $posted['pg']; ?>" /></td>
        </tr>
        <tr>
          <?php if(!$hash) { ?>
            <td colspan="4"><input type="submit" id="frmsubmit" value="Submit" /></td>
          <?php } ?>
        </tr>
      </table>
    </form>
    
<script type="text/javascript">
// document.getElementById("frmsubmit").click();
</script>


  </body>
</html>
