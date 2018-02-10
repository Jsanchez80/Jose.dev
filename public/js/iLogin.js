var username = "";
var password = "";


	function verifyUser() {
		if (username == "iWorks" && password == "password") {
		document.getElementById("login-message").textContent = "Welcome back " + username +"!";
		} else {
		document.getElementById("login-message").textContent = "Unfortunately, We cannot identify you. Please re enter your username and password.";
		}

	}