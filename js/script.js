//menambahkan interaktifitas pada website
//menggunakan javascript
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    header.addEventListener('click', function() {
        alert('Selamat Datang :)');
    });
});

//menambahkan efek hover pada proyek
const project = document.querySelectorAll('.project');
project.forEach((project) => {
    project.addEventListener('mouseover', function() {
        project.style.backgroundColor = 'f0f0f0';
    });
    project.addEventListener('mouseleave', function() {
        project.style.backgroundColor = '';
    });
});


//menambahkan validasi sederhana pada form kontak
const contactForm = document.querySelector('.contact-form'); 
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        const emailInput = document.querySelector('.#contact-form input[name="email"]');
        if (!emailInput.value.includes('@')) '') {
            alert('Harap masukan alamat email yang valid');
            event.preventDefault();
        }
    });
