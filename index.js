// fill in javascript code here
let form = document.getElementById("form");
let employeeName = document.getElementById("name");
let employeeId = document.getElementById("employeeID");
let department = document.getElementById("department");
let experience = document.getElementById("experience");
let email = document.getElementById("email");
let mobile  = document.getElementById("mobile");
let thead = document.getElementById("thead")
let tbody = document.getElementById("tbody");



let data = [];
showData()
function handleSubmit (e) {
    e.preventDefault();
    if(employeeName.value == "" && employeeId.value =="" && department.value == "" && experience.value =="" && email.value == "" && mobile.value == "") {
     alert("Fill the form credentials");
    }else {
        console.log("form submitted");
        let obj = {};
        obj.employeeName = employeeName.value;
        obj.employeeId = employeeId.value;
        obj.department = department.value;
        obj.experience = experience.value;
        obj.email = email.value;
        obj.mobile = mobile.value;
    
        data.push(obj);
        saveDataToLocalStorage();
        showData();
    } 
    employeeName.value = "";
    employeeId.value = "";
    department.value = "";
    experience.value = "";
    email.value = "";
    mobile.value = "";
}

function saveDataToLocalStorage() {
    localStorage.setItem("data",JSON.stringify(data));
}

function handleDelete(i) {
   console.log("delete")
   data.splice(i,1);
   saveDataToLocalStorage();
   showData();
}

function showData () {
    let storedData = JSON.parse(localStorage.getItem("data"));
    if(storedData) {
        tbody.innerHTML = "";
        storedData.forEach((employeeData,i)=>{
            let tableRow = document.createElement("tr");
            //  Employee Name
            let empName =  document.createElement("td");
            empName.id = "empName";
            empName.textContent = employeeData.employeeName;
            // Employee ID
            let empID  = document.createElement("td");
            empID.textContent = employeeData.employeeId;
            // Department 
            let empDepartment = document.createElement("td");
            empDepartment.textContent = employeeData.department;
            // Experience 
            let empExperience = document.createElement("td");
            empExperience.textContent = employeeData.experience;
            // email
            let empEmail = document.createElement("td");
            empEmail.textContent = employeeData.email;
            // Mobile
            let empMobile = document.createElement("td");
            empMobile.textContent = employeeData.mobile;
            // Role
            let empRole = document.createElement("td");
            empRole.textContent = employeeData.experience>5 ? "Senior" :employeeData.experience>=2 && employeeData.experience<=5 ? "Junior":"Fresher";
            // Delete
            let Delete = document.createElement("button");
            Delete.id = "delete";
            Delete.textContent = "Delete";
            Delete.addEventListener('click',function() {
                handleDelete(i);
            })
            tableRow.append(empName,empID,empDepartment,empExperience,empEmail,empMobile,empRole,Delete);
            tbody.append(tableRow);
        })
    }

    // runing a loop around the data
    
}

form.addEventListener("submit",handleSubmit)