document.addEventListener('DOMContentLoaded', function () {
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

})