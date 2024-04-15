// fill in javascript code here
let form = document.getElementById("form");
let employeeName = document.getElementById("name");
let employeeId = document.getElementById("employeeID");
let department = document.getElementById("department");
let experience = document.getElementById("experience");
let email = document.getElementById("email");
let mobile  = document.getElementById("mobile");
let tbody = document.getElementsByTagName("tbody")[0];

let data = [];

function handleSubmit (e) {
    e.preventDefault();
    
    if(employeeName.value == "" && employeeId.value =="" && department.value == "" & experience.value =="" && email.value == "" && mobile.value == "") {
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

function showData () {
    let storedData = JSON.parse(localStorage.getItem("data"));
    if(storedData) {
        tbody.innerHTML = "";
        storedData.forEach((employeeData,i)=>{
            let tableRow = document.createElement("tr");
            let empName =  document.createElement("td");
            empName.textContent = employeeData.employeeName;
    
            tableRow.append(empName);
            tbody.append(tableRow);
        })
    }else {
        tbody.innerHTML = "<h2>No Data</h2>";
    }
    // runing a loop around the data
    
}

form.addEventListener("submit",handleSubmit)