// Check Validation
function validation(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var website = document.getElementById('website').value;
    var image = document.getElementById('image').value;
    if(name === ""){
        document.getElementById('name_error').innerHTML = "Please Enter Username";
        return false;
    }
    if(!isNaN(name)){
        document.getElementById('name_error').innerHTML = "Only Characters are allowed";
        return false;
    }
    if(email == ""){
        document.getElementById('name_error').innerHTML = "";
        document.getElementById('email_error').innerHTML = "Please Enter Email ID";
        return false;
    }
    if(email.indexOf('@') <= 0){
        document.getElementById('email_error').innerHTML = "@ Invalid Position";
        return false;
    }
    if((email.charAt(email.length - 4) != '.') && (email.charAt(email.length - 3) != '.')){
        document.getElementById('email_error').innerHTML = ". Invalid Position";
        return false;
    }
    if(website == ""){
        document.getElementById('name_error').innerHTML = "";
        document.getElementById('email_error').innerHTML = "";
        document.getElementById('website_error').innerHTML = "Please Enter Website";
        return false;
    }
    if(image == ""){
        document.getElementById('name_error').innerHTML = "";
        document.getElementById('email_error').innerHTML = "";
        document.getElementById('website_error').innerHTML = "";
        document.getElementById('image_error').innerHTML = "Please Enter Image";
        return false;
    }
    document.getElementById('image_error').innerHTML = "";
    return true;
}

// Display Data in Enroll Student Table
function displayData(){
    var tableBody=document.getElementById("tableBody");
    let str="";

    itemJsonArrayStr=localStorage.getItem('itemJson');
    itemJsonArray=JSON.parse(itemJsonArrayStr);
    itemJsonArray.forEach(element => {
        str +=  `
        <tr>
        <td>
            <p id="details"><b>${element[0]}</b><br>
            ${element[4]}<br>
            ${element[1]}<br>
            <a href="${element[2]}" target="_blank">${element[2]}</a><br>
            ${element[5]}</p>
        </td>
        <td id="imgBlock">
            <img src="${element[3]}" alt="image of user" height="100px" width="100px" id="imgStudent">
        </td>
         </tr>
        
        `;
    });
    tableBody.innerHTML=str;
}

// to Enroll student
enroll=document.getElementById("enroll");

enroll.addEventListener("click",function(){
    
    if(validation()){

    // get student form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var website = document.getElementById('website').value;
    var image = document.getElementById('image').value;
    var gender = document.querySelector('input[type="radio"]:checked').value;
    var skillLength = document.form1.skill.length;
    var skillValue = "";
    for(i = 0; i < skillLength; i++){
        var skillChecked = document.form1.skill[i].checked;
        if(skillChecked){
            skillValue += document.form1.skill[i].value + ", ";
        }
    }
    var totalSkills=  skillValue.slice(0,skillValue.length-2);

    if(localStorage.getItem('itemJson')==null){
        itemJsonArray=[];
        itemJsonArray.push([name,email,website,image,gender,totalSkills]);
        localStorage.setItem('itemJson',JSON.stringify(itemJsonArray));
    }
    else{
    itemJsonArrayStr=localStorage.getItem('itemJson');
    itemJsonArray=JSON.parse(itemJsonArrayStr);
    itemJsonArray.push([name,email,website,image,gender,totalSkills]);
    localStorage.setItem('itemJson',JSON.stringify(itemJsonArray));
    }
  
    displayData();

    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('website').value = "";
    document.getElementById('image').value = ""; 
}
else{
    console.log("Invalid Input");
}
    
});
document.ready(displayData());