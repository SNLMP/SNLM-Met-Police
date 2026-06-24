document.addEventListener("DOMContentLoaded", () => {

    // Smooth page fade-in (optional if you use it in CSS)
    document.body.style.opacity = "1";

    /* =========================
       COMMAND TEAM IMAGE SYSTEM
       ========================= */

    const staffImages = {
        "T. Walker": "twalker.png",
        "C. White": "cwhite.png",
        "J. Johnson": "jjohnson.png",
        "J. Parrott": "jparrott.png",
        "M. Wallace": "mwallace.png",
        "M. Rainer": "mrainer.png",
        "C. Murray": "cmurray.png"
    };

    const cards = document.querySelectorAll(".card[data-name]");

    cards.forEach(card => {

        const name = card.dataset.name;
        const img = card.querySelector("img.profile");

        if (!name || !img) return;

        const fileName = staffImages[name];

        if (!fileName) {
            console.warn(`No image found for staff member: ${name}`);
            return;
        }

        // Auto-detect correct base path depending on page location
        const isInPagesFolder = window.location.pathname.includes("/pages/");
        const basePath = isInPagesFolder ? "../assets/team/" : "assets/team/";

        img.src = basePath + fileName;
        img.alt = name;

    });

});
