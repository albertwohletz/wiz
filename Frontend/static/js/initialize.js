// Initialize
$(function(){
	for (att in attributes){
		change_attribute(att, attributes[att]['max'], attributes[att]['min'], attributes[att]['aug']);
	}
	
	set_race('human');
});