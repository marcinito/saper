let boxy=[...document.querySelectorAll(".box")]
let container=document.querySelector(".container")
boxy.map((el,index)=>{
    el.style.backgroundColor="skyblue"
    el.classList.add("boksy")
    el.setAttribute("data-index",index)
})

console.log(boxy)
function rozmieszczenieBomb(){
    let number
    let locationBomb=[]
    for(let i=0 ; i<10 ;i++){
number=Math.floor(Math.random()*24)
locationBomb.push(number)
    }
    return locationBomb
}

let bomby=rozmieszczenieBomb()
console.log(bomby)



boxy.forEach((el,index)=>{
   
    el.addEventListener("click",()=>{
        el.style.backgroundColor="red"
        console.log(bomby)
        setTimeout(()=>{
           let value= bomby.includes(index)
           console.log(value)
            if(value){
                el.style.backgroundColor="red"
                let zdj=document.createElement("img")
                zdj.style.zIndex="200"
                zdj.src="kulaognia.png"
                el.appendChild(zdj)
         setInterval(()=>{
            container.style.fontSize=100+"px"
            container.style.color="darkorange"
            container.style.fontWeight="bold"
           container.innerHTML="GAMEOVER"

         },1000)
         setInterval(()=>{
            window.setInterval(location.reload(true), x)

        },5000)
                
                
            }
            else{
                el.style.backgroundColor="green"
            }
            
        
        },100)
    })
})
