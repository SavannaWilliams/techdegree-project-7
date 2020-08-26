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