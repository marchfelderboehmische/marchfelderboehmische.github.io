// Cookie strikt
document.cookie = "SameSite=Strict";

function handleCookies() {
    const banner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies');

    // Überprüfen, ob der Wert im localStorage gesetzt ist
    if (localStorage.getItem('cookies-accepted') === 'true') {
        banner.style.display = 'none'; // Wenn ja, verstecken wir das Banner
    }
    // Wenn der Benutzer auf "Akzeptieren" klickt
    acceptBtn.onclick = function () {
        // Setzen des localStorage Wertes
        localStorage.setItem('cookies-accepted', 'true');
        // Verstecken des Banners
        banner.style.display = 'none';
    };
}

document.addEventListener('DOMContentLoaded', handleCookies)
