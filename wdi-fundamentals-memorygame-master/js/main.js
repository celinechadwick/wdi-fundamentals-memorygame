 console.log("Up and running!");
var cards = [];
var cardsInPlay = [
{rank:"Queen",
suit:"Hearts",
cardImage:"images/queen-of-hearts.png",
},
{rank:"Queen",
suit: "diamonds",
cardImage:"images/queen-of-diamonds.png",
},
{rank:"king",
suit:"hearts",
cardImage:"images/king-of-hearts.png",
},
{rank:"king",
suit:"diamonds",
cardImage:"images/king-of-diamonds.png",
}];
var checkForMatch = function() {
if (cardsInPlay[0] === cardsInPlay[1]) {
      console.log("You found a match!");
  } else {
      console.log("Sorry, try again.");
  };
var flipCard = function() {
var cardId = this.getAttribute('data-id');
this.setAttribute('src', cards[cardId].cardImage);
if (cardsInPlay.length === 2 && cardsInPlay[0]===cardsInPlay[1])
	alert("You found a match!");
else {
	alert("Sorry, try again"); 
		console.log("user flipped " + cards[cardId].rank);
	};	
var createBoard = function() {
	  for (var i = 0; i < cards.length; i++) {
var cardElement = document.createElement('img');
cardElement.setAttribute('img','images/back.png');
cardElement.setAttribute('data-id',i);
cardElement.addEventListener('click', 'flipCard');
cardElement.appendChild(game-board);
};
};
cardsInPlay.push(cards[cardId].rank);
checkForMatch();
console.log(cardsInPlay.cardImage);
console.log(cardsInPlay.suit);
cardsInPlay.suit();
createBoard();