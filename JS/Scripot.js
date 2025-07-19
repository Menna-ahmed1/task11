var inputsearch = document.getElementById("input-search")
var productsdiv = document.querySelectorAll(".container2 div")
var notfound = document.getElementById("notfound")
//البحث عن منتج
inputsearch.addEventListener('input' ,() =>{
    var inputvalue = inputsearch.value.toLowerCase()
    
    var anyvisible = false

    productsdiv.forEach((item) =>{
        if(item.textContent.toLowerCase().includes(inputvalue)){
            item.style.display = "block"
            anyvisible = true
        }else{
            item.style.display = "none"
        }
    })
    
   notfound.style.display = anyvisible ? "none" : "block"
})
//sweet alert
inputsearch.addEventListener('click' , () =>{
    if (inputsearch.value == ""){
       const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-success",
    cancelButton: "btn btn-danger"
  },
  buttonsStyling: true
});
swalWithBootstrapButtons.fire({
  title: "click me dbl",
  icon: "warning",
  showCancelButton: true,
  confirmButtonText: "ok",
    })
    }
}

)
//count of product
let increment = document.querySelectorAll('#increment')
let decrement = document.querySelectorAll('#decrement')
let content = document.querySelectorAll('#content')
let body = document.getElementById('body')

content.forEach((content , item) =>{
let count = 0
content.innerHTML = count

increment[item].addEventListener('click' , () =>{
  if(count < 10){
   count++
   content.innerHTML = count
  }
   if(count == 10) increment.setAttribute("disabled" , 'true')
   if(count > 0) decrement[item].removeAttribute("disabled")

})})
 decrement.setAttribute("disabled" , 'true')
/////////////////////////////////////////////////////////////////////
content.forEach((content , item) =>{
let count = 0
content.innerHTML = count
decrement[item].addEventListener('click' , () =>{
  if(count > 0) {
   count--;
   content.innerHTML = count;
   increment[item].removeAttribute('disabled')
}
   if(count == 0) decrement.setAttribute("disabled" , 'true')
   if(count < 10) increment.removeAttribute("disabled")
})})
// console.log(decrement)