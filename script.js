var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for(tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}

// Typing Animation
document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed("#element", {
        strings: [
            "Full Stack Developer",
            "AI/ML Learner",
            "Cyber Security Enthusiast"
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});

// Form Submission
const scriptURL = 'YOUR_GOOGLE_SHEET_API_URL'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            form.reset()
            alert("Thanks for Contacting me! I will get back to you soon.")
        })
        .catch(error => console.error('Error!', error.message))
})