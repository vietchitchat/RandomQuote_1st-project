// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


//Create 5 objects in an array containing 2 properties quote and source
var quotes = [
{
	quote: "Life is really simple, but we insist on making it complicated.",
	source: "Confucius",
	tag: "life"
},
{
	quote: "Life isn't about finding yourself. Life is about creating yourself." ,
	source: "George Bernard Shaw",
	tag: "inspiration"
},
{
	quote: "We do not remember days, we remember moments.",
	source: "Cesare Pavese",
	tag: "life"
},
{
	quote: "There is only one happiness in this life, to love and be loved.",
    source: "George Sand",
    tag: "love"
},
{
	quote: "A hero is someone who has given his or her life to something bigger than oneself.",
	source: "Joseph Campbell",
	tag: "success"
}
];
//With function getRandomQuote, we get random quotes each time we run the program
var chosenQuote = [];
function getRandomQuote() {
	var randomQuote = Math.floor(Math.random() * quotes.length); 
   var splicedQuote = quotes.splice(randomQuote, 1)[0]; //remove a random quote
   chosenQuote.push(splicedQuote); //store the removed quote in chosenQuote until the array is empty
   if (quotes.length === 0) { //if the array is empty, reload the quotes variable with removed items from chosenQuote
       quotes = chosenQuote;
       chosenQuote = []; //set the chosenQuote empty again
   } 
   return splicedQuote;
}

//Replace the content that already existed in HTML file with the array created in var quotes
function printQuote() {
var getQuote = getRandomQuote();
var quoteText = "<p class='quote'>" + getQuote.quote + "</p>";
quoteText += "<p class='source'>" + getQuote.source;
 if (getQuote.citation === true) {
  quoteText += '<span class="citation">' + getQuote.citation + '</span>';
}
if (getQuote.year === true) {
  quoteText += '<span class="year">' + getQuote.year + '</span>';
}
quoteText += " " + "(" + getQuote.tag + ")";
quoteText += '</p>';

document.getElementById('quote-box').innerHTML = quoteText;

changeColor(); //call function changeColor to change background color along with the random quote when clicking the button

}

//Change background color randomly using Math.random method
function changeColor(){
	var colors = ['red','blue','green','orange','pink'];
	var randomColor = Math.floor(Math.random() * colors.length);
	document.body.style.backgroundColor = colors[randomColor];
}

// In every 5 seconds, the quotes will automatically change without clicking the button
setInterval(printQuote,5000);
