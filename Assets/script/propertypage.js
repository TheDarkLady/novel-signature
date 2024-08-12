document.querySelectorAll('details summary').forEach((summary) => {
    summary.addEventListener('click', function () {
        const svg = this.querySelector('svg');
        svg.classList.toggle('rotate-180');
    });
});