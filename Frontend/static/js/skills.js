$(function(){
	$('.skill-group').popover({ trigger: "hover" });
	$('.skill-spinner').spinner({
		min: 0,
		max: 6,
		start: 0,
		spin: function( event, ui ) {
			set_skill($(this).attr('id'), ui.value);

			var sum = 0;

			update_skill_summaries();
      	}
	});
	$('.skill-karma-spinner').spinner();

	$(".group-karma-spinner").spinner();

	$(".group-spinner").spinner({
		min: 0,
		max: 6,
		start: 0,
		spin: function( event, ui ) {
			var group = $(this).attr('id');
			set_skill_group(group, ui.value); 

			update_skill_summaries();
      	}
	});

	$('.specialization').click(function(){
		var button_id = '#' + $(this).attr('button');
		var button = $(button_id);

		// Check if valid to activate specialization
		var skillname = button_id.split('spec-button-')[1];
		if (summary_data['skills'][skillname] == 0){
			alert('Cannot add specialization until you put ranks into the skill');
		} else if (skill_to_group[skillname] && summary_data['skill_groups'][skill_to_group[skillname]] > 0){
			alert("Cannot add specialization if it's a part of a skill group");
		} else {
			button.html($(this).attr('value')+'<span class="caret"></span>');
			button.addClass('selected-specialization');
			update_skill_summaries();			
		}
	});
});

function set_skill_group(group, value){
	for (i in group_to_skill[group]){
		$('#spec-button-' + group_to_skill[group][i]).html('Specialization<span class="caret"></span>');
		$('#spec-button-' + group_to_skill[group][i]).removeClass('selected-specialization');

		set_skill(group_to_skill[group][i], value);
	}
	summary_data['skill_groups'][group] = value;
}

function set_skill(skill, value){
	summary_data['skills'][skill] = value;

	// Get New Values
	var spinner = $('#'+skill);
	spinner.spinner().spinner('value', value);

	// Update Total
	att = get_attribute(skill);
	$('#total-'+skill).html(summary_data['attributes'][att]['aug'] + value);
}

function get_attribute(skill){
	return skills_to_attribute[skill];
}

function update_skills(){
	for (skill_name in summary_data['skills']){
		set_skill(skill_name, summary_data['skills'][skill_name]);
	}
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