// Priorities click handlers
$(function(){
	$('#priority-attributes').change(function() {
		update_attributes('attributes_available', $(this).val());
	});
});