function showDate() {
   var date = new Date();
  
   var first = date.getDate() - date.getDay();
   var current_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ first;

    
document.getElementById("date").innerHTML = "for the current week: "+ current_date; 

}



function calc() {
  let dateDropdown = document.getElementById("year");

    let currentYear = new Date().getFullYear();
    let earliestYear = currentYear-100;

     for (let i = currentYear ; i>=earliestYear; i--){
      const dateOption = document.createElement("option");
       dateOption.value = i;
       dateOption.innerHTML = i;
       dateDropdown.append(dateOption);
    }
	
}



function validateForm() {
	


  var flag = true;
    let x = document.forms["myform"]["name"].value;
    let c = document.forms["myform"]["name"].value;
    let z = document.forms["myform"]["Address1"].value;
    let y = document.forms["myform"]["ID"].value;
	let m= document.forms["myform"]["Address2"].value;
  	let n = document.forms["myform"]["Phone"].value;
    let d= document.forms["myform"]["Address2"].value;
	let g= document.forms["myform"]["gender"].value;
	let s= document.forms["myform"]["M_Status"].value;
	let i= document.forms["myform"]["insurance"].value;
	
	let day= document.getElementById("day").options[document.getElementById("day").selectedIndex].text
	let month= document.getElementById("month").options[document.getElementById("month").selectedIndex].text
	
  if (x == "") {
    alert("Name must be filled out");
	 flag = false;
  }

	 if (g == "") {
    alert("gender must be filled out");
	 flag = false;
  }
  
  
	 if (day == "Day") {
    alert("you have to select a day ");
	 flag = false;
  }
  
  if (month == "Month") {
    alert("you have to select a month ");
	 flag = false;
  }
  
	 if (s == "") {
    alert("Martial status must be filled out");
	 flag = false;
  }
	  if (/\d/.test(c)) {
    alert("Numbers in name is not acceptable");
	  flag = false;
  }
  
 
	  if (y == "") {
    alert("ID must be filled out");
	  flag = false;
  }

	

     if (z == "") {
    alert("City must be filled out");
    flag = false;
  }
  
 
if (m == "") {
    alert("Street must be filled out");
     flag = false;
  }
  
 if (d == "") {
    alert("email must be filled out");
     flag = false;
  }
  
  
if (n == "") {
    alert("phone must be filled out");
	 flag = false;
   }
   if (n.length>10) {
    alert("phone must be 10 digits only");
	 flag = false;
   }
   
  if (flag == true) {
	  
	  var v = document.getElementById("myform"); 
 document.getElementById("info").innerHTML = "Patient Information: ";
 document.getElementById("persona_info").innerHTML = "Full name: " + document.getElementById("name").value +"<br>"+ "Gender: " + v.gender.value+ "<br>"+ "Date of Birth: " + document.getElementById("month").options[document.getElementById("month").selectedIndex].text +"-" +  document.getElementById("day").options[document.getElementById("day").selectedIndex].text +"-" + document.getElementById("year").options[document.getElementById("year").selectedIndex].text+ "<br>"+"National ID:"+document.getElementById("ID").value+ "<br>"+ "Martial Statue: " +v.M_Status.value;
 
 if (!i=="")
 
 {document.getElementById("insure").innerHTML = "Insurance Company Name : " + document.getElementById("insurance").value;
} 

document.getElementById("contact_info").innerHTML = "Phone Number: " + document.getElementById("Phone").value +"<br>"+ "Address: " +"<br>" +"City: " + v.Address1.value +" - Street: " + v.Address2.value + "<br>" + "Email: " +  v.Email.value;
}
  
 
}
  


 
	
  


// IN PATIENTS 


const forms = document.querySelectorAll(".flex-container .forms");
const legends = document.querySelectorAll(".flex-container .forms legend");
const images = document.querySelectorAll(".flex-container img");
const patientPhotos = document.querySelectorAll(".flex-container li img")
const btnsSub = document.querySelectorAll(".flex-container form .btnSub");
const nameInputs = document.querySelectorAll(".flex-container form .nameInput");
const namePs = document.querySelectorAll(".flex-container form .nameP");
const disDateInputs = document.querySelectorAll(".flex-container form .disdateInput");
const dischargeDates = document.querySelectorAll(".flex-container form .dischargeDate");
const addmissions = document.querySelectorAll(".flex-container form .addmission");
const addmissionLables = document.querySelectorAll(".flex-container form .addmissionLable");
console.log(disDateInputs);
console.log(legends);
console.log(addmissions);


const dateNow = new Date();
let dayNow = dateNow.getDate();
let monthNow = dateNow.getMonth() + 1;
let yearNow = dateNow.getFullYear();


// when click on the image will display the form 
images[0].addEventListener("click", () => {
    forms[0].classList.toggle("activeForm")
})
images[1].addEventListener("click", () => {
    forms[1].classList.toggle("activeForm")
})
images[2].addEventListener("click", () => {
    forms[2].classList.toggle("activeForm")
})
images[3].addEventListener("click", () => {
    forms[3].classList.toggle("activeForm")
})
images[4].addEventListener("click", () => {
    forms[4].classList.toggle("activeForm")
})
images[5].addEventListener("click", () => {
    forms[5].classList.toggle("activeForm")
})
images[6].addEventListener("click", () => {
    forms[6].classList.toggle("activeForm")
})
images[7].addEventListener("click", () => {
    forms[7].classList.toggle("activeForm")
})
images[8].addEventListener("click", () => {
    forms[8].classList.toggle("activeForm")
})
////////////////////////////////////////////   patient information of occupied id=112233
const dateInput = new Date(disDateInputs[0].value);
const dayInput = dateInput.getDate();//get the current date by days
const monthInput = dateInput.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
const yearInput = dateInput.getFullYear();//get the current date by years
patientPhotos[0].src = "./bedman.jpg";//change patient photo
namePs[0].innerHTML = "Ahmed";//show name
legends[0].innerHTML = "Occupied";//show status
addmissions[0].innerHTML = `${dayNow}-${monthNow}-${yearNow}`;//show Addmission date
dischargeDates[0].innerHTML = "8-6-2023";//show discharge date
addmissionLables[0].style.display = "inline";//hiden addmission Lable
btnsSub[0].remove();//remove sub button
nameInputs[0].remove();//remove input name
disDateInputs[0].remove();//remove input date




///////////////////////////////////////////////////////  information of occupied ID: 112288 
patientPhotos[5].src = "./bedwo.jpg";//change patient photo
namePs[5].innerHTML = "noura";//show name
legends[5].innerHTML = "Occupied";//show status
addmissions[5].innerHTML = `${dayNow}-${monthNow}-${yearNow}`;//show Addmission date
dischargeDates[5].innerHTML = "4-5-2023";//show discharge date
addmissionLables[5].style.display = "inline";//hiden addmission Lable
btnsSub[5].remove();//remove sub button
nameInputs[5].remove();//remove input name
disDateInputs[5].remove();//remove input date



///////////////////////////////////////////////////////   information of occupied ID: 112299
patientPhotos[6].src = "./bedman.jpg";//change patient photo
namePs[6].innerHTML = "Mohammed";//show name
legends[6].innerHTML = "Occupied";//show status
addmissions[6].innerHTML = `${dayNow}-${monthNow}-${yearNow}`;//show Addmission date
dischargeDates[6].innerHTML = "9-4-2023";//show discharge date
addmissionLables[6].style.display = "inline";//hiden addmission Lable
btnsSub[6].remove();//remove sub button
nameInputs[6].remove();//remove input name
disDateInputs[6].remove();//remove input date



////////////////////////////////////////////  Avalible beds



btnsSub[1].addEventListener("click", (e) => { //  catch if bed with id 112244 clicked show form + validate input +if valid convert bed image
    e.preventDefault();
    let cond1 = false;
    let cond2 = false;
    let cond3 = false;
    let cond4 = false;
    if (nameInputs[1].value === "")//check if name empty or not
    {
        alert("Name filed is empty");
        cond1 = true;

    }
    else if (disDateInputs[1].value === "") {//check if date empty or not
        alert("Date filed is empty");
        cond2 = true;

    }
    let letters = /^[A-Za-z]+$/;//check name validation
    if (!nameInputs[1].value.match(letters)) {
        alert('Please enter a valid name');
        cond3 = true;

    }
    // get the current date
    const dateInput = new Date(disDateInputs[1].value);
    const dayInput = dateInput.getDate();//get the current date by days
    const monthInput = dateInput.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
    const yearInput = dateInput.getFullYear();//get the current date by years
    //date check
    if (dateInput < dateNow) {
        alert(' Enter a valid Discharge date');
        cond4 = true;

    }
    //if all validation true will convert the bed from empty to occupied
    if (!cond1 && !cond2 && !cond3 && !cond4) {
        patientPhotos[1].src = "./bedman.jpg";//change patient photo
        namePs[1].innerHTML = `${nameInputs[1].value}`;//show name
        legends[1].innerHTML = "Occupied";//show status
        addmissions[1].innerHTML = `${dayNow}-${monthNow}-${yearNow}`;//show Addmission date
        dischargeDates[1].innerHTML = `${dayInput}-${monthInput}-${yearInput}`;//show discharge date
        addmissionLables[1].style.display = "inline";//hiden addmission Lable
        btnsSub[1].remove();//remove sub button
        nameInputs[1].remove();//remove input name
        disDateInputs[1].remove();//remove input date
    }
})
// end id 112244
//////////////////////////////////////////// //  catch if bed with id 112255 clicked show form + validate input +if valid convert bed image
btnsSub[2].addEventListener("click", (e) => {
    e.preventDefault();
    let cond1 = false;
    let cond2 = false;
    let cond3 = false;
    let cond4 = false;
    if (nameInputs[2].value === "")//check if name empty or not
    {
        alert("Name filed is empty");
        cond1 = true;

    }
    else if (disDateInputs[2].value === "") {//check if date empty or not
        alert("Date filed is empty");
        cond2 = true;

    }
    let letters = /^[A-Za-z]+$/;//check name validation
    if (!nameInputs[2].value.match(letters)) {
        alert('Please enter a valid name');
        cond3 = true;

    }
    // get the current date
    const dateInput = new Date(disDateInputs[2].value);
    const dayInput = dateInput.getDate();//get the current date by days
    const monthInput = dateInput.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
    const yearInput = dateInput.getFullYear();//get the current date by years
    //date check
    if (dateInput < dateNow) {
        alert('Enter a valid Discharge date');
        cond4 = true;

    }
    //if all validation true will convert the bed from empty to occupied and remove forn
    if (!cond1 && !cond2 && !cond3 && !cond4) {
        patientPhotos[2].src = "./bedman.jpg";//change patient photo
        namePs[2].innerHTML = `${nameInputs[2].value}`;//show name
        legends[2].innerHTML = "Occupied";//show status
        addmissions[2].innerHTML = `${dayNow}-${monthNow}-${yearNow}`;//show Addmission date
        dischargeDates[2].innerHTML = `${dayInput}-${monthInput}-${yearInput}`;//show discharge date
        addmissionLables[2].style.display = "inline";//hiden addmission Lable
        btnsSub[2].remove();//remove sub button
        nameInputs[2].remove();//remove input name
        disDateInputs[2].remove();//remove input date
    }
})
////////////////////////////////////////////
btnsSub[3].addEventListener("click", (e) => {
    e.preventDefault();
    let cond1 = false;
    let cond2 = false;
    let cond3 = false;
    let cond4 = false;
    if (nameInputs[3].value === "")//check if name empty or not
    {
        alert("Name filed is empty");
        cond1 = true;

    }
    else if (disDateInputs[3].value === "") {//check if date empty or not
        alert("Date filed is empty");
        cond2 = true;

    }
    let letters = /^[A-Za-z]+$/;//check name validation
    if (!nameInputs[3].value.match(letters)) {
        alert('Please Please enter a valid name');
        cond3 = true;

    }
    // get the current date
    const dateInput = new Date(disDateInputs[3].value);
    const dayInput = dateInput.getDate();//get the current date by days
    const monthInput = dateInput.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
    const yearInput = dateInput.getFullYear();//get the current date by years
    //date check
    if (dateInput < dateNow) {
        alert('Enter a valid Discharge date');
        cond4 = true;

    }
    //if all validation true will convert the bed from empty to occupied
    if (!cond1 && !cond2 && !cond3 && !cond4) {
        patientPhotos[3].src = "./bedman.jpg";//change patient photo
        namePs[3].innerHTML = `${nameInputs[3].value}`;//show name
        legends[3].innerHTML = "Occupied";//show status
        addmissions[3].innerHTML = `${dayNow}-${monthNow}-${yearNow}`;//show Addmission date
        dischargeDates[3].innerHTML = `${dayInput}-${monthInput}-${yearInput}`;//show discharge date
        addmissionLables[3].style.display = "inline";//hiden addmission Lable
        btnsSub[3].remove();//remove sub button
        nameInputs[3].remove();//remove input name
        disDateInputs[3].remove();//remove input date
    }
})
////////////////////////////////////////////
btnsSub[4].addEventListener("click", (e) => {
    e.preventDefault();
    let cond1 = false;
    let cond2 = false;
    let cond3 = false;
    let cond4 = false;
    if (nameInputs[4].value === "")//check if name empty or not
    {
        alert("Name filed is empty");
        cond1 = true;

    }
    else if (disDateInputs[4].value === "") {//check if date empty or not
        alert("Date filed is empty");
        cond2 = true;

    }
    let letters = /^[A-Za-z]+$/;//check name validation
    if (!nameInputs[4].value.match(letters)) {
        alert('Please Please enter a valid name');
        cond3 = true;

    }
    // get the current date
    const dateInput = new Date(disDateInputs[4].value);
    const dayInput = dateInput.getDate();//get the current date by days
    const monthInput = dateInput.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
    const yearInput = dateInput.getFullYear();//get the current date by years
    //date check
    if (dateInput < dateNow) {
        alert('Enter a valid Discharge date');
        cond4 = true;

    }
    //if all validation true will convert the bed from empty to occupied
    if (!cond1 && !cond2 && !cond3 && !cond4) {
        patientPhotos[4].src = "./bedman.jpg";//change patient photo
        namePs[4].innerHTML = `${nameInputs[4].value}`;//show name
        legends[4].innerHTML = "Occupied";//show status
        addmissions[4].innerHTML = `${dayNow}-${monthNow}-${yearNow}`;//show Addmission date
        dischargeDates[4].innerHTML = `${dayInput}-${monthInput}-${yearInput}`;//show discharge date
        addmissionLables[4].style.display = "inline";//hiden addmission Lable
        btnsSub[4].remove();//remove sub button
        nameInputs[4].remove();//remove input name
        disDateInputs[4].remove();//remove input date
    }
})
////////////////////////////////////////////
btnsSub[6].addEventListener("click", (e) => {
    e.preventDefault();
    let cond1 = false;
    let cond2 = false;
    let cond3 = false;
    let cond4 = false;
    if (nameInputs[6].value === "")//check if name empty or not
    {
        alert("Name filed is empty");
        cond1 = true;

    }
    else if (disDateInputs[6].value === "") {//check if date empty or not
        alert("Date filed is empty");
        cond2 = true;

    }
    let letters = /^[A-Za-z]+$/;//check name validation
    if (!nameInputs[6].value.match(letters)) {
        alert('Please Please enter a valid name');
        cond3 = true;

    }
    // get the current date
    const dateInput = new Date(disDateInputs[6].value);
    const dayInput = dateInput.getDate();//get the current date by days
    const monthInput = dateInput.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
    const yearInput = dateInput.getFullYear();//get the current date by years
    //date check
    if (dateInput < dateNow) {
        alert('Enter a valid Discharge date');
        cond4 = true;

    }
    //if all validation true will convert the bed from empty to occupied
    if (!cond1 && !cond2 && !cond3 && !cond4) {
        patientPhotos[6].src = "./bedman.jpg";//change patient photo
        namePs[6].innerHTML = `${nameInputs[6].value}`;//show name
        legends[6].innerHTML = "Occupied";//show status
        addmissions[6].innerHTML = `${dayNow}-${monthNow}-${yearNow}`;//show Addmission date
        dischargeDates[6].innerHTML = `${dayInput}-${monthInput}-${yearInput}`;//show discharge date
        addmissionLables[6].style.display = "inline";//hiden addmission Lable
        btnsSub[6].remove();//remove sub button
        nameInputs[6].remove();//remove input name
        disDateInputs[6].remove();//remove input date
    }
})
//////////////////////////////////////////// 
btnsSub[7].addEventListener("click", (e) => {
    e.preventDefault();
    let cond1 = false;
    let cond2 = false;
    let cond3 = false;
    let cond4 = false;
    if (nameInputs[7].value === "")//check if name empty or not
    {
        alert("Name filed is empty");
        cond1 = true;

    }
    else if (disDateInputs[7].value === "") {//check if date empty or not
        alert("Date filed is empty");
        cond2 = true;

    }
    let letters = /^[A-Za-z]+$/;//check name validation
    if (!nameInputs[7].value.match(letters)) {
        alert('Please enter a valid name');
        cond3 = true;

    }
    // get the current date
    const dateInput = new Date(disDateInputs[7].value);
    const dayInput = dateInput.getDate();//get the current date by days
    const monthInput = dateInput.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
    const yearInput = dateInput.getFullYear();//get the current date by years
    //date check
    if (dateInput < dateNow) {
        alert(' Enter a valid Discharge date ');
        cond4 = true;

    }
    //if all validation true will convert the bed from empty to occupied
    if (!cond1 && !cond2 && !cond3 && !cond4) {
        patientPhotos[7].src = "./bedman.jpg";//change patient photo
        namePs[7].innerHTML = `${nameInputs[7].value}`;//show name
        legends[7].innerHTML = "Occupied";//show status
        addmissions[7].innerHTML = `${dayNow}-${monthNow}-${yearNow}`;//show Addmission date
        dischargeDates[7].innerHTML = `${dayInput}-${monthInput}-${yearInput}`;//show discharge date
        addmissionLables[7].style.display = "inline";//hiden addmission Lable
        btnsSub[7].remove();//remove sub button
        nameInputs[7].remove();//remove input name
        disDateInputs[7].remove();//remove input date
    }
})
////////////////////////////////////////////
btnsSub[8].addEventListener("click", (e) => {
    e.preventDefault();
    let cond1 = false;
    let cond2 = false;
    let cond3 = false;
    let cond4 = false;
    if (nameInputs[8].value === "")//check if name empty or not
    {
        alert("Name filed is empty");
        cond1 = true;

    }
    else if (disDateInputs[8].value === "") {//check if date empty or not
        alert("Date filed is empty");
        cond2 = true;

    }
    let letters = /^[A-Za-z]+$/;//check name validation
    if (!nameInputs[1].value.match(letters)) {
        alert('Please enter a valid date');
        cond3 = true;

    }
    // get the current date
    const dateInput = new Date(disDateInputs[8].value);
    const dayInput = dateInput.getDate();//get the current date by days
    const monthInput = dateInput.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
    const yearInput = dateInput.getFullYear();//get the current date by years
    //date check
    if (dateInput < dateNow) {
        alert(' Enter a valid Discharge date');
        cond4 = true;

    }
    //if all validation true will convert the bed from empty to occupied
    if (!cond1 && !cond2 && !cond3 && !cond4) {
        patientPhotos[8].src = "./bedman.jpg";//change patient photo
        namePs[8].innerHTML = `${nameInputs[8].value}`;//show name
        legends[8].innerHTML = "Occupied";//show status
        addmissions[8].innerHTML = `${dayNow}-${monthNow}-${yearNow}`;//show Addmission date
        dischargeDates[8].innerHTML = `${dayInput}-${monthInput}-${yearInput}`;//show discharge date
        addmissionLables[8].style.display = "inline";//hiden addmission Lable
        btnsSub[8].remove();//remove sub button
        nameInputs[8].remove();//remove input name
        disDateInputs[8].remove();//remove input date
    }
})


//////////////////////////////////////////////// END IN PATIENTS 



