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

            //tabs script  for large and medium screens 
            const tabBtn1 = document.getElementById('tab-btn-1');
            const tabBtn2 = document.getElementById('tab-btn-2');
            const tabBtn3 = document.getElementById('tab-btn-3')
            const tabBtn4 = document.getElementById('tab-btn-4')
            const tabBtn5 = document.getElementById('tab-btn-5')
            const tab1 = document.getElementById('tab1');
            const tab2 = document.getElementById('tab2');
            const tab3 = document.getElementById('tab3');
            const tab4 = document.getElementById('tab4');
            const tab5 = document.getElementById('tab5');

            tabBtn1.classList.add('active');
            tab1.style.display = 'grid';
            tab2.style.display = 'none';
            tab3.style.display = 'none';
            tab4.style.display = 'none';
            tab5.style.display = 'none';


            tabBtn1.addEventListener('click', () => {
                tabBtn1.classList.add('active');
                tabBtn2.classList.remove('active');
                tabBtn3.classList.remove('active');
                tabBtn4.classList.remove('active');
                tabBtn5.classList.remove('active');
                tab1.style.display = 'grid';
                tab2.style.display = 'none';
                tab3.style.display = 'none';
                tab4.style.display = 'none';
                tab5.style.display = 'none';
            });
            tabBtn2.addEventListener('click', () => {
                tabBtn1.classList.remove('active');
                tabBtn2.classList.add('active');
                tabBtn3.classList.remove('active');
                tabBtn4.classList.remove('active');
                tabBtn5.classList.remove('active');
                tab1.style.display = 'none';
                tab2.style.display = 'grid';
                tab3.style.display = 'none';
                tab4.style.display = 'none';
                tab5.style.display = 'none';
            });
            tabBtn3.addEventListener('click', () => {
                tabBtn1.classList.remove('active');
                tabBtn2.classList.remove('active');
                tabBtn3.classList.add('active');
                tabBtn4.classList.remove('active');
                tabBtn5.classList.remove('active');
                tab1.style.display = 'none';
                tab2.style.display = 'none';
                tab3.style.display = 'grid';
                tab4.style.display = 'none';
                tab5.style.display = 'none';
            });
            tabBtn4.addEventListener('click', () => {
                tabBtn1.classList.remove('active');
                tabBtn2.classList.remove('active');
                tabBtn3.classList.remove('active');
                tabBtn4.classList.add('active');
                tabBtn5.classList.remove('active');
                tab1.style.display = 'none';
                tab2.style.display = 'none';
                tab3.style.display = 'none';
                tab4.style.display = 'grid';
                tab5.style.display = 'none';
            });
            tabBtn5.addEventListener('click', () => {
                tabBtn1.classList.remove('active');
                tabBtn2.classList.remove('active');
                tabBtn3.classList.remove('active');
                tabBtn4.classList.remove('active');
                tabBtn5.classList.add('active');
                tab1.style.display = 'none';
                tab2.style.display = 'none';
                tab3.style.display = 'none';
                tab4.style.display = 'none';
                tab5.style.display = 'grid';
            });

            //tabs script  for small screens 
            const tabDropdown = document.getElementById('tab-dropdown');
            // Function to hide all tabs
            function hideAllTabs() {
                tab1.style.display = 'none';
                tab2.style.display = 'none';
                tab3.style.display = 'none';
                tab4.style.display = 'none';
                tab5.style.display = 'none';
            }
            // Function to show the selected tab
            function showSelectedTab(tabId) {
                hideAllTabs();
                document.getElementById(tabId).style.display = 'grid';
            }
            // Set initial active tab based on dropdown selection
            tabDropdown.value = "tab1";
            showSelectedTab('tab1');
            // Add change event listener to dropdown
            tabDropdown.addEventListener('change', (event) => {
                const selectedTab = event.target.value;
                switch (selectedTab) {
                    case 'tab1':
                        showSelectedTab('tab1');
                        break;
                    case 'tab2':
                        showSelectedTab('tab2');
                        break;
                    case 'tab3':
                        showSelectedTab('tab3');
                        break;
                    case 'tab4':
                        showSelectedTab('tab4');
                        break;
                    case 'tab5':
                        showSelectedTab('tab5');
                        break;
                    }
                });


                // Active listing page filter script
                // const typeFilter = document.getElementById('type-filter');
                // const typeDropdown = document.getElementById('type-dropdown');
        
                // Toggle dropdown visibility when typeFilter is clicked
                // typeFilter.addEventListener('click', function(event) {
                    // event.preventDefault(); // Prevent the default anchor behavior
                    // typeDropdown.style.display = 'block';
                    // event.stopPropagation(); // Stop event from bubbling up
                // });
        
                // Hide dropdown when clicking outside of it
                // document.addEventListener('click', function(event) {
                //     if (!typeFilter.contains(event.target) && !typeDropdown.contains(event.target)) {
                //         typeDropdown.classList.add('hidden');
                //     }
                // });

    });



