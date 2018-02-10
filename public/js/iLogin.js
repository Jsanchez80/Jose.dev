var username = "Luis";
var password = "password";


if (username == "iWorks" && password == "password") {
	getElementById("login-message").textContent = "Welcome back " + username +"!";
} else {
	getElementById("login-message").textContent = "Unfortunately, We cannot identify you. Please re enter your username and password.";
}