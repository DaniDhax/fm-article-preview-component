const buttonShare = document.getElementById("button-share");
const userCardSection = document.querySelector('.user-card-section')

function buttonShareHandler() {
  
    (userCardSection.style.backgroundColor === 'var(--very-dark-grayish-blue)') ?
        userCardSection.style.backgroundColor = 'white'
        :
        userCardSection.style.backgroundColor = 'var(--very-dark-grayish-blue)';
}

buttonShare.addEventListener("click", buttonShareHandler);
