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
	'bod': {'base': 1, 'aug': 1},
	'agi': {'base': 1, 'aug': 1},
	'rea': {'base': 1, 'aug': 1},
	'str': {'base': 1, 'aug': 1},
	'cha': {'base': 1, 'aug': 1},
	'int': {'base': 1, 'aug': 1},
	'log': {'base': 1, 'aug': 1},
	'wil': {'base': 1, 'aug': 1},
	'edg': {'base': 1, 'aug': 1},
	'mag': {'base': 0, 'aug': 0},
	'res': {'base': 0, 'aug': 0}
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
	'skills': [],
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
	summary_data['special_attributes_spent'] = attributes['edg']['base'] + attributes['mag']['base'] + attributes['res']['base'];

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

function update_skills(key, value){
	summary_data[key] = value;

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
	$('.'+key+'-val').html(value);
}
function increment_base(key, value){
	attributes[key]['base'] += value;
	$('.'+key+'-val').html(attributes[key]['base']);
	$("#"+key).spinner().spinner("value", attributes[key]['base']);
	increment_spinner_vals(key, value);
}


function set_summary_data(key, value){
	delta = value - summary_data[key];
	modify_summary_data(key, delta)
}

function modify_summary_data(key, delta){
	alert(key+'-'+delta);
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

function add_quality(name, karma){
	length = summary_data['qualities'].length;
	summary_data['qualities'][length] = {'name': name, 'karma': karma};
	modify_summary_data('karma', -1*karma);

	return $('.active-qualities-list').html($('.active-qualities-list').html()+"<li id=quality" + length + " class='list-group-item attached-quality'>"+name+"</li>");
}

function remove_quality(id){
	karma = summary_data["qualities"][id]['karma'];
	summary_data["qualities"][id] = {};
	$('.quality').addClass('hidden');
	modify_summary_data('karma', karma);
}

function get_spinner_vals(spinner){
	return {'min': spinner.attr('aria-valuemin'), 'max': spinner.attr('aria-valuemax')};
}
function increment_spinner_vals(id, delta){
	var spinner = $('#'+id);
	vals = get_spinner_vals(spinner);
	spinner.spinner().spinner({'min': parseInt(vals['min'])+delta, 'max': parseInt(vals['max'])+delta});
}

// Initialize
$(function(){ 
	set_race('human');

	for (att in attributes){
		increment_base(att, 0);
	}
});

