// Function to fetch and refresh the table data
function fetchAndRefreshTable() {

    var fetchApiEndpoint = 'https://studentdeploy-production.up.railway.app/students';

    fetch(fetchApiEndpoint)
    .then(response => response.json())
    .then(data => {
        console.log('Fetched data:', data);

        // Clear existing table rows
        var table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
        table.innerHTML = '';

        // Add data to the table
        data.forEach(item => {
            var newRow = table.insertRow(table.rows.length);

            
            var cell1 = newRow.insertCell(0);
            cell1.innerHTML = item.firstName;

            var cell2 = newRow.insertCell(1);
            cell2.innerHTML = item.lastName;

            // Add "Update" button
            var cell3 = newRow.insertCell(2);
            var updateButton = document.createElement('button');
            updateButton.textContent = 'Update';
            updateButton.addEventListener('click', function() {
                
                fillFormWithData(item);
            });
            cell3.appendChild(updateButton);

            // Add "Delete" button
            var deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', function() {
                // Delete the corresponding row
                deleteRowWithApiCall(item.id, newRow);
            });
            cell3.appendChild(deleteButton);
        });
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

// Function to fill the form with data
function fillFormWithData(data) {
    document.getElementById('userId').value = data.id;
    document.getElementById('firstName').value = data.firstName;
    document.getElementById('lastName').value = data.lastName;
    document.getElementById('phone').value = data.phone;
    document.getElementById('gender').value = data.gender;
    document.getElementById('address').value = data.address;
   
}

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var formData = new FormData(this);
    var jsonData = {};
    formData.forEach(function(value, key){
        jsonData[key] = value;
    });
    var jsonString = JSON.stringify(jsonData);

    var userId = document.getElementById('userId').value;

    if (userId) {
        id=document.getElementById('userId').value;
        firstName=document.getElementById('firstName').value ;
       lastName= document.getElementById('lastName').value ;
       phone=  document.getElementById('phone').value ;
       dob= document.getElementById('dob').value;
        gender=document.getElementById('gender').value;
        address=document.getElementById('address').value ;
        students ={
            "id":id,
            "firstName":firstName,
            "lastName":lastName,
            "phone":phone,
            "dob":dob,
            "gender":gender,
            "address":address

        }

        
        console.log(students);
        
       
   
        var updateApiEndpoint =     "https://studentdeploy-production.up.railway.app/students" ;

        fetch(updateApiEndpoint, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(students)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);

            // Refresh the table after successfully updating an entry
            fetchAndRefreshTable();

            // Reset the form
            document.getElementById('myForm').reset();
            document.getElementById('userId').value = ''; 
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    } else {
          id=document.getElementById('userId').value;
        firstName=document.getElementById('firstName').value ;
       lastName= document.getElementById('lastName').value ;
       phone=  document.getElementById('phone').value ;
       dob= document.getElementById('dob').value;
        gender=document.getElementById('gender').value;
        address=document.getElementById('address').value ;
        students ={
            "id":id,
            "firstName":firstName,
            "lastName":lastName,
            "phone":phone,
            "dob":dob,
            "gender":gender,
            "address":address

        }
        // If userId is not present, it's an add (POST) operation
        var addApiEndpoint = 'https://studentdeploy-production.up.railway.app/students';

        fetch(addApiEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(students),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);

           
            fetchAndRefreshTable();

            
            document.getElementById('myForm').reset();
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
});

// Function to delete a row with an API call
function deleteRowWithApiCall(id, row) {
   
    var deleteApiEndpoint = 'https://studentdeploy-production.up.railway.app/students/' + id;

    fetch(deleteApiEndpoint, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => {
        if (response.ok) {
            console.log('Row deleted successfully.');

            // Refresh the table after successful deletion
            fetchAndRefreshTable();
        } else {
            console.error('Failed to delete row.');
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

// Initial fetch and table setup
fetchAndRefreshTable();