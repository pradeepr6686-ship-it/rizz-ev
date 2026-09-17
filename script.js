console.log("Website Loaded Successfully");

const sections = document.querySelectorAll(
'.features, .technology, .future-section, .growth-section, .journey-section, .investor-section, .how-it-works, .testimonials, .contact-section'
);

window.addEventListener('scroll', () => {

    sections.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;

        if(sectionTop < window.innerHeight - 100){
            section.classList.add('show');
        }

    });

});

window.dispatchEvent(new Event('scroll'));