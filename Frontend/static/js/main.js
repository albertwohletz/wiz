/**
 * Created by albertlwohletz on 2/7/15.
 */

// Init JQueryUI Elements
$(function() {
    $( ".resizable" ).resizable();
    $( ".overlay" ).draggable();
    // temp
    $( ".overlay").show();
});

$(function(){
	$('.positive-quality-item').click(function(e){
		desc = 'karma: ' + $( this ).val() + '</br>' + $( this ).attr('description')
		$('.quality-description').html(desc);
	});
});