let mybutton = document.getElementById("btn-back-to-top");
let nav = document.getElementById("navbar-area");
let mybrand = document.getElementById("mybrand");

window.onscroll = function () {
    scrollFunction();
    navscrollfun();
  };
  
  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  mybutton.addEventListener("click", backToTop);
  
  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  
  function navscrollfun(){
    if(
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) { 
        nav.style.padding = "0px";
    }
    else{
        nav.style.padding = "20px";
    }
}