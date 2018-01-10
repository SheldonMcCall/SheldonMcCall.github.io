$(function()
{
	if(localStorage && localStorage.getItem('background'))
	{   
		var colour = localStorage.getItem('background'); 
		$('.top-container').css("background-color", colour);
    } 
 

	$('#selColour').change(function() {
	console.log($('#selColour').val()); 
	localStorage.setItem('background', $('#selColour').val()); 
	$('.top-container').css("background-color", $('#selColour').val());
	})
});

function Submit() {
    alert("Thanks for submitting. Ill get back to you as soon as i can... ;)");
}

