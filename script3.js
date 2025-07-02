const spiralCont =  document.querySelector('.spiral-container')
 document.addEventListener('DOMContentLoaded',function(){
  for(let j=0; j<4; j++){
    let loader = document.createElement('div')
    loader.classList.add('loader')
    loader.style.setProperty('--j',j)
  for(let i=0; i<=20; i++){
    let spanEl = document.createElement('span')
  spanEl.style.setProperty('--i',i);
  loader.appendChild(spanEl)
  }
  spiralCont.appendChild(loader)
  }
 })
