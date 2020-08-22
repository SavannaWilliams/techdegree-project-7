let purple = '#7477bf';

Chart.defaults.global.responsive = true;

var ctx = document.getElementById('dailyTrafficChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [{
            label: '# of Daily Visistors',
            data: [75, 100, 175, 125, 225, 200, 100],
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
        curvature: 1,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    max: 250,
                    stepSize: 50
                }
            }],
            xAxes: [{
                barPercentage: 0.6
                }]
        }
    }
});