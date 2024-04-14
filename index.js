


/*
const inputForm = document.querySelector("form");

inputForm.addEventListener("submit", (event) => {
    event.preventDefault();

const userName=document.querySelector("input#userName").value
const email=document.querySelector("input#email").value
console.log(userName);
console.log(email);

submitData(userName,email);
});

const submitData = (userName,email) => {


    const formData = {
        name:userName,
        email: email  
        };

//console.log(formData);
        const configurationObject = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
            },
            body: JSON.stringify(formData),
          };
          
          fetch("http://localhost:3000/users", configurationObject)
            .then(function (response) {
              return response.json();
            })
            .then(function (object) {
              console.log(object);
            })
            .catch(function (error) {
              alert("Bad things! Ragnarők!");
              console.log(error.message);
            });

        
        
 
    };

    document.addEventListener('DOMContentLoaded', submitData);
*/



function  submitData(name,email){


    const formData = {
        name:name,
        email: email  
        };

//console.log(formData);
        const configurationObject = {
            method: "POST",
            headers: {
              "content-Type": "application/json",
              "accept": "application/json",
            },
            body: JSON.stringify(formData),
          };
          
       return   fetch("http://localhost:3000/users", configurationObject)
            
     
        .then((response) => response.json())
        .then((data) => {
            const title = document.createElement('h4');
            title.textContent = data.id;
            document.body.appendChild(title);
        })
        .catch(function (error) {
            alert("Bad things! Ragnarők!");

            const err = document.createElement('H2');
            err.textContent = error.message;
            document.body.appendChild(err);
            console.log(error.message);
        });


}