var hardwareChart = $("#hardwareChart").get(0).getContext("2d");
var data = {
    labels: ["Prototyping", "Robotics", "IC Analysis", "Processors", "Automation"],
    datasets: [
        {
            label: "Hardware Experience",
            fillColor: "rgba(119,221,119,0.5)",
            strokeColor: "rgba(119,221,119,0.8)",
            highlightFill: "rgba(119,221,119,0.75)",
            highlightStroke: "rgba(119,221,119,1)",
            data: [80, 70, 90, 60, 70]
        }
    ]
};
var myChart = new Chart(hardwareChart).Bar(data, {
	responsive:true,
	scaleOverride:true,
	scaleSteps: 10,
	scaleStepWidth: 10,
	scaleStartValue: 0,
	scaleLabel: "<%=value%>"+"%"
	
});

var softwareChart = $("#softwareChart").get(0).getContext("2d");
var data = [
    {
        value: 300,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Red",
        labelColor: "white"
    },
    {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    },
    {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
    }
];
var myChart = new Chart(softwareChart).Pie(data, {
	responsive:true,
    onAnimationComplete: function() {
        softwareChart.fillText(data[0].value + "%", 225 - 20, 225, 200);
    }
});