function addCustomer(event)
{
    event.preventDefault();
    const firstName = document.getElementById("firstName").value;
const lastName = document.getElementById("lastName").value;
const phoneNumberumber = document.getElementById("phoneNumber").value;
const dob = document.getElementById("dob").value;
const gender = document.getElementById("gender").value;
const address = document.getElementById("address").value;

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw={
    "firstName":firstName,
    "lastName":lastName,
    "phoneNumber":phoneNumberumber,
    "dob":dob,
    "gender":gender,
    "address":address,


}
console.log(raw)
var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(raw),
    redirect: 'follow'
  
  };

  fetch("https://studentdeploy-production.up.railway.app/students",requestOptions)
  .then(response=> response.text())
  .then(result=>
    {
        console.log(result)
        
    }).catch(error=> console.log('error',error));
};

