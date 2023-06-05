/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
/*!
 * Font Awesome Free 6.3.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2023 Fonticons, Inc.
 */
/*!
 * Bootstrap v5.0.0-alpha2 (https://getbootstrap.com/)
 * Copyright 2011-2020 The Bootstrap Authors
 * Copyright 2011-2020 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
/*!
  * Bootstrap v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
/*!
 * jQuery v3.5.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-deprecated/ajax-event-alias,-effects,-effects/Tween,-effects/animatedSelector | (c) JS Foundation and other contributors | jquery.org/license
*/
/**
 * @popperjs/core v2.5.4 - MIT License
 */
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    }
    ;

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Dropdown Bilder Medien
    function changeEvent() {
        const dropdown = document.getElementById("event-dropdown");
        const selectedEvent = dropdown.value;
        const weinvierteltageCarousel = document.getElementById("weinvierteltage-carousel");
        const stefflkirtagCarousel = document.getElementById("stefflkirtag-carousel");

        // Set the initial display style for the carousels
        weinvierteltageCarousel.style.display = "none";
        stefflkirtagCarousel.style.display = "none";

        // Function to handle the change event of the dropdown
        function changeEvent() {
            // Get the selected event from the dropdown
            const selectedEvent = document.getElementById("event-dropdown").value;

            // Show or hide the carousels based on the selected event
            if (selectedEvent === "weinvierteltage") {
                weinvierteltageCarousel.style.display = "block";
                stefflkirtagCarousel.style.display = "none";
            } else if (selectedEvent === "stefflkirtag") {
                weinvierteltageCarousel.style.display = "none";
                stefflkirtagCarousel.style.display = "block";
            }
        }
    }

    // Cookie strikt
    document.cookie = "SameSite=Strict";

    // Check if the user has accepted the cookies
    function checkCookiesAccepted() {
        return localStorage.getItem('cookiesAccepted') === 'true';
    }

    // Hide the cookie popup
    function hideCookiePopup() {
        var cookiePopup = document.getElementById('cookiePopup');
        cookiePopup.style.display = 'none';
    }

    // Show the cookie popup
    function showCookiePopup() {
        var cookiePopup = document.getElementById('cookiePopup');
        cookiePopup.style.display = 'block';
    }

    // Set the cookies as accepted
    function acceptCookies() {
        localStorage.setItem('cookiesAccepted', 'true');
        hideCookiePopup();
    }

    // Check if cookies have already been accepted
    if (!checkCookiesAccepted()) {
        showCookiePopup();
    }

    // Attach event listener to the Accept button
    var acceptBtn = document.getElementById('acceptCookiesBtn');
    acceptBtn.addEventListener('click', acceptCookies);
});