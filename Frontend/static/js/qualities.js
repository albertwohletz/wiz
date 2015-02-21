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

function add_quality(name, karma){
	length = summary_data['qualities'].length;
	summary_data['qualities'][length] = {'name': name, 'karma': karma};
	modify_summary_data('karma', -1*karma);

	return $('.active-qualities-list').html($('.active-qualities-list').html()+"<li id=quality" + length + " class='list-group-item attached-quality'>"+name+"</li>");
}

function remove_quality(id){
	karma = summary_data["qualities"][id]['karma'];
	summary_data["qualities"][id] = {};
	$('.quality').addClass('hidden');
	modify_summary_data('karma', karma);
}

