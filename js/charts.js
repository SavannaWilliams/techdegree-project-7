const purple = '#7477bf';
const teal = '#73b1bf';
const green = '#81c98f';
const white = '#fff';

// Chart.defaults.global.responsive = true;

// Traffic Chart
let trafficCanvas = document.getElementById('trafficChart');

let trafficData = {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
            data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
            backgroundColor: 'rgba(116, 119, 191, .5)',
            borderWidth: 1,
            lineTension: 0
        }]
};

let trafficOptions = {
        aspectRatio: 2.5,
        animation: {
            duration: 0
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    }
            }],
        },
        legend: {
            display: false
        },
};

let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});

// Daily Traffic Bar Chart
let dailyCanvas = document.getElementById('dailyTrafficChart');

const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: purple,
        borderWidth: 1
    }]
    };

    const dailyOptions = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }],
        },
        legend: {
            display: false
        }
    }
    

let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});




// Mobile Users Doughnut Chart
let mobileCanvas = document.getElementById('mobileUsersChart');

const mobileData = {
    labels: ["Phones", "Tablet",  "Desktop"],
    datasets: [{
        label: '# of Users',
        data: [500, 550, 2000],
        borderWidth: 0,
        backgroundColor: [
            teal,
            green,
            purple,
        ]
    }]
}   

    const mobileOptions = {
        legend: {
            position: 'right',
            labels: {
                boxWidth: 20,
                fontStyle: 'bold'
            }
        }      
    }
    

let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});