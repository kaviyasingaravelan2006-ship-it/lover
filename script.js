// ==============================
// FLOATING HEARTS
// ==============================

function createHeart() {

    const heart =
        document.createElement("div");

    heart.className = "heart";

    const heartList = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💘",
        "💝",
        "🥰"
    ];

    heart.innerHTML =
        heartList[
            Math.floor(
                Math.random() *
                heartList.length
            )
        ];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (15 + Math.random() * 25) + "px";

    heart.style.animationDuration =
        (3 + Math.random() * 3) + "s";

    document.body.appendChild(heart);

    setTimeout(function () {

        heart.remove();

    }, 6000);
}


setInterval(createHeart, 500);


// ==============================
// WELCOME PAGE
// ==============================

function startStory() {

    const message =
        document.getElementById(
            "welcomeMessage"
        );

    message.innerHTML =
        "Awwww... I knew you would say YES! 🥹❤️";

    message.style.marginTop =
        "20px";

    message.style.color =
        "#c2185b";

    message.style.fontWeight =
        "bold";

    setTimeout(function () {

        window.location.href =
            "/quiz";

    }, 1800);
}


// ==============================
// QUIZ
// ==============================

function correctAnswer() {

    const answer =
        document.getElementById(
            "answer"
        );

    answer.innerHTML =
        "Yesss! ❤️ You remembered! Every little moment with you is precious to me. 🥹💕";

}


function wrongAnswer() {

    const answer =
        document.getElementById(
            "answer"
        );

    answer.innerHTML =
        "Hehe 😜 Maybe you forgot... but don't worry, I'll make many more beautiful memories with you. ❤️";

}


// ==============================
// OPEN GIFT
// ==============================

function openGift() {

    const gift =
        document.getElementById(
            "gift"
        );

    const message =
        document.getElementById(
            "finalMessage"
        );

    gift.innerHTML =
        "💖";

    gift.style.animation =
        "none";

    message.style.display =
        "block";


    for (
        let i = 0;
        i < 30;
        i++
    ) {

        setTimeout(
            function () {

                createHeart();

            },
            i * 100
        );
    }

}


// ==============================
// FINAL LOVE MESSAGE
// ==============================

function finalLove() {

    const lastMessage =
        document.getElementById(
            "lastMessage"
        );

    lastMessage.innerHTML =
        "Whatever happens, I hope we always find our way back to each other. ❤️🥹";

    for (
        let i = 0;
        i < 20;
        i++
    ) {

        setTimeout(
            function () {

                createHeart();

            },
            i * 100
        );
    }

}