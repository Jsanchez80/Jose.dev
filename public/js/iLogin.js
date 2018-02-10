var username = "";
var password = "";
var name = "Luis";

if (username == "iWorks" && password == "password") {
	getElementById("login-message").textContent = "Welcome back " + name +"!";
} else {
	getElementById("login-message").textContent = "Unfortunately, We cannot identify you. Please re enter your username and password.";
}