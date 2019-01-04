$(".menuitem>a").forEach(item=>{
  let $item = item;
  $item.on('click',(e)=>{
    console.log(e.currentTarget)
  })
})
