$(function(){
	// Add
	$('.nav-add-quality').click(function(){
		karma = $('.quality-item.active').val();
		quality_name = $('.quality-item.active').html();
		add_quality(quality_name, karma);
	});
	$('.remove-qualities').click(function(){
		var active = $('.attached-quality.active');
		if (active.length > 0){
			id = active.attr('id').split('quality')[1];
			$('.attached-quality.active').addClass('hidden');
			$('.attached-quality.active').removeClass('active');
			remove_quality(id);
		}
	});
	

});
$(document).on("click",".attached-quality", function(e){
	$('.attached-quality.active').removeClass('active');
	$(this).addClass('active');
});