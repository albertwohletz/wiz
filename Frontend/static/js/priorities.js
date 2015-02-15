// Priorities click handlers
$(function(){
	$('.meta').popover({ trigger: "hover" });
	$('.magic-type').popover({ trigger: "hover" });

	$(".priority").change(function(){
		var sum = 0
		$('.priority>option:selected').each(function(){ 
			sum += parseInt($(this).attr('index')); 
		});

		$('#summary-priorities').html(sum + ' of 10')

		if (sum == 10){
			$('#summary-priorities').parent().addClass('success');
			$('#summary-priorities').parent().removeClass('danger');			
		} else if (sum > 10){
			$('#summary-priorities').parent().addClass('danger');	
			$('#summary-priorities').parent().removeClass('success');			
		} else {
			$('#summary-priorities').parent().removeClass('danger');	
			$('#summary-priorities').parent().removeClass('success');				
		}
	});
	$('#priority-metatype').change(function() {
		var index = $('#priority-metatype>option:selected').attr('index');

		// Show/Hide Valid Metatypes
		if (index >= 3){
			$('.meta').removeClass('disabled') // All Valid
		} else if (index == 2){
			// No Troll
			$('.meta').removeClass('disabled') 
			$('.meta-troll').addClass('disabled')
		}  else if (index == 1){
			// Only human and elf.
			$('.meta').addClass('disabled') 
			$('.meta-human').removeClass('disabled') 
			$('.meta-elf').removeClass('disabled') 
		} else {
			// Only human chummer.
			$('.meta').addClass('disabled') 
			$('.meta-human').removeClass('disabled') 
		}

		// If existing choice invalid, change to human
		if ($('.meta.active').hasClass('disabled')){
			$('.meta.active').removeClass('active');
			$('.meta-human').addClass('active');
			set_race('human');
		}

		summary_data['special_attributes_available'] = race_values[index][summary_data['race']];
		$('#summary-special-attributes').html(summary_data['special_attributes_spent'] + ' of ' + summary_data['special_attributes_available']);
	});	

	$('#priority-attributes').change(function() {
		update_attributes('attributes_available', $(this).val());
	});	
	$('#priority-skills').change(function() {
		var val = $(this).val()
		update_skills('skills_available', val.split('/')[0]);
		update_skills('skill_groups_available', val.split('/')[1]);
	});

	$('#priority-magic').change(function() {
		var index = $('#priority-magic>option:selected').attr('index');

		// Show/Hide Valid Metatypes
		if (index == 4){
			// Magician, Mystic Adept, Technomancer
			$('.magic-type').addClass('disabled');
			$('.type-magician').removeClass('disabled');
			$('.type-mystic-adept').removeClass('disabled');
			$('.type-technomancer').removeClass('disabled');
			$('.type-magician').attr('data-content', 'Magic 6, two Rating 5 Magical skills, 10 spells');
			$('.type-mystic-adept').attr('data-content', 'Magic 6, two Rating 5 Magical skills, 10 spells');
			$('.type-technomancer').attr('data-content', 'Resonance 6, two Rating 5 Resonance skills, 5 complex forms');
			$('.type-adept').attr('data-content', '');
			$('.type-aspected-magician').attr('data-content', '');
		} else if (index == 3){
			// Any
			$('.magic-type').removeClass('disabled');
			$('.type-magician').attr('data-content', 'Magic 4, two Rating 4 Magical skills, 7 spells');
			$('.type-mystic-adept').attr('data-content', 'Magic 4, two Rating 4 Magical skills, 7 spells');
			$('.type-technomancer').attr('data-content', 'Resonance 4, two Rating 4 Resonance skills, 2 complex forms');
			$('.type-adept').attr('data-content', 'Magic 6, one Rating 4 Active skill');
			$('.type-aspected-magician').attr('data-content', 'Magic 5, one Rating 4 Magical skill group');
			
		} else if (index == 2){
			// Any
			$('.magic-type').removeClass('disabled');

			$('.type-magician').attr('data-content', 'Magic 3, 5 spells');
			$('.type-mystic-adept').attr('data-content', 'Magic 3, 5 spells');
			$('.type-technomancer').attr('data-content', 'Resonance 3, 1 complex form');
			$('.type-adept').attr('data-content', 'Magic 4, one Rating 2 Active skill');
			$('.type-aspected-magician').attr('data-content', 'Magic 3, one Rating 2 Magical skill group');
		} else if (index == 1){
			// Adept+Aspected Magician
			$('.magic-type').addClass('disabled') 
			$('.type-adept').removeClass('disabled') 
			$('.type-aspected-magician').removeClass('disabled') 


			$('.type-magician').attr('data-content', '');
			$('.type-mystic-adept').attr('data-content', '');
			$('.type-technomancer').attr('data-content', '');
			$('.type-adept').attr('data-content', 'Magic 2');
			$('.type-aspected-magician').attr('data-content', 'Magic 2');
		} else {
			// At least they won't geek you first
			$('.magic-type').addClass('disabled') 
			$('.magic-none').removeClass('disabled') 

			$('.type-magician').attr('data-content', '');
			$('.type-mystic-adept').attr('data-content', '');
			$('.type-technomancer').attr('data-content', '');
			$('.type-adept').attr('data-content', '');
			$('.type-aspected-magician').attr('data-content', '');
		}
	});	
	// Magic type toggle
	$('.magic-type').click(function(){
		$('.magic-type.active').removeClass('active');
		$(this).addClass('active');
		var index = $('#priority-magic>option:selected').attr('index');
		set_magic(index, $(this).val())

	});

	// Click new meta
	$('.meta').click(function(){
		if ($(this).hasClass('disabled')) {
			return;
		}
		$('.meta.active').removeClass('active');
		$(this).addClass('active');
		set_race($(this).val());
	});

	$('#priority-resources').change(function(){
		set_nuyen($(this).val())
	});
});

var magic_values = [{
		"magician": {'mag': 0, 'res': 0},
		"adept": {'mag': 0, 'res': 0},
		"mystic-adept": {'mag': 0, 'res': 0},
		"aspected-magician": {'mag': 0, 'res': 0},
		"technomancer": {'mag': 0, 'res': 0},
		"none": {'mag': 0, 'res': 0}
	}, {
		"magician": {'mag': 0, 'res': 0},
		"adept": {'mag': 2, 'res': 0},
		"mystic-adept": {'mag': 0, 'res': 0},
		"aspected-magician": {'mag': 2, 'res': 0},
		"technomancer": {'mag': 0, 'res': 0},
		"none": {'mag': 0, 'res': 0}
	}, {
		"magician": {'mag': 3, 'res': 0},
		"adept": {'mag': 4, 'res': 0},
		"mystic-adept": {'mag': 3, 'res': 0},
		"aspected-magician": {'mag': 3, 'res': 0},
		"technomancer": {'mag': 0, 'res': 3},
		"none": {'mag': 0, 'res': 0}
	}, {
		"magician": {'mag': 4, 'res': 0},
		"adept": {'mag': 6, 'res': 0},
		"mystic-adept": {'mag': 4, 'res': 0},
		"aspected-magician": {'mag': 5, 'res': 0},
		"technomancer": {'mag': 0, 'res': 4},
		"none": {'mag': 0, 'res': 0}
	}, {
		"magician": {'mag': 6, 'res': 0},
		"adept": {'mag': 0, 'res': 0},
		"mystic-adept": {'mag': 6, 'res': 0},
		"aspected-magician": {'mag': 0, 'res': 0},
		"technomancer": {'mag': 0, 'res': 6},
		"none": {'mag': 0, 'res': 0}
	}
];

function set_magic(index, name){
	// Remove Old
	for (attribute in summary_data['magic']){
		increment_base(attribute, summary_data['magic'][attribute]);
	}	
	// Add new
	var magic = magic_values[index][name];
	for (attribute in magic){
		increment_base(attribute, magic[attribute]);
	}
	summary_data['magic'] = magic;
}

var race_values = [{
		"human": 1,
	}, {
		"human": 3,
		"elf": 0,
	}, { 
		"human": 5,
		"elf": 3,
		"dwarf": 1,
		"ork": 0
	}, {
		"human": 7,
		"elf": 6,
		"dwarf": 4,
		"ork": 4,
		"troll": 0
	}, {
		"human": 9,
		"elf": 8,
		"dwarf": 7,
		"ork": 7,
		"troll": 5
	}
];

var races = {
	'human': {'edg': 1},
	'elf': {'agi': 1, 'cha': 2},
	'dwarf': {'bod': 2, 'str': 2, 'wil': 1, 'rea': -1},
	'ork': {'bod': 3, 'str': 2, 'log': -1, 'cha': -1},
	'troll': {'bod': 4, 'str': 4, 'agi': -1, 'int': -1, 'log': -1, 'cha': -2}
}

// Swap Races
function set_race(race_name){
	remove_race();
	summary_data['race'] = race_name;

	for (attribute in races[race_name]){
		increment_base(attribute, races[race_name][attribute]);
	}

	var index = $('#priority-metatype>option:selected').attr('index');
	summary_data['special_attributes_available'] = race_values[index][race_name];
	$('#summary-special-attributes').html(summary_data['special_attributes_spent'] + ' of ' + summary_data['special_attributes_available']);
}

function remove_race(){
	race_name = summary_data['race']
	for (attribute in races[race_name]){
		increment_base(attribute, -1 * races[race_name][attribute]);
	}
}

var old_nuyen = 6000;
function set_nuyen(nuyen){
	modify_summary_data('nuyen', nuyen - old_nuyen);
	old_nuyen = nuyen;
}