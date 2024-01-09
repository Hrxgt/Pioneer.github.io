// Function to scroll to the about section
function scrollToAbout() {
    const aboutSection = document.getElementById('projects');  
    if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
}
document.getElementById('work').addEventListener('click', scrollToAbout);

// Function to scroll to the skills section
function scrollToskills() {
    const aboutSection = document.getElementById('lang');  
    if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
}
document.getElementById('skills').addEventListener('click', scrollToskills);

// Function to scroll to the contact section
function scrollTocontact() {
    const aboutSection = document.getElementById('connect');  
    if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
}
document.getElementById('contact').addEventListener('click', scrollTocontact);