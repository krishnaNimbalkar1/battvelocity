
let touch = document.querySelector('.get-in-touch');
let wrapper = document.querySelector('.wrapper');
let close = document.querySelector('.close');
touch.addEventListener("click",(e)=>{
  wrapper.style.display = "block";
  wrapper.style.width = "100%";
});

close.addEventListener("click",(e)=>{
  wrapper.style.display = "none";
  wrapper.style.width = "0%";
});