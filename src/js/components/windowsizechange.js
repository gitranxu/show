
$(window).resize(function(){
	//console.log()
	var d_width = $(document).width();
	if(d_width>=1247){
		$(document.body).addClass('w1200').removeClass('w1024');
	}else{ //小于1247的时候，就加上w1024的类名
		$(document.body).removeClass('w1200').addClass('w1024');
	}
});