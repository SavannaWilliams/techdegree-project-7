let alert = document.getElementById('alert');
let notifications = document.getElementById('notif-bell');
let notifMessages = document.getElementById('notif-message');

alert.addEventListener('click', (e) => {
    alert.remove();
});

notifications.addEventListener('click', (e) => {
    if (notifMessages.style.display !== 'block'){
        notifMessages.style.display = 'block';
    } else {
        notifMessages.style.display = 'none';
    }
});