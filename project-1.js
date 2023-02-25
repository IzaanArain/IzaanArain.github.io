//variables

let quotebtn =document.querySelector("#new-quote")
let searchBtn=document.querySelector('#search-Button')
let quote=document.querySelector('.quote');
let person=document.querySelector('.person');
let filter=document.getElementById('filter')

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

// fetch("https://type.fit/api/quotes")
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(data) {

//     // console.log(data);

//     searchBtn.addEventListener('click',()=>{

//     })

//     quotebtn.addEventListener('click',function ChangeQuote(){
//         let random=Math.floor(Math.random()*data.length);
//         // console.log(`Quote: ${data[random].text}`);
//         // console.log(`Author: ${data[random].author}`);
//         quote.innerText=data[random].text
//         person.innerText=`Author : - ${data[random].author}`
//         // person.innerText=quotes[random].person
//     })

//   });

async function fetchQuotes(){
  const response=await fetch("https://type.fit/api/quotes")
  const data =await response.json();
  return data;
}

fetchQuotes()
.then(data=>{

  searchBtn.addEventListener('click',()=>{
    let searchItem=filter.value;
    console.log(searchItem);
    console.log(data.length);

    // const searchIndex = data.findIndex((item) => item.author==searchItem);//Jacob Braude
    // console.log(`Author: ${data[searchIndex].author}`)
    // console.log(`text: ${data[searchIndex].text}`)
    // person.innerText=data[searchIndex].author;
    // quote.innerText=data[searchIndex].text;
    
    const searchAuthor = data.find((item) => item.author==searchItem);//Jacob Braude
    console.log(`Author: ${searchAuthor.author}`)
    console.log(`text: ${searchAuthor.text}`)
    person.innerText=searchAuthor.author;
    quote.innerText=searchAuthor.text;
  });

  quotebtn.addEventListener('click',function ChangeQuote(){
    let random=Math.floor(Math.random()*data.length);
    // console.log(`Quote: ${data[random].text}`);
    // console.log(`Author: ${data[random].author}`);
    quote.innerText=data[random].text
    person.innerText=`Author : - ${data[random].author}`
    // person.innerText=quotes[random].person
  })
})



// btn.addEventListener('click',function(){
//     let random=Math.floor(Math.random()*quotes.length);
//     quote.innerText=quotes[random].quote
//     person.innerText=quotes[random].person
// })


