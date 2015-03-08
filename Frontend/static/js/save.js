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
	initialize();
}

$(function() {
	$('.load-char').click(load_char_json);
	$('.save-char').click(generate_char_json);
});