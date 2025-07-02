  
// script for original tutorial

const cursor = document.querySelector('.cursor');
const btnBoxOne = document.querySelector('.btn-box-one');
const boxBig =  document.querySelector('.box-big')
const boxBigText =  document.querySelector('.box-big h1')

document.addEventListener('DOMContentLoaded',()=>{
for(let i = 0; i<25; i++){
const span =  document.createElement('span');
span.classList.add('span-style-origial-tut');
span.style.setProperty('--i',i+1);
span.style.left=`${(i+1) * 20}px`;
span.style.filter=`hue-rotate(${i * 10}deg)`
cursor.appendChild(span)
}
})

function gsapAnimatin(e){
  gsap.to(".span-style-origial-tut",{
   x:e.clientX,
   y:e.clientY,
   stagger:0.05,
  })
}
// btn handler-original tut
btnBoxOne.addEventListener('click',()=>{
 console.log(btnBoxOne.textContent) 
if(btnBoxOne.textContent==='start animation'){
 document.addEventListener('mousemove',gsapAnimatin)
 btnBoxOne.textContent='stop animation'
}else{
  document.removeEventListener('mousemove',gsapAnimatin);
  btnBoxOne.textContent='start animation'
}
})
//end script for original tutorial

//Global varibles
let spansNum
let singleSpanWidth = 15
// Funcions
function spansNumFunc(){
  spansNum = Math.round(boxBigText.offsetWidth / singleSpanWidth);
  console.log('line 45 - ',+ spansNum)
  // boxBig.style.setProperty('--w',`${spansNum}px`)
}
function createSpans(){
const StringArr= " ".repeat(spansNum).split("")
const ArrOfSpan = StringArr.map((elm,index)=>{
  const span = document.createElement('span')
  //this is for remove it from the DOM
  span.dataset.line=true
  span.style.setProperty('--num',`${index+1}`)
  span.classList.add('span-style')
  body.appendChild(span)

  return span
})
}
//seperate the spans
function spansSeperation(){
  document.querySelectorAll("span[data-line='true']").forEach((span,index)=>{
    span.style.top =  boxBigText.getBoundingClientRect().bottom +window.scrollY +'px';
  span.style.left =  boxBigText.getBoundingClientRect().x+'px';
  span.style.setProperty('--i',`${index*0.1}s`)
  // span.style.transitionDelay=`${index*0.05}s`
  span.style.marginLeft=`${(singleSpanWidth * index ) }px`
  })  
}
// colors the spans
function colorsSpan(){
  const hueJumps = 360/spansNum
  console.log(hueJumps)
 document.querySelectorAll("span[data-line='true']").forEach((span)=>{
   const num = window.getComputedStyle(span).getPropertyValue('--num');
  // span.style.backgroundColor='red'
 span.style.filter=`hue-rotate(${num * hueJumps}deg)`
 }) 
}

function removeSpans(){
  const spanElemnts = document.querySelectorAll("span[data-line='true']");
  if(!spanElemnts)return
  spanElemnts.forEach((el,index)=>{
   setTimeout(()=>{el.remove()},index * 20)
  })
}
// EVENTS
//btn-1
document.querySelector('.btn-box button[data-effect="first"]').addEventListener('click',()=>{
  spansNumFunc()
  createSpans()
  spansSeperation()
})
//btn-2
document.querySelector('.btn-box button[data-effect="second"]').addEventListener('click',()=>{
  spansNumFunc()
  createSpans()
  colorsSpan()
  spansSeperation()
})


document.querySelector('.reset').addEventListener('click',removeSpans)

