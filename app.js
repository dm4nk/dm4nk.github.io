const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');


function PageTransitions() {
    //Btn click active class
    for (let i = 0; i < sectBtn.length; ++i) {
        sectBtn[i].addEventListener('click', function () {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += 'active-btn';
        });
    }

    //Sections Active class
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;

        if (id) {
            //hide other sections
            sections.forEach((section) => {
                section.classList.remove('active');
            });

            //set clicked section active
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    });

    //Toggle theme
    const themeBTN = document.querySelector('.theme-btn');
    themeBTN.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode');
    });

    //Email
    emailjs.init('4ibVH95AjQ9oAtQBz');
    const submitBtn = document.querySelector('.submit-btn');
    const form = document.querySelector('.contact-form');
    const inputs = document.querySelectorAll('#user_name, #user_email, #subject, #message');
    submitBtn.addEventListener('click', function (event) {
        event.preventDefault();
        emailjs.sendForm('service_61u2pz6', 'template_t0om7ye', form)
            .then(function () {
                console.log('SUCCESS!');
            }, function (error) {
                console.log('FAILED...', error);
            });
        inputs.forEach(input => {
            input.value = '';
        });
    });
}

PageTransitions();