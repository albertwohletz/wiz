function generate_char_json(){
	$(".save").html(JSON.stringify(summary_data));
}

function load_char_json(){
	var data = $(".load").val();

	if (data.length == 0){
		alert('Please enter save string.');
	} else {
		summary_data = JSON.parse(data);
	}
}

// doesn't really work yet, needs to set all buttons to default and shit.  Just restart for now
function reset_defaults(){
	main_attributes.forEach(function(attribute_name, index, array){
		set_attribute(attribute_name, 0);
		change_attribute(attribute_name, 1,6,6);
    });
    set_race('human');
}
