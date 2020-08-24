const purple = '#7477bf';
const teal = '#73b1bf';
const green = '#81c98f';
const white = '#fff';

Chart.defaults.global.responsive = true;

// Traffic Chart

var tc = document.getElementById('trafficChart').getContext('2d');
var myChart = new Chart(tc, {
    type: 'line',
    data: {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets: [{
            label: '# of Weekly Visistors',
            data: [500, 1000, 750, 1250, 1750, 1250, 1500, 1000, 1500, 2000, 1500, 2000],
            backgroundColor: 'rgba(116, 119, 191, 0.5)',
            borderColor: purple,
            borderWidth: 2,
            pointBackgroundColor: white,
            pointRadius: 6
        }]
    },
    options: {
        aspectRatio: 2.5,
        pointRadius: 8,
        pointBackgroundColor: '#fff',
        pointBorderColor: purple,
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    max: 2500,
                    stepSize: 500,
                    labelOffset: 80,
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
        },
        animation: {
            duration: 0
        },
        // Creates straight lines between points
        elements: {
            line: {
                tension: 0
            }
        }
    }
});

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
        maintainAspectRatio: false,
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
            label: '% of Users',
            data: [15, 15,70],
            backgroundColor: [
                green,
                teal,
                purple,
            ],
            borderWidth: 0
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
