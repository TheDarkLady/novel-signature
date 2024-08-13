document.querySelectorAll('details summary').forEach((summary) => {
    summary.addEventListener('click', function () {
        const svg = this.querySelector('svg');
        svg.classList.toggle('rotate-180');
    });

    const img = document.querySelector('.floor-plan-img');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                img.style.transform = 'rotate(0deg)';
            }
        });
    });

    observer.observe(img);
});