function login() {
    const u = document.getElementById("user").value;
    const p = document.getElementById("pass").value;

    if (u === "admin" && p === "123") {
        document.getElementById("loginBox").style.display = "none";
        document.getElementById("scoreBox").style.display = "block";
    } else {
        alert("Sai tài khoản hoặc mật khẩu");
    }
}
