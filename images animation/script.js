window.onscroll = () =>{

let sectionForAnimation = document.querySelector('.section2 .images');

let sectionPostion = sectionForAnimation.getBoundingClientRect().top;
let screenPostion = window.innerHeight / 1.4;

let leftImage = document.querySelector('.slideFromLeft');
let rightImage = document.querySelector('.slideFromRight');


if(screenPostion > sectionPostion){
  leftImage.classList.add('animated');
  rightImage.classList.add('animated');
}

}

