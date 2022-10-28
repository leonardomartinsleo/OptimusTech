
const menu = document.querySelector('.menu')
const menuIcon = document.querySelector('.sideMenu img')
menuIcon.addEventListener('click', function() {
  // quando houver clique no ícone de menu
  menu.classList.toggle('active')
  
})

function sideMenuCloser(){
  let width = window.innerWidth
  if(width>849){
    menu.className = 'menu'
  }
}
