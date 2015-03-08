// Initialize
$(function(){
	initialize();
});

function initialize(){
	$.each(summary_data['attributes'], function( att, value ) {
		change_attribute(att, value['max'], value['min'], value['aug']);
	});

	$.each(summary_data['skills'], function( skill, value ) {
		set_skill(skill, value);
	});

	$.each(summary_data['skill_groups'], function( skill, value ) {
		set_skill_group(skill, value);
	});

	set_race(summary_data['race']);
};