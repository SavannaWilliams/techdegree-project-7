//-------------------------------------------------------
// Chart Javascript

const purple = '#7477bf';
const teal = '#73b1bf';
const green = '#81c98f';

// Chart.defaults.global.responsive = true;

// Traffic Chart- Weekly
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
    };
    

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
};

    const mobileOptions = {
        legend: {
            position: 'right',
            labels: {
                boxWidth: 20,
                fontStyle: 'bold'
            }
        }      
    };
    

let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});

//-------------------------------------------------------
//  Main app JavaScript

let alertBanner = document.getElementById('alert');
let alertX = document.getElementById('alert-x');
let notifications = document.getElementById('notif-bell');
let notifMessages = document.getElementById('notifications');
let emailCheckbox = document.getElementById('email');
let profileCheckbox = document.getElementById('profile');
let timezone = document.getElementById('timezone');

// Set settings toggles on load to the correct setting
if (localStorage.getItem('email-notifications') === 'on') {
    emailCheckbox.checked = true;
}
if (localStorage.getItem('profile-setting') === 'public') {
    profileCheckbox.checked = true;
}

// Set timezone select dropdown on load to the correct option
if (localStorage.getItem('timezone-setting') !== null) {
    let selected = localStorage.getItem('timezone-setting');
    timezone.value = selected;
}

// Close the alert banner when the X is clicked
alertX.addEventListener('click', (e) => {
    alertBanner.remove();
});


// Show or hide notification messages based on state
notifications.addEventListener('click', (e) => {
    if (notifMessages.style.display !== 'block'){
        notifMessages.style.display = 'block';
    } else {
        notifMessages.style.display = 'none';
    }
});

notifMessages.addEventListener('click', (e) => {
  notifMessages.style.display = 'none';
});

// Set the Email Notifications local storage on change
emailCheckbox.addEventListener('change', () => {
    if (emailCheckbox.checked) {
        localStorage.setItem('email-notifications', 'on');
    } else {
        localStorage.setItem('email-notifications', 'off');

    }
});

// Set the Profile to Public local storage on change
profileCheckbox.addEventListener('change', () => {
    if (profileCheckbox.checked) {
        localStorage.setItem('profile-setting', 'public');
    } else {
        localStorage.setItem('profile-setting', 'private');
    }
});

// Set the Timezone local storage on change
timezone.addEventListener('change', (e)=>{
    let option = e.target.value;
    localStorage.setItem('timezone-setting', option);
});

// Autocomplete for Message User input. Based on W3Schools tutorial- https://www.w3schools.com/howto/howto_js_autocomplete.asp

const users = ["Amber Miller", "Dale Byrd", "Dan Oliver", "Dawn Wood", "Victoria Chambers", "Felicia Thompson", "Laura Brown", "Mellissa Smith", "Aubrey Jones", "Jack Lopez", "Peter Moore", "Claudia Taylor", "Beatrice Wilson", "Xavier Harris", "Felix Perez", "Louis Robinson" ];

let autocompleteField = document.getElementById("user-search");


function autocomplete(inp, arr) {
    /*function takes two arguments- input text field + array of names*/
    let currentFocus;
    /*execute function when input is written in*/
    inp.addEventListener("input", function(e) {
        let a, b, val = this.value;
        /*close already open list of autocomplete values*/
        closeAllLists();
        if (!val) {
            return false;
        }
        currentFocus = -1;
        /*creates a DIV contains the items (values)*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(a);

        for (let i = 0; i < arr.length; i++) {
          /*check if item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create DIV element for each matching element:*/
            b = document.createElement("DIV");
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert input field that holds the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute function when user clicks on a listen name*/
                b.addEventListener("click", function(e) {
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close any lists of autocompleted values*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });

    /*Execute function when keydown*/
    inp.addEventListener("keydown", function(e) {
        let x = document.getElementById(this.id + "autocomplete-list");

        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase currentFocus variable + make item more visible*/
          currentFocus++;
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease currentFocus variable + make current item more visible*/
          currentFocus--;
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent form from being submitted*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*Simulate a click on the "active" item*/
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*Classify an item as "active"*/
      if (!x) return false;
      /*Remove and set active classes*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      x[currentFocus].classList.add("autocomplete-active");
    }

    function removeActive(x) {

      for (let i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }

    function closeAllLists(elmnt) {
      /*Close all autocomplete lists, except the one passed as an argument*/
      let x = document.getElementsByClassName("autocomplete-items");

      for (let i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*Close all lists when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
  }

  autocomplete(autocompleteField, users);

// Message form submit button code

let messageForm = document.getElementById('message-form');
let userField = document.getElementById('user-search');
let messageField = document.getElementById('message');

let successMessage = "Your message has been sent successfully.";
let bothErrorMessage = "The user and message fields cannot be blank.";
let userFieldErrorMessage = "You must select a user to message.";
let messageFieldErrorMessage = "Your message cannot be blank.";

function submitForm() {
  let message = document.createElement('p');
  // Check if message currently displayed.
  let noChild = messageForm.querySelector('p') === null;
  message.style.color = 'red';

  // Set message text based on missing/filled fields
  if(userField.value && messageField.value !== ''){
    message.textContent = successMessage;
    message.style.color = '#7477bf';
  } else if (userField.value === '' && messageField.value !== '') {
    message.textContent = userFieldErrorMessage;
  } else if (messageField.value === '' && userField.value !== ''){
    message.textContent = messageFieldErrorMessage;
  } else if (userField.value === '' && messageField.value === ''){
    message.textContent = bothErrorMessage;
  }
  // Delete message after 2 seconds.
  if (noChild){
    messageForm.appendChild(message);
    setTimeout(function() {
      messageForm.removeChild(message);
    }, 2000);
  }
}

// Chart date range section code

let trafficSelectors = document.getElementById('trafficOptions');
let chartSelectors = document.getElementsByClassName('chartOption');

// Check for clicks on different traffic date range options.
trafficSelectors.addEventListener("click", function (e) {
  let selectedChartDiv = e.target.parentNode;
  let currentChart = e.target;

  console.log(currentChart);

  // Remove existing active chart styling before applying new styling to newly selected chart.
  for(let i = 0; i < chartSelectors.length; i++) {
    let selectedChart = chartSelectors[i];
    if (currentChart.tagName !== 'DIV' && selectedChart.classList.contains('activeChart')) {
      selectedChart.classList.remove('activeChart');
      selectedChartDiv.classList.add('activeChart');
    }
  }

// Change chart labels and data based on selected time range
  if(currentChart.textContent === 'Daily') {
    trafficData = {
      labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
      datasets: [{
          data: [175, 280, 295, 105, 245, 101, 90, 200, 255, 242, 280, 295, 175, 280, 295, 105, 165, 200, 245, 101, 90, 240, 200, 240, 255, 242, 280, 295, 202, 185, 222],
          backgroundColor: 'rgba(116, 119, 191, .5)',
          borderWidth: 1,
          lineTension: 0
      }]
    };
    trafficChart = new Chart(trafficCanvas, {
      type: 'line',
      data: trafficData,
      options: trafficOptions
    });
  }

  if(currentChart.textContent === 'Hourly') {
    trafficData = {
      labels: ["12 AM", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12 PM", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
      datasets: [{
          data: [25, 10, 15, 20, 21, 13, 9, 14, 15, 28, 21, 20, 15, 6, 9, 15, 16, 20, 32, 11, 9, 24, 31, 20],
          backgroundColor: 'rgba(116, 119, 191, .5)',
          borderWidth: 1,
          lineTension: 0
      }]
    };
    trafficChart = new Chart(trafficCanvas, {
      type: 'line',
      data: trafficData,
      options: trafficOptions
    });
  }
    
  if(currentChart.textContent === 'Weekly') {
    let trafficData = {
      labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
      datasets: [{
          data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
          backgroundColor: 'rgba(116, 119, 191, .5)',
          borderWidth: 1,
          lineTension: 0
      }]
    };
      trafficChart = new Chart(trafficCanvas, {
        type: 'line',
        data: trafficData,
        options: trafficOptions
      });
  }

  if(currentChart.textContent === 'Monthly') {
    let trafficData = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
      datasets: [{
          data: [2220, 3500, 3900, 4200, 2650, 2180, 3650, 2850, 2050, 4800, 3900, 3750],
          backgroundColor: 'rgba(116, 119, 191, .5)',
          borderWidth: 1,
          lineTension: 0
      }]
    };
      trafficChart = new Chart(trafficCanvas, {
        type: 'line',
        data: trafficData,
        options: trafficOptions
      });
  }

});