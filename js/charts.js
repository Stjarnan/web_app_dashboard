// Set the variables for each canvas

var trafficChart = document.getElementById('trafficChart');

var DailyTrafficChart = document.getElementById('dailyTrafficChart');

var mobileUsersChart = document.getElementById('mobileUsersChart');

// Hide legend from charts 

Chart.defaults.global.legend.display = false;

// Change tooltip color for all charts to match design a bit better

Chart.defaults.global.tooltips.backgroundColor = "rgba(123, 104, 238, 0.9)";

// Traffic Chart

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
					max: 2500,
					beginAtZero: true
				}
			}]
		}
	}

	});


// ----------------------


// Daily traffic bar Chart

var addDailyTrafficChart = new Chart(dailyTrafficChart, {
	type: 'bar',
	data: {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    datasets: [
        {
            backgroundColor: [
                'rgba(123, 104, 238, 1)',
                'rgba(123, 104, 238, 1)',
                'rgba(123, 104, 238, 1)',
                'rgba(123, 104, 238, 1)',
                'rgba(123, 104, 238, 1)',
                'rgba(123, 104, 238, 1)',
                'rgba(123, 104, 238, 1)',
            ],
            hoverBackgroundColor: [
                'rgba(123, 104, 238, 0.4)',
                'rgba(123, 104, 238, 0.4)',
                'rgba(123, 104, 238, 0.4)',
                'rgba(123, 104, 238, 0.4)',
                'rgba(123, 104, 238, 0.4)',
                'rgba(123, 104, 238, 0.4)',
                'rgba(123, 104, 238, 0.4)'
            ],
            data: [65, 59, 80, 81, 56, 65, 80]
        }
    ]
},

	options: {
		scales: {
			yAxes: [{
				ticks: {
					min: 0,
					max: 100,
					beginAtZero: true
				}
			}]
		}
	}

});


// ----------------------

// Mobile Users Pie Chart

var addMobileUsersChart = new Chart(mobileUsersChart, {
	type: 'pie',
	data: {
	    labels: [
	        "Red",
	        "Blue",
	        "Yellow"
	    ],
	    datasets: [
	        {
	            data: [300, 50, 100],
	            backgroundColor: [
	                "#FF6384",
	                "#36A2EB",
	                "#FFCE56"
	            ],
	            hoverBackgroundColor: [
	                "#FF6384",
	                "#36A2EB",
	                "#FFCE56"
	            ]
	        }]
	}
});