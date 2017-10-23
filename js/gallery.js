$(document).ready(function(){

	$(".gallery").find("li").hover(function(){
		$(this).addClass("opp").stop().animate({"opacity": "0.7"}, 600 );
	},function(){
		$(this).removeClass("opp").stop().animate({"opacity": "1"}, 600);
	});


	$(".gallery").find("li").click(function(){
		$(".poz").show();
		$(".vel").show();

		$src = $(this).find("img").attr("src");
		$alt = $(this).find("img").attr("alt");
		
		$(".vel").html('<p class="pslik">'+ $alt +'</p><img class="slik" src = "'+ $src +'" alt="'+ $alt +'">');
		
	});

	$(".poz").click(function(){
		$(this).hide();
		$(".vel").hide();
		
	});


});