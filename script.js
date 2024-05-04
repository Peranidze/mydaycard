let btn = document.querySelector('.first_page button');
let oko = document.querySelector('.oko img');
let first_page = document.querySelector('.first_page');
let second_page = document.querySelector('.second_page');
mybtn_enabled = true;
btn.addEventListener('click', ()=>{
    oko.classList.add('redy')
    myfunc();
})
function myfunc(){
  if (mybtn_enabled) {
    mybtn_enabled = false;
    setTimeout(function(){
      mybtn_enabled = true;
      first_page.classList.add('unable')
      second_page.classList.add('able')
    }, 3500);
    console.log('запустили функцию');
  }
}
let sit_card = document.querySelector('.card');


var a=[
'images/13.jpg ',
'images/14 (2).jpg',
'images/14.jpg',
'images/15.jpg ',
'images/16.jpg',
'images/17.jpg ',
'images/18.jpg',
 'images/19.jpg', 'images/20.jpg', 'images/21.jpg', 'images/eight.jpg', 'images/eleven.jpg', 'images/fife.jpg', 'images/four.jpg', 'images/nine.jpg', 
 'images/one.jpg', 'images/seven.jpg', 'images/six.jpg', 'images/ten.jpg',' images/three.jpg', 'images/tvelv.jpg',' images/two.jpg'
];

var randomElement = a[Math.floor(Math.random() * a.length)]

document.getElementById('test').src= randomElement;

let btn_yes = document.querySelector('.yes');
let btn_no = document.querySelector('.no');
let cookies = document.querySelector('.cookies');
let error = document.querySelector('.error_wrapper');
btn_yes.addEventListener('click', ()=>{
  cookies.style.cssText = 'display:none'
  first_page.style.cssText = 'pointer-events: auto;'
})
btn_no.addEventListener('click', ()=>{
  cookies.style.cssText = 'display:none'
  first_page.style.cssText = 'display:none'
  error.style.cssText = 'display:flex'
})
let er_btn = document.querySelector('.error_wrapper button');
er_btn.addEventListener('click', ()=>{
  location.reload()
})

