window.onload = function () {
  document.getElementById("Login").addEventListener("click", function (event) {
    event.preventDefault();
    var username = document.getElementById("txtUserName").value;
    var password = document.getElementById("txtPassWord").value;
    var userString = localStorage.getItem("user");

    if (username === "" || password === "") {
      alert("Vui lòng nhập đủ thông tin!!");
      return;
    }

    if (!userString) {
      alert("Tài khoản chưa tồn tại. Vui lòng đăng ký!");
      return;
    }

    var data = JSON.parse(userString);

    if (username === data.username && password === data.password) {
      localStorage.setItem("Login", true);
      alert("Đăng nhập thành công!!");
      window.location.href = "../html/home.html";
    } else {
      alert("Sai tài khoản hoặc mật khẩu!!");
    }
  });
};
