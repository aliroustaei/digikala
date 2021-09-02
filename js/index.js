//---------------- menu
let hamburger = document.getElementById('hamburger');
let navRight = document.querySelector('.nav-right');
let close = document.querySelector('.bi-x-circle')

hamburger.addEventListener('click', () =>{
    navRight.classList.remove('d-none');
    navRight.style.backgroundColor = ('rgba(0,0,0,0.3)');
});

 close.addEventListener("click", () =>{
     navRight.classList.add('d-none');
 });

 //--------------- hide-menu

 let nav = document.querySelector('nav');
 let gotoTop = document.querySelector(".goto-top");

 window.addEventListener('scroll',() =>{
     const scrollHeight = window.pageYOffset;

     if (window.pageYOffset > 400) {
         nav.classList.add("hide-nav");
        } else {
         nav.classList.remove("hide-nav");
     }

     if (scrollHeight > 700) {
      gotoTop.classList.add("show-top");
      } else {
      gotoTop.classList.remove("show-top");
     }
 });

 gotoTop.addEventListener("click",() =>{
       window.scrollTo({
      left: 0,
      top:0,
    });
  });


