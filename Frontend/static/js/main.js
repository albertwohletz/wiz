/**
 * Created by albertlwohletz on 2/7/15.
 */

// Init JQuery Elements
$(function() {
    $( ".resizable" ).resizable();
    $( ".overlay" ).draggable();

    // Overlay close button
    $('.close-button').click(function() {
    	$(this).parent().hide();
	});


});

// Qualities Functios
$(function(){
	$('.add-qualities').click(function(){
		$('.positive-qualities').show();
	});
	$('.positive-quality-item').click(function(e){
		desc = 'Karma: ' + $( this ).val() + '</br>' + $( this ).attr('description')
		$('.quality-description').html(desc);
	});
});

// Closes Parent of who was clicked.  This way you can have this in a container and it will act as an close 'x'.
