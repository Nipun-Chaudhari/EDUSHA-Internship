console.log('The script is added');    //---->IGNORE THIS 

const store = e => {
   let formData = {
      fname: document.getElementById("first-name").value,
      lname: document.getElementById("last-name").value,
      num: document.getElementById("number").value,
      email: document.getElementById("email").value,
      dob: document.getElementById("DOB").value,
      addr: document.getElementById("address").value
   }
   localStorage.setItem('formData', JSON.stringify(formData));
   console.log(JSON.parse(localStorage.getItem('formData')));
   e.preventDefault();
}

let submitBtn = document.getElementById("submit");

submitBtn.addEventListener('click', function () {
   document.write(localStorage.getItem('formData'));
});
localStorage.clear;