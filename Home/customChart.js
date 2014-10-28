var hardwareChart = $("#hardwareChart").get(0).getContext("2d");
var hardwareData = {
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
var myChart = new Chart(hardwareChart).Bar(hardwareData, {
	responsive:true,
	scaleOverride:true,
	scaleSteps: 10,
	scaleStepWidth: 10,
	scaleStartValue: 0,
	scaleLabel: "<%=value%>"+"%"
	
});
var softwareChart = $("#softwareChart").get(0).getContext("2d");
var softwareData = [
    {
        value: 25,
        color:"#F7464A",
        label: "Web Dev",
    },
    {
        value: 30,
        color: "#46BFBD",
        label: "iOS"
    },
    {
        value: 5,
        color: "#FDB45C",
    	label: "Android"
    },
    {
        value: 30,
        color: "#FDB45C",
    	label: "Object Oriented"
    },
    {
        value: 10,
        color: "#FDB45C",
    	label: "Simulations"
    },
];
var myChart = new Chart(softwareChart).Pie(softwareData, {
        tooltipTemplate: "<%=label%>: <%=value%>" + "%",
        
        onAnimationComplete: function()
        {
            this.showTooltip(this.segments, true);
        },
        
        tooltipEvents: [],
        
        showTooltips: true
});