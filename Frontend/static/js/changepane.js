/**
 * Created by albertlwohletz on 2/7/15.
 */
$(document).ready(function() {
	$('.blah').click(function() {
		alert('hi');
	});
	$( ".spinner" ).spinner({
		min: 1,
		max: 10,
		start: 1
	});
});