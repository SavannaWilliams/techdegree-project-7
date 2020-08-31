let alertBanner = document.getElementById('alert');
let alertX = document.getElementById('alert-x');
let notifications = document.getElementById('notif-bell');
let notifMessages = document.getElementById('notifications');
let notifX = document.getElementsByClassName('notif-message-x');
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
        let a, b, i, val = this.value;
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
    let noChild = messageForm.querySelector('p') === null;
    message.style.color = '#7477bf';

    if(userField.value && messageField.value !== ''){
      message.textContent = successMessage;
    } else if (userField.value === '' && messageField.value !== '') {
      message.textContent = userFieldErrorMessage;
    } else if (messageField.value === '' && userField.value !== ''){
      message.textContent = messageFieldErrorMessage;
    } else if (userField.value === '' && messageField.value === ''){
      message.textContent = bothErrorMessage;
    }
    if (noChild){
      messageForm.appendChild(message);
      setTimeout(function() {
        messageForm.removeChild(message);
      }, 2000);
    }
  }