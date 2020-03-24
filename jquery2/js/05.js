$(function(){
	$(".content>button").click(function(){
		$(this).stop().fadeOut(100)
		var w=$(".scrollBar").width()
		var timer =setInterval(function(){
			w = w-1
			$(".scrollBar").css({
				width:w
			})
			if (w<=0) {
				clearInterval(timer)
				$(".mask").stop().fadeIn()
			}
			
		},5)
		wolfAnimat()
	})
	$(".mask>button").click(function(){
		$(".mask").stop().fadeOut(100)
		$(".content>button").stop().fadeIn(100)
		$(".scrollBar").css({
			width:240
		})
	})
	function wolfAnimat(){
		var wolf_1=['./img/h1.jpg']
		var wolf_2=["./img/x1.jpg"]
		var arrPos=[
			{left:"100px",top:"115px"},
			{left:"20px",top:"160px"},
			{left:"190px",top:"142px"},
			{left:"105px",top:"193px"},
			{left:"19px",top:"221px"},
			
		]
		var posIndex =Math.round(Math.random()*5)
		var  $wolfImage=$("<img src=''>")
		var wolfType =Math.round(Math.random())==0?wolf_1:wolf_2
		$wolfImage.css({
			position:"absolute",
			left:arrPos[posIndex].left,
			top:arrPos[posIndex].top
		})
		$wolfImage.attr("src",wolfType[0])
		$(".content").append($wolfImage)
	}
	
})
