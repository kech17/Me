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
