let alertBanner = document.getElementById('alert');
let alertX = document.getElementById('alert-x');
let notifications = document.getElementById('notif-bell');
let notifMessages = document.getElementById('notifications');

alertX.addEventListener('click', (e) => {
    alertBanner.remove();
});

notifications.addEventListener('click', (e) => {
    if (notifMessages.style.display !== 'block'){
        notifMessages.style.display = 'block';
    } else {
        notifMessages.style.display = 'none';
    }
});