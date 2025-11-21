window.onload = function () {
  function kiemTraHoTen() {
    var thongTin = document.getElementById("txtHoTen").value;
    var regex = /^(([A-ZÀ-Ỹ][a-zà-ỹ\s]+)+([A-ZÀ-Ỹ][a-zà-ỹ]*))$/;
    if (regex.test(thongTin)) {
      document.getElementById("tbHoTen").innerHTML = "";
      return true;
    } else {
      document.getElementById("tbHoTen").innerHTML =
        "Họ tên phải viết hoa chữ cái đầu và không rỗng";
      return false;
    }
  }
  document.getElementById("txtHoTen").addEventListener("blur", kiemTraHoTen);

  function kiemTraNgaySinh() {
    var ngaySinh = document.getElementById("txtNgaySinh").value;
    var ngaySinhDate = new Date(ngaySinh);
    var ngayHienTai = new Date();
    if (ngaySinhDate < ngayHienTai) {
      document.getElementById("tbNgaySinh").innerHTML = "";
      return true;
    } else {
      document.getElementById("tbNgaySinh").innerHTML =
        "Ngày sinh phải nhỏ hơn ngày hiện tại";
      return false;
    }
  }
  document
    .getElementById("txtNgaySinh")
    .addEventListener("blur", kiemTraNgaySinh);

  function kiemTraGioiTinh() {
    var maleRadio = document.getElementById("male");
    var femaleRadio = document.getElementById("female");
    if (
      (maleRadio && maleRadio.checked) ||
      (femaleRadio && femaleRadio.checked)
    ) {
      document.getElementById("tbGender").innerHTML = "";
      return true;
    } else {
      document.getElementById("tbGender").innerHTML = "Vui lòng chọn giới tính";
      return false;
    }
  }
  document
    .getElementById("txtGender")
    .addEventListener("click", kiemTraGioiTinh);

  function kiemTraDiaChi() {
    var thongTin = document.getElementById("txtDiaChi").value;
    var regex = /^[A-Za-z0-9\s/À-Ỹà-ỹ]+$/;
    if (regex.test(thongTin) && thongTin.trim() !== "") {
      document.getElementById("tbDiaChi").innerHTML = "";
      return true;
    } else {
      document.getElementById("tbDiaChi").innerHTML = "Địa chỉ không được rỗng";
      return false;
    }
  }
  document.getElementById("txtDiaChi").addEventListener("blur", kiemTraDiaChi);

  function kiemTraDienThoai() {
    var thongTin = document.getElementById("txtDienThoai").value;
    var regex = /^[0][1-9][0-9]{8}$/;
    if (regex.test(thongTin)) {
      document.getElementById("tbDienThoai").innerHTML = "";
      return true;
    } else {
      document.getElementById("tbDienThoai").innerHTML =
        "Số điện thoại chỉ 10 số và bắt đầu từ số 0";
      return false;
    }
  }
  document
    .getElementById("txtDienThoai")
    .addEventListener("blur", kiemTraDienThoai);

  function kiemTraEmail() {
    var thongTin = document.getElementById("txtEmail").value;
    var regex =
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (regex.test(thongTin)) {
      document.getElementById("tbEmail").innerHTML = "";
      return true;
    } else {
      document.getElementById("tbEmail").innerHTML = "Email phải đúng cú pháp";
      return false;
    }
  }
  document.getElementById("txtEmail").addEventListener("blur", kiemTraEmail);

  function kiemTraTaiKhoan() {
    var thongTin = document.getElementById("txtTaiKhoan").value;
    var regex = /^[a-z0-9]{6,12}$/;
    if (regex.test(thongTin)) {
      document.getElementById("tbTaiKhoan").innerHTML = "";
      return true;
    } else {
      document.getElementById("tbTaiKhoan").innerHTML =
        "Tài khoản từ 6-12 kí tự a-z0-9";
      return false;
    }
  }
  document
    .getElementById("txtTaiKhoan")
    .addEventListener("blur", kiemTraTaiKhoan);

  function kiemTraMatKhau() {
    var thongTin = document.getElementById("txtMatKhau").value;
    var regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (regex.test(thongTin)) {
      document.getElementById("tbMatKhau").innerHTML = "";
      return true;
    } else {
      document.getElementById("tbMatKhau").innerHTML =
        "Mật khẩu ít nhất 8 kí tự, 1 in hoa, 1 số, 1 đặc biệt";
      return false;
    }
  }
  document
    .getElementById("txtMatKhau")
    .addEventListener("blur", kiemTraMatKhau);

  function kiemTraMatKhau2() {
    var Mk2 = document.getElementById("txtMatKhau2").value;
    var Mk = document.getElementById("txtMatKhau").value;
    if (Mk === Mk2 && Mk2.trim() !== "") {
      document.getElementById("tbMatKhau2").innerHTML = "";
      return true;
    } else {
      document.getElementById("tbMatKhau2").innerHTML =
        "Mật khẩu nhập lại không đúng hoặc rỗng";
      return false;
    }
  }
  document
    .getElementById("txtMatKhau2")
    .addEventListener("blur", kiemTraMatKhau2);

  document.getElementById("Signup").addEventListener("click", function (event) {
    event.preventDefault();

    if (
      kiemTraHoTen() &&
      kiemTraNgaySinh() &&
      kiemTraGioiTinh() &&
      kiemTraDiaChi() &&
      kiemTraDienThoai() &&
      kiemTraEmail() &&
      kiemTraTaiKhoan() &&
      kiemTraMatKhau() &&
      kiemTraMatKhau2()
    ) {
      var username = document.getElementById("txtTaiKhoan").value;
      var password = document.getElementById("txtMatKhau").value;
      var user = {
        username: username,
        password: password,
      };
      localStorage.setItem("user", JSON.stringify(user));

      alert("Đăng ký thành công!");
      window.location.href = "../html/login.html"; // Chuyển về trang đăng nhập
    } else {
      alert("Vui lòng kiểm tra lại thông tin đăng ký!");
    }
  });
};
