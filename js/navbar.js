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
/*
 * @popperjs/core v2.5.4 - MIT License
 */
let navbarCollapsible;

function initializeAndAddScrollSpy() {
    navbarCollapsible = document.querySelector('#mainNav');
    new bootstrap.ScrollSpy(document.body, {
        target: '#mainNav',
        rootMargin: '0px 0px -40%',
    });
}

// add scrollSpy when the content is loaded
document.addEventListener('DOMContentLoaded', initializeAndAddScrollSpy);


// Navbar shrink function
function navbarShrink() {
    if (window.scrollY === 0) {
        navbarCollapsible.classList.remove('navbar-shrink')
    } else if (navbarCollapsible != null && navbarCollapsible.classList != null && !navbarCollapsible.classList.contains('navbar-shrink')) {
        navbarCollapsible.classList.add('navbar-shrink')
    }
}

// Shrink the navbar when page is scrolled
document.addEventListener('scroll', navbarShrink);

// Collapse responsive navbar when toggler is visible
const navbarToggler = document.querySelector('.navbar-toggler');
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

