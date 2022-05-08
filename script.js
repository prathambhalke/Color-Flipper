let colors = ['aqua', 'grey', 'pink', 'orange', 'yellow', 'coral', 'green', 'violet'];
// const button = document.querySelector('.btn');
// const color = document.querySelector('#color')


btn.addEventListener("click", () => {
    var a=Math.floor(Math.random() * colors.length)
    document.body.style.backgroundColor = colors[a]
    color.innerHTML=`${colors[a]}`
    color.style.color=`${colors[a]}`
    btn.addEventListener("mousedown", ()=>{ 
        btn.style.transform = "scale(0.9)"  
      })
      btn.addEventListener("mouseup", ()=>{ 
        btn.style.transform = "scale(1)"})

})
