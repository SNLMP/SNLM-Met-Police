window.addEventListener("load", () => {

    document.body.style.opacity = "1";

    /* COMMAND TEAM IMAGE SYSTEM */

    const staffImages = {

        "T. Walker": "twalker.png",
        "C. White": "cwhite.png",
        "J. Johnson": "jjohnson.png",
        "J. Parrott": "jparrott.png",
        "M. Wallace": "mwallace.png",
        "M. Rainer": "mrainer.png",
        "C. Murray": "cmurray.png"

    };

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        const name = card.dataset.name;
        const image = card.querySelector(".profile");

        if (staffImages[name] && image) {

            image.src = "../assets/team/" + staffImages[name];
            image.alt = name;

        }

    });

});
