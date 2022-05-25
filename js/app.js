const sections = document.querySelectorAll('section');
const ulId = document.getElementById("navbar__list");



//displaying the navebar
function navBar() {
    // fragments  
    const fragmentsToAddAnchor = document.createDocumentFragment();
    // ./fragments
    for (const section of sections) {
        const list = document.createElement("li");
        const idSection = section.getAttribute('id');
        const DataNavSection = section.getAttribute('data-nav');
        list.innerHTML = `<a class="menu__link" href="#${idSection}" data-nav="${DataNavSection}">${DataNavSection}</a>`
        fragmentsToAddAnchor.appendChild(list);
    }
    ulId.appendChild(fragmentsToAddAnchor);


}



//Smooth Scroll
function smoothScroll() {
    const naves = document.querySelectorAll('.menu__link');
    naves.forEach((nav, i) => {
        nav.addEventListener('click', function (event) {
            event.preventDefault();
            sections[i].scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        });
    });
}



//active section and active link using getboundingclient

// Helping Methods
function active() {
    const naves = document.querySelectorAll(".menu__link");
    // looping inside sections to make active class to both (section , anchor)
    sections.forEach(function (section, index) {
        let ratioOfWindow = window.innerHeight * 20 / 100;
        // ? condition if section on screen
        if (section.getBoundingClientRect().top < ratioOfWindow && section.getBoundingClientRect().bottom > ratioOfWindow) {
            // ? check section has an active class or not
            if (!section.classList.contains("your-active-class")) {
                // add section active class
                section.classList.add("your-active-class");
                // add anchor active class
                naves[index].classList.add("active");
            }
            // ? ./check section has an active class or not
        } else if (section.classList.contains("your-active-class")) {
            // remove section active class
            section.classList.remove("your-active-class");
            // remove anchor active class 
            naves[index].classList.remove("active");
        }
        // ? ./ condition if section on screen 
    });

}
// ./Helping Methods

// section.classList.add("your-active-class");
function displayActive() {
    // scrolling into all page and custom specific section to make active
    document.addEventListener('scroll', active);
    // ./scrolling into all page and custom specific section to make active
}



//add the top button
myButton = document.getElementById("myBtn");

function topButton() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
//./add the top button


// creating navBars anchors
navBar();
// ./creating navBars anchors

// adding class active to both (section, anchor)
displayActive();
// ./adding class active to both (section, anchor)

// remove click and scrolling to section smoothly
smoothScroll();
// ./remove click and scrolling to section smoothly

// button click go top
topButton();
// ./button click go top