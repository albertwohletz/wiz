function generate_char_json(){
	$("#save").html(JSON.stringify(summary_data));
}

function load_char_json(){
	
}
//summary_data['skills'] = {
//	{% for skill in skills %}
//		'{{skill.name|lower|cut:" "}}':0,
//	{% endfor %}
//};
//
//var attributes={
//	'bod': {'base': 1, 'aug': 1, 'min': 1, 'max': 6},
//	'agi': {'base': 1, 'aug': 1, 'min': 1, 'max': 6},
//	'rea': {'base': 1, 'aug': 1, 'min': 1, 'max': 6},
//	'str': {'base': 1, 'aug': 1, 'min': 1, 'max': 6},
//	'cha': {'base': 1, 'aug': 1, 'min': 1, 'max': 6},
//	'int': {'base': 1, 'aug': 1, 'min': 1, 'max': 6},
//	'log': {'base': 1, 'aug': 1, 'min': 1, 'max': 6},
//	'wil': {'base': 1, 'aug': 1, 'min': 1, 'max': 6},
//	'edg': {'base': 1, 'aug': 1, 'min': 1, 'max': 6},
//	'mag': {'base': 0, 'aug': 0, 'min': 0, 'max': 0},
//	'res': {'base': 0, 'aug': 0, 'min': 0, 'max': 0},
//	'ini': {'base': 0, 'aug': 0, 'min': 0, 'max': 0},
//	'ess': {'base': 6, 'aug': 0, 'min': 0, 'max': 6}
//};
//
//var modifiers = [
//];
//
//var summary_data={
//	'priorities_spent': 0,
//	'priorities_available': 16,
//	'attributes_spent': 0,
//	'attributes_available': 16,
//	'special_attributes_spent': 0,
//	'special_attributes_available': 1,
//	'skills_spent': 0,
//	'skills_available': 16,
//	'skill_groups_spent': 0,
//	'skill_groups_available': 10,
//	'karma': 25,
//	'attributes': attributes,
//	'qualities': [],
//	'race': '',
//	'magic': {'mag': 0, 'res': 0},
//	'nuyen': 6000,
//	'essence': 6
//};//