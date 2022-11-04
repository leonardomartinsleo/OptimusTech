
const menu = document.querySelector('.menu')
const menuIcon = document.querySelector('.sideMenu img')
menuIcon.addEventListener('click', function() {
  // quando houver clique no ícone de menu
  menu.classList.toggle('active')
  
})
const nav = document.querySelector('.nav')
window.onscroll = function scroller(){
  let screenHeight = document.documentElement.scrollTop
  if(screenHeight < 100){
    nav.className = 'nav'
  }else{
    nav.className = 'nav-on-scroll'
  }
}
function sideMenuCloser(){
  let width = window.innerWidth
  if(width>849){
    menu.className = 'menu'
  }
}
