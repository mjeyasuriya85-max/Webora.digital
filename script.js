
/* =====================================
   WEBORA DIGITAL - INTERACTIONS
===================================== */

// 1. MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    menuToggle.textContent =
        navLinks.classList.contains("active") ? "✕" : "☰";

});


// 2. CLOSE MENU AFTER CLICKING A LINK

const navItems = document.querySelectorAll("#navLinks a");

navItems.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";

    });

});


// 3. CLOSE MENU WHEN CLICKING OUTSIDE

document.addEventListener("click", (event) => {

    const clickedInsideMenu = navLinks.contains(event.target);
    const clickedToggle = menuToggle.contains(event.target);

    if (!clickedInsideMenu && !clickedToggle) {

        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";

    }

});


// 4. UPDATE FOOTER YEAR

const footerText = document.querySelector("footer p");

if (footerText) {

    footerText.textContent =
        `© ${new Date().getFullYear()} WEBORA DIGITAL. All rights reserved.`;

}


// 5. SMOOTH SCROLL

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", function(event) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// 6. CONSOLE BRAND MESSAGE

console.log(
    "%cWEBORA DIGITAL",
    "color: #D6AD60; font-size: 25px; font-weight: bold;"
);

console.log("Turning Ideas Into Digital Experiences.");
