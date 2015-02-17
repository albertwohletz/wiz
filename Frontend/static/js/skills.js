$(function(){
	$('.skill-group').popover({ trigger: "hover" });
	$( ".skill-spinner" ).spinner({
		min: 1,
		max: 6,
		start: 1,
		spin: function( event, ui ) {
			sum=0;
			update_skills('skills_spent', sum);
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
			for (a in group_to_skill[group]){
				alert(group_to_skill[group][a]);
			}
	
			update_skills('skill_groups_spent', sum);
      	}
	});
});

var skill_to_group = {
	'con': 'acting',
	'impersonation': 'acting',
	'performance': 'acting',
	'gymnastics': 'athletics',
	'running': 'athletics',
	'swimming': 'athletics',
	'cybertechnology': 'biotech',
	'first aid': 'biotech',
	'medicine': 'biotech',
	'blades': 'closecombat',
	'clubs': 'closecombat',
	'unarmed combat': 'closecombat',
	'banishing': 'conjouring',
	'binding': 'conjouring',
	'summoning': 'conjouring',
	'cybercombat': 'cracking',
	'electronic warfare': 'cracking',
	'hacking': 'cracking',
	'computer': 'electronics',
	'hardware': 'electronics',
	'software': 'electronics',
	'alchemy': 'enchanting',
	'artificing': 'enchanting',
	'disenchanting': 'enchanting',
	'aeronautics mechanic': 'engineering',
	'automotive mechanic': 'engineering',
	'industrial mechanic': 'engineering',
	'nautical mechanic': 'engineering',
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
	'ritual spellcasting': 'sorcery',
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
	'biotech': [ 'cybertechnology', 'first aid', 'medicine', ],
	'closecombat': [ 'blades', 'clubs', 'unarmed combat', ],
	'conjouring': [ 'banishing', 'binding', 'summoning', ],
	'cracking': [ 'cybercombat', 'electronic warfare', 'hacking', ],
	'electronics': [ 'computer', 'hardware', 'software', ],
	'enchanting': [ 'alchemy', 'artificing', 'disenchanting', ],
	'engineering': [ 'aeronautics mechanic', 'automotive mechanic', 'industrial mechanic', 'nautical mechanic', ],
	'firearms': [ 'automatics', 'longarms', 'pistols', ],
	'influence': [ 'etiquette', 'leadership', 'negotiation', ],
	'outdoors': [ 'navigation', 'survival', 'tracking', ],
	'sorcery': [ 'counterspelling', 'ritual spellcasting', 'spellcasting', ],
	'stealth': [ 'disguise', 'palming', 'sneaking', ],
	'tasking': [ 'compiling', 'decompiling', 'registering', ],
};