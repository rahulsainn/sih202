console.log("working");
let tl = gsap.timeline();
gsap.registerPlugin();
tl.from(".p1-left h1, #line",{
               opacity:0,
               y:100,
               // stagger:0.4,
               duration:0.9,
})
tl.from(".below-h1",{
               opacity:0,
               y:100,
               stagger:0.5,
               duration:0.9
},"name")
tl.from(".button-flex",{
               opacity:0,
               y:100,
               // stagger:0.2,
               duaration:0.9
},"name")
tl.from("#layer1,#layer2,#layer3,#layer4",{
               opacity:0,
               duration:0.9,
               // stagger:0.2'
               x:100,
},)
gsap.from(".benefits,.benefit-para",{
               opacity:0,
               stagger:0.4,
               duration:0.6,
               y:100,
               scrollTrigger:{
                              trigger:"#page2",
                              scroller:"body",
                              start:"top 400px",
               }
})
gsap.from(".btm-lft-top h1,.btm-rght-top h1,#p2-center-img",{
               opacity:0,
               y:100,
               duration:0.8,
               scrollTrigger:{
                              trigger:"#page2",
                              scroller:"body",
                              start:"top 250px"
               }
})
gsap.from(".btm-lft-top p,.btm-rght-top p",{
               opacity:0,
               y:100,
               scrollTrigger:{
                              trigger:"#page2",
                              scroller:"body",
                              start:"top 180px"

               }
})
gsap.from(".btm-lft-bottom h1,.btm-rght-bottom h1",{
               opacity:0,
               y:100,
               duration:0.8,
               scrollTrigger:{
                              trigger:"#page2",
                              scroller:"body",
                              start:"top 80px"
               }
})
gsap.from(".btm-lft-bottom p,.btm-rght-bottom p",{
               opacity:0,
               y:100,
               duration:0.8,
               scrollTrigger:{
                              trigger:"#page2",
                              scroller:"body",
                              start:"top 20px"

               }
})

gsap.from(".cont-top",{
               duration:0.8,
               opacity:0,
               y:100,
               scrollTrigger:{
                              trigger:"#page3",
                              scroller:"body",
                              start:"top 330px"
               }
})

gsap.from(".card1,.card2,.card3",{
               opacity:0,
               y:200,
               duration:0.7,
               // stagger:0.3,
               scrollTrigger:{
                              trigger:"#page3",
                              scroller:"body",
                              // markers:true,
                              start:"top 80px"
               }
})

gsap.from(".slogen",{
               opacity:0,
               y:100,
               duration:0.8,
               scrollTrigger:{
                              trigger:".campains-container",
                              scroller:"body",
                              // markers:true,
                              start:"top 300px"
                              
               }
})

gsap.from(".companies",{
               opacity:0,
               duration:0.7,
               y:100,
               scrollTrigger:{
                              trigger:".slogen p",
                              scroller:"body",
                              // markers:true,
                              start:"top 300px"
               }
})

gsap.from("#top-performer-left,#top-performer-right",{

               opacity:0,
               y:100,
               duration:0.8,
               scrollTrigger:{
                              trigger:".top-performer",
                              scroller:"body",
                              // markers:true,
                              start:"top 300px"
               }
})
gsap.from("#gallery-h1",{
               opacity:0,
               y:100,
               duration:0.6,
               scrollTrigger:{
                              trigger:".gallery-container",
                              scroller:"body",
                              // markers:true,
                              start:"top 660px"
               }
})
gsap.from(".first-three",{
               opacity:0,
               y:100,
               duration:0.7,
               scrollTrigger:{
                              trigger:".gallery",
                              scroller:"body",
                              // markers:true,
                              start:"top 400px"

               }
})

gsap.from(".last-three",{
               opacity:0,
               y:100,
               duration:0.8,
               scrollTrigger:{
                              trigger:".gallery",
                              scroller:"body",
                              // markers:true,
                              start:"top 100px"
               }
})

gsap.from(".how-works",{
               opacity:0,
               y:100,
               duration:0.8,
               scrollTrigger:{
                              trigger:".how-works",
                              scroller:"body",
                              // markers:true,
                              start:"top 650px"
               }
})
gsap.from(".quiz-header",{
               opacity:0,
               y:100,
               duration:0.8,
               scrollTrigger:{
                              trigger:".quiz-wrapper",
                              scroller:"body",
                              // markers:true,
                              start:"top 500px"
               }
})
gsap.from(".quiz-left,.quiz-right",{
               opacity:0,
               y:100,
               stagger:0.5,
               duration:0.8,
               scrollTrigger:{
                              trigger:".quiz-wrapper",
                              scroller:"body",
                              // markers:true,
                              start:"top 300px"
               }
})

// 

let next = document.querySelector("#circle2");
let pre = document.querySelector("#circle1");
let paraText = document.querySelector("#disc");
let name1 = document.querySelector("#name");
let img = document.querySelector("#performerIMG");
console.log(img)


next.addEventListener("click",()=>{
               paraText.innerText= "“Seeing the trash being dumped on streets was something that bothered me for years because it included the waste collected from my home as well. Through this initiative, I am able to make sure that the waste goes to its right place.” "
               name1.innerText= "Jiya Bhagani"
               img.style.backgroundImage="url(https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80)"
              
})
pre.addEventListener("click",()=>{
  paraText.innerText= `I've always felt the urge to know how I can somehow turn waste
  into a resource and help contribute towards a healthier
  environment. CashFromTrash has built this thought into action. `;
               name1.innerText= " -Sanya Sharma";
               img.style.backgroundImage="url(/Prototype/assets/performer.webp)";
 
})
window.addEventListener("scroll",()=>{
               let nav = document.querySelector("#navbar")
               if(window.pageYOffset>0){
                 nav.classList.add("sticky");
                 
                 
                 //   nav.style.backdropFilter="blur(10px)"
               }
               else{
                              nav.classList.remove("sticky");
                              
             
               }
})

let menu = document.querySelector("#ham-icon");
let close = document.querySelector("#close");
let hamMenu = document.querySelector("#ham-menu");

menu.addEventListener("click",()=>{
  hamMenu.style.top="0%"
})
close.addEventListener("click",()=>{
  hamMenu.style.top="-100%"
})
// Slider

// let pre = document.querySelector("#pre");
// let Next = document.querySelector("#next");
// let Img = document.querySelector(".box-lft");
// let heading = document.querySelector("#heading");
// let para = document.querySelector("#para");
// let i = 0 ; 

// Next.addEventListener("click",()=>{
//                if(i==0){
//                               heading.innerText = "bsdk"
//                               para.innerText = "chal raha hu mai  sahi bro"
//                               Img.innerHTML =   `<img src="/prototype/assets/image2.png" alt="not showing">`
//                               console.log(i)   
//                               i++      
//                }
//                else if(1==1){
//                               heading.innerText = "chal hat bhen ki lodi"
//                               para.innerText = "naman bhen ka loda"
//                               Img.innerHTML =   `<img src="laterUSEbg.png" alt="not showing">`
//                               console.log(i)   
//                               i++  
//                }
//                else{
//                               heading.innerText = "Na se Nasa tak"
//                               para.innerText = "still i will be single"
//                               Img.innerHTML =   `<img src="pizza.png" alt="not showing">`
//                               // i++  
//                               console.log(i)   
//                }
// })

// pre.addEventListener("click",()=>{
//                if(i==2){
//                               heading.innerText = "chal hat bhen ki lodi"
//                               para.innerText = "naman bhen ka loda"
//                               img.innerHTML =   `<img src="laterUSEbg.png" alt="not showing">`
//                               --i
//                               console.log(i)   

//                               // heading.innerText = "pheiche"
//                               // para.innerText = "phiche bhi aaraha hai ye"
//                               // img.innerHTML =   `<img src="lastBg.png" alt="not showing">`
//                               // console.log(i)
//                               // i--;
//                }
//                else if(i==1){
//                               heading.innerText = "bsdk"
//                               para.innerText = "chal raha hu mai  sahi bro"
//                               img.innerHTML =   `<img src="firstBG.jpg" alt="not showing">`
//                               console.log(i)   
//                               --i      
//                }
//                else{
                            
//                               heading.innerText = "pheiche"
//                               para.innerText = "phiche bhi aaraha hai ye"
//                               img.innerHTML =   `<img src="lastBg.png" alt="not showing">`
//                               console.log(i)
//                               // i--;    
//                }
// })


// Quiz Slider

let next2 = document.querySelector("#circle4");
let pre2 = document.querySelector("#circle3");
let QuizPara = document.querySelector("#quiz-para-3");
let date = document.querySelector("#quiz-para-2");
let Qheader = document.querySelector("#quiz-para-1");
let img2 = document.querySelector(".quiz-left");
console.log(img2)


next2.addEventListener("click",()=>{
               Qheader.innerText= "Upcoming Quiz "
               date.innerText= "Date : 15 Nov 2023"
               QuizPara.innerText=` After so much learning and properly managing waste at home, it's time for another quiz
               competition.`
            img2.innerHTML = `<img src="/Prototype/assets/Quiz-img-2.png" id="quizIMG"  alt="img" />`
              
})