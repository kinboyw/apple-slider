var menus = $(".menuitem>a")
let current = 0;
active(getItem(0));
$.each(menus,key=>{
  $(menus[key]).on('click',(e)=>{
    e.preventDefault();
    jump(key);
    active(getItem(key));
    current = key;
  })
})

setInterval(()=>{
  current++;
  jump(fix(current));
  active(getItem(fix(current)))
},10000)

function jump(index){
  $('.images').css('transform',()=>{return `translateX(${-920*index}px)`})
}
function fix(n){
  return n =  n % menus.length 
}
function getItem(n){
  return $(`.menu>ul>li:nth-child(${n+1})`);
}
function active($node){
  $(".menu>ul>li.active").removeClass("active");
  $node.addClass("active");
}