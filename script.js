//your JS code here. If required.
const submitBtn = document.querySelector("#submit");
const existingBtn = document.querySelector("#existing");
const checkbox = document.querySelector("#checkbox");

const savedUsername = localStorage.getItem("username");
const savedPassword = localStorage.getItem("password");

if(savedUsername && savedPassword){
	existingBtn.style.display = "block";
}

submitBtn.addEventListener("click" ,function(){

	const username = document.querySelector("#username").value;

	alert(`Logged in as ${username}`);
})