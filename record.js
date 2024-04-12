// fill in javascript code here
let form = document.getElementById("form");
let employeeName = document.getElementById("name");
let employeeId = document.getElementById("employeeId");
let department = document.getElementById("department");
let experience = document.getElementById("experience");
let email = document.getElementById("email");
let mobile  = document.getElementById("mobile");



function handleSubmit(e){
    e.preventDefault();
    
    
}


form.addEventListener("submit",function(event){
    
    handleSubmit(event);
    
})