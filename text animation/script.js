let mainH1 = document.querySelector('.section1 h1');
let splitted = mainH1.textContent.split("");

mainH1.innerHTML = '';

for(let char of splitted){
  mainH1.innerHTML += `<span>${char}</span>`;
}

let spans = document.querySelectorAll('h1 span');
let k = 0;

let Interval = setInterval(() =>{
  let span = spans[k];
  if(span.textContent === " "){
    span.innerHTML = '&nbsp;';
    
  }
  span.classList.add('fadeMove');

  k++;

  if(spans.length === k){
    clearInterval(Interval);
  }
},100);

