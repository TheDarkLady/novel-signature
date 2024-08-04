//  script for header on scroll backgronud blur starts
document.addEventListener('DOMContentLoaded', function () {
            const header = document.getElementsByTagName('header')[0];

            window.addEventListener('scroll', function () {
                if (window.scrollY > 0) {
                    // console.log(window.scrollY)
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });
        });

// script for header on scroll backgronud blur ends
