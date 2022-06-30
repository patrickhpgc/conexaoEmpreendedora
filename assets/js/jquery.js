let accordion = $(".accordion");
let i;
let buttonReleased = true;

for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.padding === "35px") {
            $("i", this).css('transition', '0.4s');
            $("i", this).css('transform', 'rotate(0deg)');
            panel.style.transition = "0.4s";
            panel.style.height = "0px";
            panel.style.padding = "0px";
        } else {
            $("i", this).css('transition', '0.4s');
            $("i", this).css('transform', 'rotate(180deg)');
            panel.style.transition = "0.4s";
            panel.style.height = "auto";
            panel.style.padding = "35px";
        }
    });
}

// efect zoom in card 3
$('.card-3').each(function () {
    $(this).mouseenter(function () {
        $('img', this).css('transition', '0.2s')
        $('img', this).css('transform', 'scale(1.1)')
        $('div:nth-child(2)', this).css('color', 'var(--grey)')
    });
})
$('.card-3').each(function () {
    $(this).mouseleave(function () {
        $('img', this).css('transition', '0.2s')
        $('img', this).css('transform', 'scale(1)')
        $('div:nth-child(2)', this).css('color', 'black')
    });
})

// div contact
$('.div-contact').mouseenter(function () {
    buttonReleased = false;
    enableButton();
})
$('.div-contact').mouseleave(function () {
    buttonReleased = true;
    disableButton();
})

function enableButton() {
    $('.div-contact').css('border-radius', '8px');
    $('.div-contact-left').css('transition', '0.4s');
    $('.div-contact-left').css('width', 'auto');
    $('.div-contact-left span').css('margin-right', '20px');
    $('.div-contact-left span').html('Ficou com alguma dúvida? Nos chame no whatsapp.');
}

function disableButton() {
    $('.div-contact-left').css('transition', '0.4s');
    $('.div-contact-left').css('width', '0');
    $('.div-contact-left span').css('margin-right', '0');
    $('.div-contact').css('border-radius', '50%');
    $('.div-contact-left span').html('');
}


setTimeout(function () {
    if(buttonReleased) {
        enableButton();
        setTimeout(() => {
            if(buttonReleased) {
                disableButton();
            }
        }, 7000);
    }
}, Math.floor(Math.random() * 20000) + 10000);
