const quotes = [
    {
      text: "The best way to predict your future is to create it.",
      author: "Abraham Lincoln"
    },
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      text: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt"
    },
    {
      text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      author: "Winston Churchill"
    },
    {
      text: "Happiness is not something ready made. It comes from your own actions.",
      author: "Dalai Lama"
    },
    {
      text: "The only thing necessary for the triumph of evil is for good men to do nothing.",
      author: "Edmund Burke"
    },
    {
      text: "You miss 100% of the shots you don't take.",
      author: "Michael Scott"
    }
  ];

  const quoteBox = document.querySelector('.quote-box');
  const text = document.getElementById('text');
  const author = document.getElementById('author');
  const newQuoteBtn = document.getElementById('new-quote');

  function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }

  function setQuote() {
    const randomQuote = getRandomQuote();
    text.textContent = randomQuote.text;
    author.textContent = "- " + randomQuote.author;
  }

  newQuoteBtn.addEventListener('click', setQuote);

  setQuote();