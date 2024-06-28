let usernameInput = document.getElementById('usernameInput');
let passwordInput = document.getElementById('passwordInput');
let admin = document.getElementById('admin');
let member = document.getElementById('member');

admin.style.display = "none";
member.style.display = "none";
buttonLogout.style.display = "none"

function onLogin() {
	localStorage.setItem("username", usernameInput.value)
	if (usernameInput.value == "yyyy" && passwordInput.value == "1111") {
		localStorage.setItem("role", "admin")
		admin.style.display = "block"
		member.style.display = "none"
	} else {
		localStorage.setItem("role", "member")
		admin.style.display = "none"
		member.style.display = "block"
	}
}