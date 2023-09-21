// let pre = document.querySelector("#pre");
// let next = document.querySelector("#next");
let img = document.querySelector(".top");
let heading = document.querySelector("#heading");
let para = document.querySelector("#para");
// let i = 0 ; 

// next.addEventListener("click",()=>{
//                if(i==0){
//                               heading.innerText = "bsdk"
//                               para.innerText = "chal raha hu mai  sahi bro"
//                               img.innerHTML =   `<img src="firstBG.jpg" alt="not showing">`
//                               console.log(i)   
//                               i++      
//                }
//                else if(i==1){
//                               heading.innerText = "chal hat bhen ki lodi"
//                               para.innerText = "naman bhen ka loda"
//                               img.innerHTML =   `<img src="laterUSEbg.png" alt="not showing">`
//                               console.log(i)   
//                               i++  
//                }
//                else{
//                               heading.innerText = "Na se Nasa tak"
//                               para.innerText = "still i will be single"
//                               img.innerHTML =   `<img src="pizza.png" alt="not showing">`
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


let firstimg = document.querySelector(".first")
let secondimg = document.querySelector(".second")
let thirdimg = document.querySelector(".third")

firstimg.addEventListener("click",()=>{
               let x = img.innerHTML;
               img.innerHTML = firstimg.innerHTML
               firstimg.innerHTML = x;
               let y = heading.innerText;
               let z = heading.innerText;
               heading.innerText = "bhag bhag di ke bose";
               para.innerText = "pani pani pani ,, uncle jiiiiiiii pani pila dijiye ,, mera gala sukkk raha hai!!!!!!!!!";
               
                
})
secondimg.addEventListener("click",()=>{
               let x = img.innerHTML;
               img.innerHTML = secondimg.innerHTML
               secondimg.innerHTML = x;
               let y = heading.innerText;
               let z = heading.innerText;
               heading.innerText = "kat diya kya yaar";
               para.innerText = "nahi bhai kata toh woh karti thi "
                
})
thirdimg.addEventListener("click",()=>{
               let x = img.innerHTML;
               img.innerHTML = thirdimg.innerHTML
               thirdimg.innerHTML = x;
               let y = heading.innerText;
               let z = heading.innerText;
               heading.innerText = "ohh meri chandani";
               para.innerText = "chandani chand se hoti hai sitaro se nahi <br> mohobat ek se hoti hai hazaroo se nahi "
               
                
})