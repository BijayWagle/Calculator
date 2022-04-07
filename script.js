//using const variable and manipulating dom and taking id(calculatorInput)
const calculatorInput=document.querySelector("#calculatorInput");
//using const variable and manipulating class (inputElements)
const numbers=document.querySelectorAll(".inputElements");

for(cal of numbers){
  cal.addEventListener('click',function(){
    calculatorInput.append(this.textContent)
    console.log(this.textContent);
  })
}
const equals=document.querySelector(".evaluate")
equals.addEventListener('click',function(){
  calculatorInput.innerHTML=eval(calculatorInput.textContent)
})
const clr=document.querySelector(".clear")
clr.addEventListener('click',function(){
  calculatorInput.innerHTML="";
})
