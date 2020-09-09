const quotes = [
    {
        name: "Monkey D luffy",
        quote: "I Decided To Be Pirate King. I Don’t Care If I Die For It."
    },
    {
        name: "Monkey D luffy",
        quote:  "If you don’t like the hand that fate’s dealt you with, fight for a new one."
    },
    {
        name: "Madara Uchiha",
        quote:  "The longer you live… The more you realize that reality is just made of pain, suffering and emptiness…"
    },
    {
        name: "Itachi Uchiha",
        quote:  "People live their lives bound by what they accept as correct and true. That's how they define 'reality'"
    },
    {
        name: "Vishal K Mishra",
        quote: "I'll be Software Developer Engineer no matter how many time i have to try"
    }
]

const quoteBtn = document.querySelector("#quoteBtn");
const quote = document.querySelector("#quote")
const quoteAuthor = document.querySelector("#quoteAuthor")

quoteBtn.addEventListener("click",displayQuote)

function displayQuote(){
    let number = Math.floor(Math.random()*quotes.length)
    quote.innerHTML = quotes[number].quote
    quoteAuthor.innerHTML = quotes[number].name
}