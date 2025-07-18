const quoteText = document.getElementById("quote");
const newQuoteBtn = document.getElementById("new-quote");

const quotes = [
  "Believe you can and you're halfway there.",
  "Do what you can, with what you have, where you are.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Don't watch the clock; do what it does. Keep going.",
  "The best way to get started is to quit talking and begin doing.",
  "It always seems impossible until it's done.",
  "Great things never come from comfort zones.",
  "Push yourself, because no one else is going to do it for you.",
  "Dream it. Wish it. Do it.",
  "Stay hungry, stay foolish."
];
function getRandomColor() {
  const r = Math.floor(Math.random()*256);// Red: 0-255
  const g = Math.floor(Math.random()*256);// Green: 0-255
  const b = Math.floor(Math.random()*256);// Blue: 0-255
  return `rgb(${r},${g},${b})`; 
}

newQuoteBtn.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.classList.remove("show");
    setTimeout(() =>{
    quoteText.textContent = quotes[randomIndex];
    quoteText.style.color = getRandomColor();
    document.body.style.backgroundColor = getRandomColor();

    quoteText.classList.add("show");

    quoteText.classList.remove("bounce");
    void quoteText.offsetWidth;
    quoteText.classList.add("bounce");

    }, 100)
    

    
    
});
// console.log(Math.random())

