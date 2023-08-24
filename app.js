const buttonShare = document.getElementById("button-share");
const userCardSection = document.querySelector(".user-card-section");

function mobileButtonShareHandler() {
    if (userCardSection.style.backgroundColor !== "var(--very-dark-grayish-blue)") {
        userCardSection.style.backgroundColor = "var(--very-dark-grayish-blue)";
      } else {
        userCardSection.style.backgroundColor = "white";
      }
}

function desktopButtonShareHandler() {
    if (userCardSection.style.backgroundColor !== "var(--very-dark-grayish-blue)") {
        userCardSection.style.backgroundColor = "var(--very-dark-grayish-blue)";
      } else {
        userCardSection.style.backgroundColor = "white";
      }
}


function buttonShareHandler() {
    if (window.innerWidth < 1000) {
        mobileButtonShareHandler();
      } else {
        desktopButtonShareHandler();
      }
}

buttonShare.addEventListener("click", buttonShareHandler);
