document.addEventListener('DOMContentLoaded', function () {
    const soldPropertiesDallas = document.getElementById('sold-properties-dallas');
    const soldPropertiesHouston = document.getElementById('sold-properties-houston');
    const soldPropertiesAustin = document.getElementById('sold-properties-austin');
    const soldPropertiesSanantonio = document.getElementById('sold-properties-sanantonio');
    const dallas = document.querySelectorAll('.dallas');
    const houston = document.querySelectorAll('.houston');
    const austin = document.querySelectorAll('.austin');
    const sanantonio = document.querySelectorAll('.sanantonio');
    const soldPropertiesMobDallas= document.getElementById('sold-properties-mob-dallas')
    const soldPropertiesMobHouston= document.getElementById('sold-properties-mob-houston')
    const soldPropertiesMobAustin= document.getElementById('sold-properties-mob-austin')
    const soldPropertiesMobSanantonio= document.getElementById('sold-properties-mob-sanantonio')


    soldPropertiesDallas.addEventListener('click', () => {
        dallas.forEach((element) => {
            element.style.display = "block";
        });
        houston.forEach((element) => {
            element.style.display = "none";
        });
        austin.forEach((element) => {
            element.style.display = "none"; 
        });
        sanantonio.forEach((element) => {
            element.style.display = "none"; 
        });
    })

    soldPropertiesHouston.addEventListener('click', () => {
        houston.forEach((element) => {
            element.style.display = "block";
        });
        dallas.forEach((element) => {
            element.style.display = "none";
        });
        austin.forEach((element) => {   
            element.style.display = "none";
        });
        sanantonio.forEach((element) => {
            element.style.display = "none";
        });
    }) 

    soldPropertiesAustin.addEventListener('click', () => {
        austin.forEach((element) => {
            element.style.display = "block";
        });
        dallas.forEach((element) => {
            element.style.display = "none";
        });
        houston.forEach((element) => {
            element.style.display = "none";
        }); 
        sanantonio.forEach((element) => {
            element.style.display = "none";
        });
    })

    soldPropertiesSanantonio.addEventListener('click', () => {
        sanantonio.forEach((element) => {
            element.style.display = "block";
        });
        dallas.forEach((element) => {
            element.style.display = "none";
        });
        houston.forEach((element) => {
            element.style.display = "none";
        });
        austin.forEach((element) => {
            element.style.display = "none";
        });
    })

    soldPropertiesMobDallas.addEventListener('click', () => {
        soldPropertiesMobDallas.style.borderBottom = "1px solid #fff";
        soldPropertiesMobAustin.style.borderBottom = "none";
        soldPropertiesMobHouston.style.borderBottom = "none";
        soldPropertiesMobSanantonio.style.borderBottom = "none";
        dallas.forEach((element) => {
            element.style.display = "block";
        });
        houston.forEach((element) => {
            element.style.display = "none";
        });
        austin.forEach((element) => {
            element.style.display = "none"; 
        });
        sanantonio.forEach((element) => {
            element.style.display = "none"; 
        });
    })

    soldPropertiesMobHouston.addEventListener('click', () => {
        soldPropertiesMobHouston.style.borderBottom = "1px solid #fff";
        soldPropertiesMobDallas.style.borderBottom = "none";
        soldPropertiesMobAustin.style.borderBottom = "none";
        soldPropertiesMobSanantonio.style.borderBottom = "none";
        houston.forEach((element) => {
            element.style.display = "block";
        });
        dallas.forEach((element) => {
            element.style.display = "none";
        });
        austin.forEach((element) => {
            element.style.display = "none";
        });
        sanantonio.forEach((element) => {
            element.style.display = "none";
        });
    })

    soldPropertiesMobAustin.addEventListener('click', () => {
        soldPropertiesMobAustin.style.borderBottom = "1px solid #fff";
        soldPropertiesMobDallas.style.borderBottom = "none";
        soldPropertiesMobHouston.style.borderBottom = "none";
        soldPropertiesMobSanantonio.style.borderBottom = "none";
        austin.forEach((element) => {
            element.style.display = "block";
        });
        dallas.forEach((element) => {   
            element.style.display = "none";
        }); 
        houston.forEach((element) => {
            element.style.display = "none";
        });
        sanantonio.forEach((element) => {
            element.style.display = "none";
        });
    })

    soldPropertiesMobSanantonio.addEventListener('click', () => {
        soldPropertiesMobSanantonio.style.borderBottom = "1px solid #fff";
        soldPropertiesMobDallas.style.borderBottom = "none";
        soldPropertiesMobHouston.style.borderBottom = "none";
        soldPropertiesMobAustin.style.borderBottom = "none";
        sanantonio.forEach((element) => {
            element.style.display = "block";
        });
        dallas.forEach((element) => {
            element.style.display = "none";
        });
        houston.forEach((element) => {
            element.style.display = "none";
        });
        austin.forEach((element) => {
            element.style.display = "none";
        });
    })
});