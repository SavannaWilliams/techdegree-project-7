const purple = '#7477bf';
const teal = '#73b1bf';
const green = '#81c98f';

Chart.defaults.global.responsive = true;


// Daily Traffic Bar Chart
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

// Mobile Users Doughnut Chart

var muc = document.getElementById('mobileUsersChart').getContext('2d');
var myChart = new Chart(muc, {
    type: 'doughnut',
    data: {
        labels: ['Phones', 'Tablets', 'Desktop'],
        datasets: [{
            label: '# of Daily Visistors',
            data: [15, 15,70],
            backgroundColor: [
                green,
                teal,
                purple,
            ],
            borderWidth: 2
        }]
    },
    options: {
        legend: {
            display: true,
            position: 'right',
            labels: {
                fontSize: 20,
                padding: 20,
                boxWidth: 20,
            }
        },
    }
});
