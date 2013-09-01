var flag = 0;
$('.email').hover(function(){
	if(flag == 0){
		$('.email').text($('.email').text().split("").reverse().join(""));
		$('.email').css("direction","ltr");
		flag = 1;
	}
},function(){
	//no out-hover
});

$('.email').hover(function(){
	if(flag == 0){
		$('.email').text($('.email').text().split("").reverse().join(""));
		$('.email').css("direction","ltr");
		flag = 1;
	}
});