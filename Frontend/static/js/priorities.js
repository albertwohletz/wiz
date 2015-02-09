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

	// Click new meta
	$('.meta').click(function(){
		if ($(this).hasClass('disabled')) {
			return;
		}

		// Remove Stats from old meta
		old = $('.meta>class:active')
		if (old.hasClass('meta-human')) {

		} else if (old.hasClass('meta-elf')) {
			increment_base('agi', -2)
			increment_base('cha', -2)
		} else if (old.hasClass('meta-dwarf')) {
			increment_base('bod', -2)
			increment_base('str', -2)
			increment_base('wil', -1)
			increment_base('rea', 1)
		} else if (old.hasClass('meta-ork')) {

		} else if (old.hasClass('meta-troll')) {

		}

		// Activate button
		$('.meta').removeClass('active')
		$(this).addClass('active')
	});
});