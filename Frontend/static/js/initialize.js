// Initialize
$(function(){
	for (att in attributes){
		change_attribute(att, attributes[att]);
	}
	
	set_race('human');
});