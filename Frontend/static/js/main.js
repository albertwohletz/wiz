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
	summary_data['special_attributes_spent'] = attributes['edg']['base'] + attributes['res']['base'] + attributes['mag']['base'] - attributes['edg']['min'] - attributes['res']['min'] - attributes['mag']['min'];

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

function set_attribute(key, value){
	attributes[key]['base'] = value;
	update_attribute_display(key);
	
	update_skills();
}

// Update max/min/aug max
function change_attribute(attribute_name, values){
	dif =  parseInt(values['min']) - attributes[attribute_name]['min'];
	attributes[attribute_name]['base'] += dif
	attributes[attribute_name]['min'] = parseInt(values['min']);
	attributes[attribute_name]['max'] = parseInt(values['max']);
	attributes[attribute_name]['aug'] = parseInt(values['aug']);

	if (attributes[attribute_name]['base'] <= attributes[attribute_name]['min']) {
		attributes[attribute_name]['base'] = attributes[attribute_name]['min'];
	}

	// Update Spinners
	update_attribute_display(attribute_name);
	update_skills();
}

function update_attribute_display(attribute_name){
	// Get New Values
	var spinner = $('#'+attribute_name);

	// Make sure not negative/zero
	attribute = attributes[attribute_name];

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



