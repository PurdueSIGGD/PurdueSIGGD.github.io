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

$("youtube").each(function()
    {
        var id = $(this).text();
        $(this).replaceWith('<iframe class=\"youtube-player\" type=\"text\/html\" width=\"640\" height=\"385\" src=\"http://www.youtube.com/embed/' + id +'?html5=1\" allowfullscreen frameborder=\"0\"></iframe>');
    }
);