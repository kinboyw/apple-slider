let menus = $(".menuitem>a")  //  menus
let current = 0;  //currentIndex
let it; //setInterval
active(getItem(0));
setLoop();
$.each(menus,key=>{
  $(menus[key]).on('click',(e)=>{
    e.preventDefault();
    jump(key);
    active(getItem(key));
    current = key;
    retimer();
  })
})

function retimer(){
  clearInterval(it);
  setLoop();
}

function setLoop(){
it = setInterval(()=>{
  current++;
  jump(fix(current));
  active(getItem(fix(current)))
},3000)
}

function jump(index){
  $('.images').css('transform',()=>{return `translateX(${-920*index}px)`})
}
function fix(n){
  return n =  n % menus.length 
}
function getItem(n){
  return $(`.menuitem:nth-of-type(${n+2})`);
}
function active($node){
  $(".menu>ul>li.active").removeClass("active");
  $node.addClass("active");
}
