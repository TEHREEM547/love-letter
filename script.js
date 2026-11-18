
let message = `Every moment with you is special.
You are the reason behind my smile.
I feel lucky to have you in my life.

You make my world beautiful.
No matter how far we are,
you will always live in my heart.

I promise to care for you,
to support you and to love you
with all my heart.

You are my today, my tomorrow
and my forever.

I LOVE YOU SO MUCH! ❤️`;

let index = 0;

function openLetter() {

    let envelope = document.getElementById("envelope");
    let button = document.getElementById("openBtn");
    let text = document.getElementById("loveText");

    if (envelope.classList.contains("open")) {
        return;
    }

    envelope.classList.add("open");

    button.innerHTML = "Letter Opened ❤️";
    button.disabled = true;

    setTimeout(function () {
        typeWriter();
    }, 1200);
}

function typeWriter() {

    let text = document.getElementById("loveText");

    if (index < message.length) {

        if (message.charAt(index) === "\n") {
            text.innerHTML += "<br>";
        } else {
            text.innerHTML += message.charAt(index);
        }

        index++;

        setTimeout(typeWriter, 45);
    }
}
