let purple = '#7477bf';

Chart.defaults.global.responsive = true;

var dtc = document.getElementById('dailyTrafficChart').getContext('2d');
var myChart = new Chart(dtc, {
    
    type: 'bar',
    data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [{
            label: '# of Daily Visistors',
            data: [50, 75, 145, 100, 200, 175, 75],
            backgroundColor: [
                purple,
                purple,
                purple,
                purple,
                purple,
                purple,
                purple
            ],
            borderWidth: 0
        }]
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    max: 250,
                    stepSize: 50,
                    labelOffset: 35,
                    callback: function(value, index) {
                        if (value !== 0) {
                            return value;
                        }
                    }
                }
            }],
            xAxes: [{
                barPercentage: 0.6,
                }]
        }
    }
});

// window.addEventListener('resize', function (e) {
//     let size = window.screen.availWidth;
//     let newSize = dtc.canvas.parentNode.style.width = (size/2);
//     console.log(newSize);
// });