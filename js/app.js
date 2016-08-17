

var sendMessage = $('#message-send');
var userMessage = $('#userMessage');
var messageConfirmation = $('#message-sent-confirmation');

//On click, make sure that user has selected a user for the message, and that there is a message to be sent
sendMessage.click(function(){

	if($(".search-field").val() > 1) {
		if(userMessage.val() === "") {
			messageConfirmation.text("You need to write something to send a message!");
			messageConfirmation.css("background-color", "rgba(255,0,0, 0.6 )");
		} else {
			messageConfirmation.text("Your message has been sent!");
			messageConfirmation.css("background-color", "rgba(0,180,0, 0.6 )");
		} } else {
			messageConfirmation.text("You must select a user to send your message to");
		    messageConfirmation.css("background-color", "rgba(255,0,0, 0.6 )");
		}

});

$(".alertDemo img").click(function(){
	$(".alertDemo").remove();
});