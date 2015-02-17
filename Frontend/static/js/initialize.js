// Initialize
$(function(){

	for (att in attributes){
		increment_base(att, 0);
	}
	$('#edg').spinner().spinner({'min': 1, 'value': 1});
	set_race('human');
});