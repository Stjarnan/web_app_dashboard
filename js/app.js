

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


// When user click on alert cross, remove the alert window
$(".alertDemo img").click(function(){
	$(".alertDemo").remove();
});



// When user click on the notification bell
$(".bell").click(function(event){
	// preventDefault to prevent browsers from readding the symbol immediately
	event.preventDefault();
	// remove the new-notifications symbol
	$(".new-notifications").hide();
	// Show the notifications
	$(".notifications").toggle("slow");

});


//remove the notifications if user clicks on cross
 $(".notification-cross").click(function(){
 	$(this).parent().remove()
 	// If all notifications has been removed, close menu
	if ($(".notifications").children().length < 1) {
		$(".notifications").hide("slow");
	}
 })


// Trafficchart based on switch button chosen

function Hourly() {
    
	$('#trafficChart').remove(); 
    $('.trafficChartDiv').append('<canvas id="trafficChart"><canvas>');

    var trafficChart = document.getElementById('trafficChart');
    var addTrafficChart = new Chart(trafficChart, {
    type: 'line',
    data: {
        xLabels: ["00-03", "03-06", "06-09", "09-12", "12-15", "15-18", "18-21", "21-00"],
        datasets: [
        {
            fill: true,
            lineTension: 0,
            backgroundColor: "rgba(123, 104, 238, 0.4)",
            borderColor: "rgba(123, 104, 238, 1)",
            borderCapStyle: 'butt',
            borderWidth: 1,
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(123, 104, 238, 1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 2,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(123, 104, 238, 1)",
            pointHoverBorderColor: "rgba(123, 104, 238, 1)",
            pointHoverBorderWidth: 1,
            pointRadius: 4,
            pointHitRadius: 10,
            data: [103, 40, 60, 120, 130, 157, 160, 156],
            spanGaps: false,
        }
    ]
},

    options: {
        scales: {
            yAxes: [{
                ticks: {
                    min: 0,
                    max: 500,
                    beginAtZero: true
                }
            }]
        }
    }

    });
}


function Daily() {
    
	$('#trafficChart').remove(); 
    $('.trafficChartDiv').append('<canvas id="trafficChart"><canvas>');
    
    var trafficChart = document.getElementById('trafficChart');
    var addTrafficChart = new Chart(trafficChart, {
    type: 'line',
    data: {
        xLabels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
        {
            fill: true,
            lineTension: 0,
            backgroundColor: "rgba(123, 104, 238, 0.4)",
            borderColor: "rgba(123, 104, 238, 1)",
            borderCapStyle: 'butt',
            borderWidth: 1,
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(123, 104, 238, 1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 2,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(123, 104, 238, 1)",
            pointHoverBorderColor: "rgba(123, 104, 238, 1)",
            pointHoverBorderWidth: 1,
            pointRadius: 4,
            pointHitRadius: 10,
            data: [530, 640, 645, 670, 830, 875, 760],
            spanGaps: false,
        }
    ]
},

    options: {
        scales: {
            yAxes: [{
                ticks: {
                    min: 0,
                    max: 1000,
                    beginAtZero: true
                }
            }]
        }
    }

    });
}


function Weekly() {
    
	$('#trafficChart').remove(); 
    $('.trafficChartDiv').append('<canvas id="trafficChart"><canvas>');
    
    var trafficChart = document.getElementById('trafficChart');
    var addTrafficChart = new Chart(trafficChart, {
    type: 'line',
    data: {
        xLabels: ["1-7", "8-15", "16-23", "23-30"],
        datasets: [
        {
            fill: true,
            lineTension: 0,
            backgroundColor: "rgba(123, 104, 238, 0.4)",
            borderColor: "rgba(123, 104, 238, 1)",
            borderCapStyle: 'butt',
            borderWidth: 1,
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(123, 104, 238, 1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 2,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(123, 104, 238, 1)",
            pointHoverBorderColor: "rgba(123, 104, 238, 1)",
            pointHoverBorderWidth: 1,
            pointRadius: 4,
            pointHitRadius: 10,
            data: [5465, 5340, 5650, 5120],
            spanGaps: false,
        }
    ]
},

    options: {
        scales: {
            yAxes: [{
                ticks: {
                    min: 0,
                    max: 7000,
                    beginAtZero: true
                }
            }]
        }
    }

    });
}







function Monthly() {
    
    $('#trafficChart').remove(); 
    $('.trafficChartDiv').append('<canvas id="trafficChart"><canvas>');

    var trafficChart = document.getElementById('trafficChart');
    var addTrafficChart = new Chart(trafficChart, {
    type: 'line',
    data: {
        xLabels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
        {
            fill: true,
            lineTension: 0,
            backgroundColor: "rgba(123, 104, 238, 0.4)",
            borderColor: "rgba(123, 104, 238, 1)",
            borderCapStyle: 'butt',
            borderWidth: 1,
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(123, 104, 238, 1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 2,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(123, 104, 238, 1)",
            pointHoverBorderColor: "rgba(123, 104, 238, 1)",
            pointHoverBorderWidth: 1,
            pointRadius: 4,
            pointHitRadius: 10,
            data: [19360, 18306, 21600, 21204, 21300, 19157, 17160, 20156, 20875, 21764, 23470, 24000],
            spanGaps: false,
        }
    ]
},

    options: {
        scales: {
            yAxes: [{
                ticks: {
                    min: 0,
                    max: 30000,
                    beginAtZero: true
                }
            }]
        }
    }

    });
}


