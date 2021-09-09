let contaner=document.querySelector(".contaner");
let quoteBox=document.querySelector(".quoteBox");
let quote=document.querySelector(".quote");
let author=document.querySelector(".author");
let btn=document.querySelector(".btn");

btn.addEventListener("click",function(){
    let obj={
        "— John Lennon": "“Life is what happens when you’re busy making other plans.” ",
        "— Stephen King": "“Get busy living or get busy dying.” ",
        "— Mae West": "“You only live once, but if you do it right, once is enough.” ",
        "– Babe Ruth": "“Never let the fear of striking out keep you from playing the game.” ",
        "— Will Smith": "“Money and success don’t change people; they merely amplify what is already there.” "
    }

    let authors= Object.keys(obj);
    let a=authors[Math.round(authors.length*Math.random())];
    let q=obj[a];
    quote.innerHTML=q;
    author.innerHTML=a;
});

