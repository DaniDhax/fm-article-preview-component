const buttonShare = document.getElementById("button-share");
const userCardSection = document.querySelector(".user-card-section");
const colorSvg = document.querySelector('#icon-share-svg path');
const userDiv = document.querySelector('.user');
const mobileSocialMediaDiv = document.querySelector('.mobile-social-media-div')
const desktopSocialMediaDiv = document.querySelector('.desktop-social-media-div') 

function mobileButtonShareHandler() {
    if (userCardSection.style.backgroundColor !== "var(--very-dark-grayish-blue)") {
        userCardSection.style.backgroundColor = "var(--very-dark-grayish-blue)";
        userDiv.style.display = 'none'
        mobileSocialMediaDiv.style.display = 'flex'
      } else {
        userCardSection.style.backgroundColor = "white";
        userDiv.style.display = 'flex'
        mobileSocialMediaDiv.style.display = 'none'
      }
}

function desktopButtonShareHandler() {
    if (colorSvg.getAttribute('fill') === '#6E8098') {
        colorSvg.setAttribute('fill', 'white');
        buttonShare.style.backgroundColor = 'var(--very-dark-grayish-blue)';
        desktopSocialMediaDiv.style.display = 'flex'
      } else {
        colorSvg.setAttribute('fill', '#6E8098');
        buttonShare.style.backgroundColor = 'var(--light-grayish-blue)';
        desktopSocialMediaDiv.style.display = 'none'
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
