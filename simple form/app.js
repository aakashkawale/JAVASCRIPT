function animatedForm() {
    const arrows = document.querySelectorAll(".fa-arrow-alt-circle-down");

    arrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;

            //check 
            if (input.type === "text" && validuser(input)) {
                nextslide(parent, nextForm);
            } else if (input.type === 'email' && validemail(input)) {
                nextslide(parent, nextForm);
            } else if (input.type === "password" && validuser(input)) {
                nextslide(parent, nextForm);
            } else {
                parent.style.animation = "shake 0.5s ease"
            }
            parent.addEventListener('animationend', () => {
                parent.style.animation = "";
            })
        });
    });

}

function validuser(user) {
    if (user.value.length < 6) {
        console.log("min 6 char");
        error("rgb(189, 87, 87");
    } else {
        error("rgb(87, 189, 130");
        return true;
    }
}

function validemail(email) {
    const validatiom = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (validatiom.test(email.value)) {
        error("rgb(87, 189, 130");
        return true;
    } else {
        error("rgb(189, 87, 87");

    }
}

function nextslide(parent, nextForm) {
    parent.classList.add('inactive');
    parent.classList.remove('active');
    nextForm.classList.add('active');
}

function error(color) {
    document.body.style.backgroundColor = color;
}

animatedForm();