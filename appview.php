<?php $color="#263238"; ?>
<div class="mainbody">
	<img src="wp-content/uploads/ico1.png">
</div>

<style type="text/css">
	.mainbody{
		background-color: <?php echo $color;?>;
		min-width: 100%;

    background-size: cover;
    min-height: 100%;

	}
	body{
		margin:0;
	}

	img {
   		position: absolute;
   top: 50%;
   left: 50%;
   width: 500px;
   height: 500px;
   margin-top: -250px; /* Half the height */
   margin-left: -250px; /* Half the width */

   }
</style>