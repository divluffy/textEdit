// i want to be..
var content =document.querySelector(".content")
var numbers =document.querySelector(".numbers")
var text =document.querySelector(".text")
var textarea =document.querySelector("textarea")
var colors =document.querySelector(".color")
var backg_color =document.querySelector(".backg_color")
var zoom_in =document.querySelector(".zoom_in")
var zoom_out =document.querySelector(".zoom_out")
var select =document.querySelector(".select")
var italicy =document.querySelector(".italic")
var underline =document.querySelector(".underline")
var bold =document.querySelector(".bold")
var copyer =document.querySelector(".copy")



//copy
copyer.addEventListener('click', ()=>{
    textarea.select()
    document.execCommand("copy")
})



//font family
select.addEventListener("click",()=>{
    let font = select.value
    if(font == "sans-serif"){
        textarea.style.fontFamily = "sans-serif"
    }
    if(font == "Calibri"){
    textarea.style.fontFamily = "Calibri"
    }
    if(font == "cursive"){
    textarea.style.fontFamily = "cursive" 
    }
    if(font == "Impact"){
    textarea.style.fontFamily = "Impact"
    }
 })


    
//aligns
function align_l(){
    textarea.style.textAlign = "left";
}
function align_c(){
    textarea.style.textAlign = "center";
}
function align_r(){
    textarea.style.textAlign = "right";
}


//font style
italicy.addEventListener('click',()=>{
    textarea.classList.toggle('italic')
})

underline.addEventListener('click',()=>{
    textarea.classList.toggle('unline')
})

bold.addEventListener('click',()=>{
    textarea.classList.toggle('bold')
})


//chioose colores
colors.addEventListener('input',(e)=>{
    textarea.style.color = e.target.value
})

backg_color.addEventListener('input',(e)=>{
    textarea.style.background = e.target.value
})


//zoom_in or remove size
let size = 19
let sizeNum = 16
zoom_in.addEventListener('click',()=>{
    size = size + 2
    sizeNum = sizeNum + 2
    textarea.style.fontSize = size+"px";
    numbers.style.fontSize = sizeNum+"px";

})

zoom_out.addEventListener('click',()=>{  
    size = size - 2
    sizeNum = sizeNum - 2
    textarea.style.fontSize = size+"px";
    numbers.style.fontSize = sizeNum+"px";
})


//for add lines with numbers and remove
let he = 5
let i =0
textarea.addEventListener('keyup',(e)=>{
 let pp =document.createElement('p')
    if(e.keyCode === 13){

        console.log("forword")
        i++
        pp.innerText = i
        numbers.appendChild(pp)
        he = he + 20
        text.style.height = he+"px"
    }else if(e.keyCode === 8){

        he-=20
        text.style.height = he+"px"
         console.log("back")
        numbers.removeChild(numbers.lastChild)
        i--
    } 
})
