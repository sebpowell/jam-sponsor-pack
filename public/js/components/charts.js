$(document).ready(function() {
	var ctx = document.getElementById("type");

	var options = {
		cutoutPercentage: 70,
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
                "#14a6ff",
                "#6abcf9",
                "#98d1fb",
                "#cae8fd",
                "#e0f2fe"
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
                "#14a6ff",
                "#6abcf9",
                "#98d1fb"
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
                "#14a6ff",
                "#6abcf9",
                "#98d1fb",
                "#cae8fd",
                "#e0f2fe"
	        ]
	    }]
	};

	var myDoughnutChart = new Chart(ctx, {
	    type: 'doughnut',
	    data: data,
	    options: options
	});
});