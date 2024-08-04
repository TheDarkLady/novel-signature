document.addEventListener('DOMContentLoaded', function () {
    //  script for header on scroll backgronud blur starts
            const header = document.getElementsByTagName('header')[0];

            window.addEventListener('scroll', function () {
                if (window.scrollY > 0) {
                    // console.log(window.scrollY)
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });
            // script for header on scroll backgronud blur ends
            // script of navbar for small screens
            const openHamburger = document.getElementById('open-hamburger');
            const closeHamburger = document.getElementById('close-hamburger');
            const hamburgerMenu = document.getElementById('hamburger-menu');

            openHamburger.addEventListener('click', () => {
                hamburgerMenu.style.display = 'block';
                closeHamburger.style.display = 'block';
                openHamburger.style.display = 'none';
            });

            closeHamburger.addEventListener('click', () => {
                hamburgerMenu.style.display = 'none';
                closeHamburger.style.display = 'none';
                openHamburger.style.display = 'block';
            });

            const hamburgerSubmenu = document.getElementById('hamburger-submenu');
            const closeHamburgerSubmenu = document.getElementById('close-hamburger-submenu');
            const openHamburgerSubmenu = document.getElementById('open-hamburger-submenu');

            openHamburgerSubmenu.addEventListener('click', () => {
                hamburgerSubmenu.style.display = 'flex';
                closeHamburgerSubmenu.style.display = 'block';
                openHamburgerSubmenu.style.display = 'none';
            });

            closeHamburgerSubmenu.addEventListener('click', () => {
                hamburgerSubmenu.style.display = 'none';
                closeHamburgerSubmenu.style.display = 'none';
                openHamburgerSubmenu.style.display = 'block';
            });
        });



