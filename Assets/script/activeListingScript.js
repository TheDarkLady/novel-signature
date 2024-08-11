document.addEventListener('DOMContentLoaded', function () {
    // Active listing page filter script
                // const maxPrice = document.getElementById('max-price');
                // const maxPriceDropdown = document.getElementById('max-price-dropdown');
                
                // if (maxPrice) {
                //     console.log("maxPrice element found");
                //     maxPrice.addEventListener('click', (event) => {
                //         console.log("max price is clicked");
                //         maxPriceDropdown.style.display = 'block';
                //         maxPriceDropdown.style.top = `${event.clientY}px`;
                //         maxPriceDropdown.style.left = `${event.clientX}px`;
                //     });
                // } else {
                //     console.error("maxPrice element not found");
                // }

                // Beds filter script
                const bedsAny = document.getElementById('beds-any');
                const beds1 = document.getElementById('beds-1');
                const beds2 = document.getElementById('beds-2');
                const beds3 = document.getElementById('beds-3');
                const beds4 = document.getElementById('beds-4');
                const beds5 = document.getElementById('beds-5');

                bedsAny.style.border = "1px solid #000000";
                beds1.style.border = "none";
                beds2.style.border = "none";
                beds3.style.border = "none";
                beds4.style.border = "none";
                beds5.style.border = "none";

                bedsAny.addEventListener('click', () => {
                    console.log("beds any is clicked");
                    bedsAny.style.border = "1px solid #000000";
                    beds1.style.border = "none";
                    beds2.style.border = "none";
                    beds3.style.border = "none";
                    beds4.style.border = "none";
                    beds5.style.border = "none";
                });

                beds1.addEventListener('click', () => {
                    bedsAny.style.border = "none";
                    beds1.style.border = "1px solid #000000";
                    beds2.style.border = "none";
                    beds3.style.border = "none";
                    beds4.style.border = "none";
                    beds5.style.border = "none";
                });
                beds2.addEventListener('click', () => {
                    bedsAny.style.border = "none";
                    beds1.style.border = "none";
                    beds2.style.border = "1px solid #000000";
                    beds3.style.border = "none";
                    beds4.style.border = "none";
                    beds5.style.border = "none";
                });
                beds3.addEventListener('click', () => {
                    bedsAny.style.border = "none";
                    beds1.style.border = "none";
                    beds2.style.border = "none";
                    beds3.style.border = "1px solid #000000";
                    beds4.style.border = "none";
                    beds5.style.border = "none";
                });
                beds4.addEventListener('click', () => {
                    bedsAny.style.border = "none";
                    beds1.style.border = "none";
                    beds2.style.border = "none";
                    beds3.style.border = "none";
                    beds4.style.border = "1px solid #000000";
                    beds5.style.border = "none";
                });
                beds5.addEventListener('click', () => {
                    bedsAny.style.border = "none";
                    beds1.style.border = "none";
                    beds2.style.border = "none";
                    beds3.style.border = "none";
                    beds4.style.border = "none";
                    beds5.style.border = "1px solid #000000";
                });
})