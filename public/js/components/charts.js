$(document).ready(function() {
	var ctx = document.getElementById("type");

	var options = {
		cutoutPercentage: 60,
		legend: {
        	display: false,
        },
        tooltips: {enabled: false},
        hover: {mode: null},
    };

	var data = {
	    labels: [
	        "Product",
	        "Design",
	        "Founder",
	        "Engineer",
	        "Other"
	    ],
	    datasets: [{
	        data: [40, 30, 15, 10, 5],
	        backgroundColor: [
                "#132de7",
                "#28bf54",
                "#fec919",
                "#e25e04",
                "#fe2c78"
	        ]
	    }]
	};

	var myDoughnutChart = new Chart(ctx, {
	    type: 'doughnut',
	    data: data,
	    options: options	
	});

	var ctx = document.getElementById("experience");

	var data = {
	    labels: [
	        "5+",
	        "3 - 5",
	        "0 - 3"
	    ],
	    datasets: [{
	        data: [60, 25, 15],
	        backgroundColor: [
                "#132de7",
                "#28bf54",
                "#fec919",
                "#e25e04",
                "#fe2c78"
	        ]
	    }]
	};

	var myDoughnutChart = new Chart(ctx, {
	    type: 'doughnut',
	    data: data,
	    options: options
	});

	var ctx = document.getElementById("company");

	var data = {
	    labels: [
	        "Startup",
	        "Agency",
	        "Corporate",
	        "Other"
	    ],
	    datasets: [{
	        data: [40, 30, 20, 10],
	        backgroundColor: [
                "#132de7",
                "#28bf54",
                "#fec919",
                "#e25e04",
                "#fe2c78"
	        ]
	    }]
	};

	var myDoughnutChart = new Chart(ctx, {
	    type: 'doughnut',
	    data: data,
	    options: options
	});

	var ctx = document.getElementById("seniority");

	var data = {
	    labels: [
	        "Manager",
	        "Director",
	        "Executive"
	    ],
	    datasets: [{
	        data: [69, 19, 11],
	        backgroundColor: [
                "#132de7",
                "#28bf54",
                "#fec919",
                "#e25e04",
                "#fe2c78"
	        ]
	    }]
	};

	var myDoughnutChart = new Chart(ctx, {
	    type: 'doughnut',
	    data: data,
	    options: options
	});
});