let count = document.querySelector(".count");
function time(){
	var a = 0
	setInterval(function(){
	    a += Math.floor(Math.random()*20)
	    if(a<100){
	       count.innerHTML = a+"%"
	    }else{
	        a = 100
	        count.innerHTML = a+"%"
	    }
	},150)
           }
           time();
let tl = gsap.timeline();
           tl.to("#page1",{
	opacity:0,
	delay:2.3,
	scale:2,
	display:"none"

           })
           tl.from(".p4bottom span",{
	opacity:0,
	y:"100px",
	stagger:0.2,
	scrollTrigger:{
	     trigger:".p4bottom",
	     scroller:"body",
	     // markers:true,
	     start:"top 550px"
	     
	}
          
          })
           tl.to("#page2",{
	duration:1,
	top:"-100%"
           })
