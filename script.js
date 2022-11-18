const adviceId = document.querySelector('.advice-no');
const quote = document.querySelector('.quote');
const button = document.querySelector('.dice-container');

const url = "https://hindi-quotes.vercel.app/random";

onload= function () {
  getQuotes();
}

button.addEventListener('click', ()=>{
  getQuotes();
})

function getQuotes() {
  fetch(url).then(response => response.json()).then(data =>{
    adviceId.innerHTML = data.type;
    quote.innerHTML = data.quote;
    console.log(adviceId.innerHTML);
  });
}
