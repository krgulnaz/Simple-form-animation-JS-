function animatedForm() {
    const arrows = document.querySelectorAll(".fa-arrow-down");
    arrows.forEach(arrow => (property); arrow.addEventListener(

        const input = arrow.previousElementSibling;
        const parent = arrow.parentElement;
        const nextForm = parent.nextElementSibling; console.log(parent);
    });
});
}

function validateUser(user) {
    if (user.value.length < 6) {
        console.log('not enough character');
        console.error('rgb(189, 87, 87');
    } else {
        error('rgb(87, 189, 130)');
        return true;
    }
}

function error(color) {
    document.body.style.borderColor = color;
}