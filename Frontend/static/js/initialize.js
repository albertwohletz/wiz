// Initialize
$(function(){
	initialize();
});

function initialize(){
	all_attributes.forEach(function(att, index, array){
		change_attribute(att, summary_data['attributes'][att]['max'], summary_data['attributes'][att]['min'], summary_data['attributes'][att]['aug']);
	});
	
	set_race('human');
};