//variables

let btn =document.querySelector("#new-quote")
let quote=document.querySelector('.quote');
let person=document.querySelector('.person')

const quotes=[
    {
        quote:'“The greatness of humanity is not in being human, but in being humane.”',
        person:"Mahatma Gandh"
    },
    {
        quote:'“I greet you all in the name of peace, democracy and freedom for all. I stand here before you not as a prophet, but as a humble servant of you, the people. Your tireless and heroic sacrifices have made it possible for me to be here today. I therefore place the remaining years of my life in your hands.”',
        person:"Nelson Mandela "
    },
    {
        quote:'“Think a hundred times before you take a decision, but once that decision is taken, stand by it as one man.”',
        person:"Muhammad Ali Jinnah"
    },
    {
        quote:'Rise above sectional interests and private ambitions... Pass from matter to spirit. Matter is diversity; spirit is light, life and unity.',
        person:"Allama Muhammad Iqbal"
    },
    {
        quote:'“I am not bound to win, but I am bound to be true. I am not bound tosucceed, but I am bound to live up to what light I have.”',
        person:"Abraham Lincoln"
    },
    {
        quote:'"Now this is not the end. It is not even the beginning of the end. But it is, perhaps, the end of the beginning."',
        person:"Winston Churchill"
    }
]

fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    btn.addEventListener('click',function(){
        let random=Math.floor(Math.random()*data.length);
        quote.innerText=data[random].text
        // person.innerText=quotes[random].person
    })
  });

// btn.addEventListener('click',function(){
//     let random=Math.floor(Math.random()*quotes.length);
//     quote.innerText=quotes[random].quote
//     person.innerText=quotes[random].person
// })


