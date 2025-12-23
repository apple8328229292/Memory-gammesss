const cards = document.querySelectorAll(".memory-card");
let hasFlippedCard = false;
let lockBoard = false;
let firstCard , secondCard;

function resetBoard(){
    firstCard = null;
    secondCard = null;
    hasFlippedCard = false;
    lockBoard = false;
}

function unflipCards(){
    lockBoard = true;       
    setTimeout(() =>{
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        resetBoard();
    }, 1500)
}

function disableCards(){
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    resetBoard()
}




function checkForMatch(){
    const firstCardSrc = firstCard.querySelector(".front-face").src;
    const secondCardSrc = secondCard.querySelector(".front-face").src;
    isMatch = firstCardSrc === secondCardSrc;
    isMatch ? disableCards() : unflipCards();
}

function flipCard(){
    if (lockBoard) return;
    if (this === firstCard) return;
    
    this.classList.add("flip");
    if (hasFlippedCard == false){
        hasFlippedCard = true;
        firstCard = this;
        return;
    }else{
        secondCard = this;
        checkForMatch();
    }
}

function shuffle(){
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 8);
        card.style.order = randomPos;
    });
}
shuffle()
cards.forEach(card => card.addEventListener("click", flipCard))