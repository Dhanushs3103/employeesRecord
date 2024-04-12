// fill in javascript code here
let form = document.getElementById("form");
let employeeName = document.getElementById("name");
let employeeId = document.getElementById("employeeId");
let department = document.getElementById("department");
let experience = document.getElementById("experience");
let email = document.getElementById("email");
let mobile  = document.getElementById("mobile");

let data = [];

function handleSubmit(e){
    e.preventDefault();
    
    let obj = {};
    obj.employeeName = employeeName.value;
    obj.employeeId = employeeId.value;
    obj.department = department.value;
    obj.experience = experience.value;
    obj.email = email.value;
    obj.mobile = mobile.value;
    console.log(obj)
    
}


form.addEventListener("submit",function(event){
    
    handleSubmit(event);
    
})