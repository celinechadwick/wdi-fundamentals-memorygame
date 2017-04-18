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
cardImage:"images/king-of-hearts.png"
}
{rank:"king",
suit:"diamonds",
cardImage:"images/king-of-diamonds.png"
}];
var checkForMatch = function() {
if (cardsInPlay[0] === cardsInPlay[1]) {
      console.log("You found a match!");
  } else {
      console.log("Sorry, try again.");
  };
var flipCard = function(cardId) {
if (cardsInPlay.length === 2 && cardsInPlay[0]===cardsInPlay[1])
	alert("You found a match!");
else {
	alert("Sorry, try again"); 
		console.log("user flipped " + cards[cardId].rank);
	};	
cardsInPlay.push(cards[cardId].rank);
};
flipCard(0);
flipCard(2);
checkForMatch();
};
console.log(cardImage);
console.log(suit);
