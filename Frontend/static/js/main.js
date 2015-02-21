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

var attributes={
	'bod': {'base': 1, 'aug': 1, 'min': 1, 'max': 6},
	'agi': {'base': 1, 'aug': 1, 'min': 1, 'max': 6},
	'rea': {'base': 1, 'aug': 1, 'min': 1, 'max': 6},
	'str': {'base': 1, 'aug': 1, 'min': 1, 'max': 6},
	'cha': {'base': 1, 'aug': 1, 'min': 1, 'max': 6},
	'int': {'base': 1, 'aug': 1, 'min': 1, 'max': 6},
	'log': {'base': 1, 'aug': 1, 'min': 1, 'max': 6},
	'wil': {'base': 1, 'aug': 1, 'min': 1, 'max': 6},
	'edg': {'base': 1, 'aug': 1, 'min': 1, 'max': 6},
	'mag': {'base': 0, 'aug': 0, 'min': 1, 'max': 0},
	'res': {'base': 0, 'aug': 0, 'min': 1, 'max': 0}
}

var summary_data={
	'priorities_spent': 0,
	'priorities_available': 16,
	'attributes_spent': 0,
	'attributes_available': 16,
	'special_attributes_spent': 0,
	'special_attributes_available': 1,
	'skills_spent': 0,
	'skills_available': 16,
	'skill_groups_spent': 0,
	'skill_groups_available': 10,
	'karma': 25,
	'attributes': attributes,
	'qualities': [],
	'race': '',
	'magic': {'mag': 0, 'res': 0},
	'nuyen': 6000
}



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
	summary_data['special_attributes_spent'] = 0;
	$('.special-spinner').each(function(){
		summary_data['special_attributes_spent'] += parseInt($(this).attr('aria-valuenow') - $(this).attr('aria-valuemin'));
	});

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

function get_data(key){
	return data[key];
}

function get_attribute(key){
	return attributes[key];
}
function set_attribute(key, value){
	attributes[key]['base'] = value;
	attributes[key]['aug'] = attributes[key]['base'];
	$('.'+key+'-val').html(value);
	update_skills();
}

function increment_base(key, value){
	attributes[key]['base'] += value;
	attributes[key]['min'] += value;
	if (attributes[key]['base'] <= attributes[key]['min']) {
		attributes[key]['base'] = attributes[key]['min'];
	}
	attributes[key]['aug'] = attributes[key]['base'];
	$('.'+key+'-val').html(attributes[key]['base']);

	// Update Spinners
	update_attributes();
	update_skills();
}


function update_attribute_display(attribute_name){
	// Get New Values
	var spinner = $('#'+attribute_name);

	// Make sure not negative/zero
	attribute = get_attribute(attribute_name);

	// New Values
	spinner.spinner().spinner({'min': vals['min'], 'max': vals['max']});
	spinner.spinner().spinner('value', attributes[id]['base']);

	// Update limits page
	$('.'+attribute_name+'-limit').html(vals['max']+'('+(vals['max']+4)+')');
}

//// Summary Data ////
function set_summary_data(key, value){
	delta = value - summary_data[key];
	modify_summary_data(key, delta)
}

function modify_summary_data(key, delta){
	summary_data[key] += parseInt(delta);

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



