$(function(){
	$('.skill-group').popover({ trigger: "hover" });
	$( ".skill-spinner" ).spinner({
		min: 0,
		max: 6,
		start: 0,
		spin: function( event, ui ) {
			summary_data['skills'][$(this).attr('id')] = ui.value;
      	}
	});

	$( ".group-karma-spinner").spinner();

	$( ".group-spinner" ).spinner({
		min: 0,
		max: 6,
		start: 0,
		spin: function( event, ui ) {
			sum=0;
			var group = $(this).attr('id');
			set_skill_group(group, ui.value);
			//update_skills('skill_groups_spent', sum);
      	}
	});
});

function set_skill_group(group, value){
	// check all numbers same
	var problem = false;
	var first = summary_data['skills'][group_to_skill[group][0]];
	for (i in group_to_skill[group]){
		if (first != summary_data['skills'][group_to_skill[group][i]]){
			problem = true;
			break;
		}
	}

	if (problem){
		alert('You cannot add a skill group if one of the prequisite skills has ranks.');
	} else {
		for (i in group_to_skill[group]){
			set_skill(group_to_skill[group][i], value);
		}
	}
}

function set_skill(skill, value){
	summary_data['skills'][skill] = value;

	// Get New Values
	var spinner = $('#'+id);
	spinner.spinner().spinner('value', value);
}

var skill_to_group = {
	'con': 'acting',
	'impersonation': 'acting',
	'performance': 'acting',
	'gymnastics': 'athletics',
	'running': 'athletics',
	'swimming': 'athletics',
	'cybertechnology': 'biotech',
	'firstaid': 'biotech',
	'medicine': 'biotech',
	'blades': 'closecombat',
	'clubs': 'closecombat',
	'unarmedcombat': 'closecombat',
	'banishing': 'conjouring',
	'binding': 'conjouring',
	'summoning': 'conjouring',
	'cybercombat': 'cracking',
	'electronicwarfare': 'cracking',
	'hacking': 'cracking',
	'computer': 'electronics',
	'hardware': 'electronics',
	'software': 'electronics',
	'alchemy': 'enchanting',
	'artificing': 'enchanting',
	'disenchanting': 'enchanting',
	'aeronauticsmechanic': 'engineering',
	'automotivemechanic': 'engineering',
	'industrialmechanic': 'engineering',
	'nauticalmechanic': 'engineering',
	'automatics': 'firearms',
	'longarms': 'firearms',
	'pistols': 'firearms',
	'etiquette': 'influence',
	'leadership': 'influence',
	'negotiation': 'influence',
	'navigation': 'outdoors',
	'survival': 'outdoors',
	'tracking': 'outdoors',
	'counterspelling': 'sorcery',
	'ritualspellcasting': 'sorcery',
	'spellcasting': 'sorcery',
	'disguise': 'stealth',
	'palming': 'stealth',
	'sneaking': 'stealth',
	'compiling': 'tasking',
	'decompiling': 'tasking',
	'registering': 'tasking',
};

var group_to_skill = { 
	'acting': [ 'con', 'impersonation', 'performance', ],
	'athletics': [ 'gymnastics', 'running', 'swimming', ],
	'biotech': [ 'cybertechnology', 'firstaid', 'medicine', ],
	'closecombat': [ 'blades', 'clubs', 'unarmed combat', ],
	'conjouring': [ 'banishing', 'binding', 'summoning', ],
	'cracking': [ 'cybercombat', 'electronicwarfare', 'hacking', ],
	'electronics': [ 'computer', 'hardware', 'software', ],
	'enchanting': [ 'alchemy', 'artificing', 'disenchanting', ],
	'engineering': [ 'aeronauticsmechanic', 'automotivemechanic', 'industrialmechanic', 'nauticalmechanic', ],
	'firearms': [ 'automatics', 'longarms', 'pistols', ],
	'influence': [ 'etiquette', 'leadership', 'negotiation', ],
	'outdoors': [ 'navigation', 'survival', 'tracking', ],
	'sorcery': [ 'counterspelling', 'ritualspellcasting', 'spellcasting', ],
	'stealth': [ 'disguise', 'palming', 'sneaking', ],
	'tasking': [ 'compiling', 'decompiling', 'registering', ],
};