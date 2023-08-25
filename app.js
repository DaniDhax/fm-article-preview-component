const buttonShare = document.getElementById("button-share");
const userCardSection = document.querySelector(".user-card-section");
const colorSvg = document.querySelector('#icon-share-svg path');
const userDiv = document.querySelector('.user');
const mobileSocialMediaDiv = document.querySelector('.mobile-social-media-div')
const desktopSocialMediaDiv = document.querySelector('.desktop-social-media-div') 
const rombo = document.querySelector(".rombo");

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
        rombo.style.display = 'block'
      } else {
        colorSvg.setAttribute('fill', '#6E8098');
        buttonShare.style.backgroundColor = 'var(--light-grayish-blue)';
        desktopSocialMediaDiv.style.display = 'none'
        rombo.style.display = 'none'
      }
}

function buttonShareHandler() {
    if (window.innerWidth < 1000) {
        mobileButtonShareHandler();
      } else {
        desktopButtonShareHandler();
      }
}


//Resetea (recarga) la página cuando cambia entre los tamaños
//que hemos definido en la media query (100px)
let previousWidth = window.innerWidth;

function handleResize() {
  const windowWidth = window.innerWidth;

  // Verificar si hubo un cambio de estado
  if ((previousWidth < 1000 && windowWidth >= 1000) ||
      (previousWidth >= 1000 && windowWidth < 1000)) {
    location.reload();
  }

  // Actualizar el valor de previousWidth
  previousWidth = windowWidth;
}


buttonShare.addEventListener("click", buttonShareHandler);

window.addEventListener('resize', handleResize);