function addCustomer(event)
{
    event.preventDefault();
    const firstName = document.getElementById("firstName").value;
const lastName = document.getElementById("lastName").value;
const phone = document.getElementById("phone").value;
const dob = document.getElementById("dob").value;
const gender = document.getElementById("gender").value;
const address = document.getElementById("address").value;

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw={
    "firstName":firstName,
    "lastName":lastName,
    "phone":phone,
    "dob":dob,
    "gender":gender,
    "address":address,


}

var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(raw),
   
  
  };

  fetch("https://studentdeploy-production.up.railway.app/students",requestOptions)
  .then(response=> response.json())
  .then(result=>
    {
        console.log('Success:', result);
        fetch("https://studentdeploy-production.up.railway.app/students")
        .then(res=>res.json())
        .then(
            data=>
            {
                
                var table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
                console.log(data);
                data.forEach(item => {
                    var newRow = table.insertRow(table.rows.length);

                    var cell1 = newRow.insertCell(0);
                    cell1.innerHTML ="First Name :"+ item.firstName +"  Last Name :"+ item.lastName + "  Phone Number : "+item.phone +"  Date of Birth :"+item.dob +"  Gender :"+item.gender+ "  Address :"+item.address
                    ;
    
                    var cell2 = newRow.insertCell(1);
                    var updateButton = document.createElement('button');
                    updateButton.textContent = 'Update';
                    updateButton.addEventListener('click', function() {
                   
                        fillFormWithData(item);
                    });
                    cell2.appendChild(updateButton);
    
                    var cell3 = newRow.insertCell(2);
                    var deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.addEventListener('click', function() {
                    // Delete the corresponding row
                    deleteRowWithApiCall(item.id, newRow);
                });
                cell3.appendChild(deleteButton);

                document.getElementById('myForm').reset();
                    
                })
                
            }).catch((error)=>
            {
                console.error("Error",error)
            })
            
            }
        )
     
    .catch((error)=>
    {
        console.error('Error',error);
    });
}



fetch("https://studentdeploy-production.up.railway.app/students")
        .then(res=>res.json())
        .then(
            data=>
            {
                
                var table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
                console.log(data);
             
                data.forEach(item => {
                    var newRow = table.insertRow(table.rows.length);
    
                    // Assuming the API response includes 'firstName', 'lastName', 'phoneNumber'
                    var cell1 = newRow.insertCell(0);
                    cell1.innerHTML ="First Name :"+ item.firstName +"  Last Name :"+ item.lastName + "  Phone Number : "+item.phone +"  Date of Birth :"+item.dob +"  Gender :"+item.gender+ "  Address :"+item.address
                    ;
    
                    var cell2 = newRow.insertCell(1);
                    var updateButton = document.createElement('button');
                    updateButton.textContent = 'Update';

                    updateButton.addEventListener('click', function() {
                        // Fill the form with data from the clicked row
                        fillFormWithData(item);
                    });
                    cell2.appendChild(updateButton);
    
                    var cell3 = newRow.insertCell(2);
                    var deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.addEventListener('click', function() {
                    // Delete the corresponding row
                    deleteRowWithApiCall(item.id, newRow);
                });
                cell3.appendChild(deleteButton);
    
                    
                })
                document.getElementById('myForm').reset();
            }).catch((error)=>
            {
                console.log("Error",error)
            })

            function fillFormWithData(data) {
                document.getElementById('firstName').value = data.firstName;
                document.getElementById('lastName').value = data.lastName;
                document.getElementById('phone').value = data.phone;
                document.getElementById('dob').value = data.dob;
                document.getElementById('gender').value = data.gender;
                document.getElementById('address').value = data.address;
                
                
                
              
            }


            const baseUrl = 'https://studentdeploy-production.up.railway.app/students';

            function deleteRowWithApiCall(id, row) {
               
                var deleteApiEndpoint = `${baseUrl}/${id}`;
                console.log(id)
                fetch(deleteApiEndpoint, {
                    method: 'DELETE',
                   
                })
                .then(response => {
                    if (response.ok) {
                        console.log('Row deleted successfully.');
    
                        // Delete the corresponding row from the table
                        var table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];

                        table.deleteRow(row.rowIndex);

                        location.reload();

                // Reset the form
                document.getElementById('myForm').reset();

                    } else {
                        console.log('Failed to delete row.');
                    }
                })
                .catch((error) => {
                    console.log('Error:', error);
                });
            
            }

            
           
              