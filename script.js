// console.log("This is main script file"); --> just to check whether the file is added or not

let button = document.getElementById("passwordForgot");
let popup = document.querySelector(".popup");
let closed = document.querySelector(".exit");
let sendOTP = document.getElementById("otp-button");

button.addEventListener('click', function(){
    popup.classList.add('activate');
})

closed.addEventListener('click', function(){
    popup.classList.remove('activate');
})

sendOTP.addEventListener('click', function(){
    alert("OTP has been sent successfully to your registered mobile number");
})