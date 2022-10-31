$(document).ready(function(){
	$(document).scrollTop(0);
	$("#popup button").click(function(){
		$("#popup").fadeOut();
		$("body").css("overflow","auto");
	});
	
	//햄버거 아이콘 클릭
	$("header button").click(function(){
		$("#black").fadeIn("fast");
		$("nav").animate({left:0}, "slow");
	});
	
	//메뉴 항목을 클릭
	$("nav a").click(function() {
		$("#black").fadeOut("fast");
		$("nav").animate({left:"-61%"}, "slow");
	});
	//페이드 애니메이션 (자동기능)
	setInterval(fade, 1800); //1.8초 마다 함수를 트리거한다 
	let i = 2;
	function fade () {
		$("figure img").eq(i).fadeOut(1500);
		i--;
		if(i == -1){
			console.log( i == -1); //true
			$("figure img").fadeIn(1500);
			i=2;
		}
	}
	
	
	
	
});////////////////end