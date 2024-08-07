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

            // fade up script
            const observerOptions = {
                threshold: 0.1 // Adjust this value as needed
            };
        
            const fadeElements = document.querySelectorAll('.fade-up');
        
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-upview');
                        observer.unobserve(entry.target); // Stop observing the element after it is in view
                    }
                });
            }, observerOptions);
        
            fadeElements.forEach(element => {
                observer.observe(element);
            });

            // fade down script
            const fadeDownElements = document.querySelectorAll('.fade-down');
        
            const fadeDownObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-downview');
                        observer.unobserve(entry.target); // Stop observing the element after it is in view
                    }
                });
            }, observerOptions);
        
            fadeDownElements.forEach(element => {
                fadeDownObserver.observe(element);
            });

            // fade right script
            const fadeRightElements = document.querySelectorAll('.fade-right');
        
            const fadeRightObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-rightview');
                        observer.unobserve(entry.target); // Stop observing the element after it is in view
                    }
                });
            }, observerOptions);
        
            fadeRightElements.forEach(element => {
                fadeRightObserver.observe(element);
            });

            // fade in script
            const fadeInElements = document.querySelectorAll('.fade-in');
        
            const fadeInObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('scale-up');
                        observer.unobserve(entry.target); // Stop observing the element after it is in view
                    }
                }); 
            }, observerOptions);
        
            fadeInElements.forEach(element => {
                fadeInObserver.observe(element);
            });


        });



