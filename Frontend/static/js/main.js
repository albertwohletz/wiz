/**
 * Created by albertlwohletz on 2/7/15.
 */

// Init JQuery Elements
$(function() {
    $( ".resizable" ).resizable();

    // Overlay close button
    $('.close-button').click(function() {
    	$(this).parent().hide();
	});
});

$(function(){
	// Qualities Functios
	$('.add-qualities').click(function(){
		$('.qualities').show();
	});
	$('.quality-item').click(function(e){
		desc = 'Karma: ' + $( this ).val() + '</br>' + $( this ).attr('description')
		$('.quality-description').html(desc);
		$('.quality-item').removeClass('active');
		$(this).addClass('active');
	});	
});


function update_attributes(key, value){
	summary_data[key] = value;
	$('#summary-primary-attributes').html(summary_data['attributes_spent'] + ' of ' + summary_data['attributes_available']);

	if (summary_data['attributes_spent'] > summary_data['attributes_available']){
		$('#summary-primary-attributes').parent().addClass('danger');		
		$('#summary-primary-attributes').parent().removeClass('success');		
	} else if (summary_data['attributes_spent'] == summary_data['attributes_available']) {
		$('#summary-primary-attributes').parent().addClass('success');		
		$('#summary-primary-attributes').parent().removeClass('danger');		
	} else {
		$('#summary-primary-attributes').parent().removeClass('danger');		
		$('#summary-primary-attributes').parent().removeClass('success');
	}
}

function update_special_attributes(){
	summary_data['special_attributes_spent'] = summary_data['attributes']['edg']['base'] + summary_data['attributes']['res']['base'] + summary_data['attributes']['mag']['base'] - summary_data['attributes']['edg']['min'] - summary_data['attributes']['res']['min'] - summary_data['attributes']['mag']['min'];

	$('#summary-special-attributes').html(summary_data['special_attributes_spent'] + ' of ' + summary_data['special_attributes_available']);

	if (summary_data['special_attributes_spent'] > summary_data['special_attributes_available']){
		$('#summary-special-attributes').parent().addClass('danger');		
		$('#summary-special-attributes').parent().removeClass('success');		
	} else if (summary_data['special_attributes_spent'] == summary_data['special_attributes_available']) {
		$('#summary-special-attributes').parent().addClass('success');		
		$('#summary-special-attributes').parent().removeClass('danger');		
	} else {
		$('#summary-special-attributes').parent().removeClass('danger');		
		$('#summary-special-attributes').parent().removeClass('success');
	}
}

function update_skill_summaries(){
	summary_data['skills_spent'] = 0;
	summary_data['skill_groups_spent'] = 0;

	// Factor in Skills
	for (name in summary_data['skills']){
		summary_data['skills_spent'] += summary_data['skills'][name];
	}

	// Factor in Groups
	for (name in summary_data['skill_groups']){
		var num_skills_in_group = group_to_skill[name].length;
		summary_data['skills_spent'] -= summary_data['skill_groups'][name] * num_skills_in_group;
		summary_data['skill_groups_spent'] += summary_data['skill_groups'][name];
	}

	// Add Specialization Cost
	summary_data['skills_spent'] += $('.dropdown-toggle.selected-specialization').length;

	$('#summary-skills').html(summary_data['skills_spent'] + ' of ' + summary_data['skills_available']);
	$('#summary-groups').html(summary_data['skill_groups_spent'] + ' of ' + summary_data['skill_groups_available']);

	if (summary_data['skills_spent'] > summary_data['attributes_available']){
		$('#summary-skills').parent().addClass('danger');		
		$('#summary-skills').parent().removeClass('success');	
	} else if (summary_data['skills_spent'] == summary_data['attributes_available']){
		$('#summary-skills').parent().addClass('success');		
		$('#summary-skills').parent().removeClass('danger');	
	} else {
		$('#summary-skills').parent().removeClass('danger');	
		$('#summary-skills').parent().removeClass('success');	
	}

	if (summary_data['skill_groups_spent'] > summary_data['skill_groups_available']){
		$('#summary-groups').parent().addClass('danger');		
	} else {
		$('#summary-groups').parent().removeClass('danger');	
	}
}

function modify_essence(delta){
	before_int = parseInt(summary_data['attributes']['ess']['base']);
	summary_data['attributes']['ess']['base'] += delta;
	summary_data['attributes']['ess']['min'] += delta;
	summary_data['attributes']['ess']['max'] += delta;
	if (summary_data['attributes']['ess']['min'] < 0){
		summary_data['attributes']['ess']['min'] = 0;
	}
	after_int = parseInt(summary_data['attributes']['ess']['base']);
	dif = before_int - after_int;
	if (dif < 0){
		attribute_delta('mag', dif);
		attribute_delta('res', dif);
	}
	set_summary_data('essence', summary_data['attributes']['ess']['base']);
}

function apply_essence_to_mag(){
	// nothing for now
}

// 
function attribute_delta(attribute_name, delta){
	set_attribute(attribute_name, summary_data['attributes'][attribute_name]['base'] + delta);
}

// Sets attribute to value
function set_attribute(attribute_name, value){
	summary_data['attributes'][attribute_name]['base'] = value;
	validate_attributes(attribute_name);
}

// Update max/min/aug max
function change_attribute(attribute_name, max, min, aug){
	dif =  parseInt(min) - summary_data['attributes'][attribute_name]['min'];
	summary_data['attributes'][attribute_name]['base'] += dif
	summary_data['attributes'][attribute_name]['min'] = parseInt(min);
	summary_data['attributes'][attribute_name]['max'] = parseInt(max);
	summary_data['attributes'][attribute_name]['aug'] = parseInt(aug);

	// Update Spinners
	validate_attributes(attribute_name);
}

function validate_attributes(attribute_name){
	if (summary_data['attributes'][attribute_name]['base'] < summary_data['attributes'][attribute_name]['min']) {
		summary_data['attributes'][attribute_name]['base'] = summary_data['attributes'][attribute_name]['min'];
	} else if (summary_data['attributes'][attribute_name]['base'] > summary_data['attributes'][attribute_name]['max']) {
		summary_data['attributes'][attribute_name]['base'] = summary_data['attributes'][attribute_name]['min'];
	}
	update_attribute_display(attribute_name);
	update_skills();
}

function update_attribute_display(attribute_name){
	// Get New Values
	var spinner = $('#'+attribute_name);

	// Make sure not negative/zero
	attribute = summary_data['attributes'][attribute_name];

	// New Values
	spinner.spinner().spinner({'min': attribute['min'], 'max': attribute['max']});
	spinner.spinner().spinner('value', attribute['base']);

	// Update limits page
	$('.'+attribute_name+'-val').html(attribute['base']);
	$('.'+attribute_name+'-limit').html(attribute['max']+'('+(attribute['max']+4)+')');
}

//// Summary Data ////
function set_summary_data(key, value){
	delta = value - summary_data[key];
	modify_summary_data(key, delta);
}

// Modifies summary data like nuyen remaining etc.
function modify_summary_data(key, delta){
	summary_data[key] += Number(delta);

	var html_element = $('#summary-'+key);

	// Set html element to show new value
	html_element.html(summary_data[key]);

	// Update Color
	if (summary_data[key] > 0) {
		html_element.parent().removeClass('danger');
		html_element.parent().removeClass('success');
	} else if (summary_data[key] == 0){
		html_element.parent().removeClass('danger');
		html_element.parent().addClass('success');
	} else {
		html_element.parent().addClass('danger');
		html_element.parent().removeClass('success');
	}
}

