
window.onload = function () {



    // kiểm tra Họ và Tên
    function kiemTraHoTen() {
        var thongTin = document.getElementById("txtHoTen").value;
        var regex = /^(([A-Z][a-z\s]+)+([A-Z][a-z]*))$/;
        if (regex.test(thongTin)) {
            document.getElementById("tbHoTen").innerHTML = "";
            return true;
        } else {
            document.getElementById("tbHoTen").innerHTML = "vd : Nguyen Hoang và không rỗng";
            return false;

        }
    }
    document.getElementById("txtHoTen").addEventListener("blur", function () {
        kiemTraHoTen();
        
    });
    //Kiểm tra ngày sinh
    function kiemTraNgaySinh() {
        // Lấy giá trị ngày sinh từ phần tử input
        var ngaySinh = document.getElementById("txtNgaySinh").value;
    
        // Chuyển đổi ngày sinh thành đối tượng Date
        var ngaySinhDate = new Date(ngaySinh);
    
        // Lấy ngày hiện tại
        var ngayHienTai = new Date();
    
        // So sánh ngày sinh với ngày hiện tại
        if (ngaySinhDate <= ngayHienTai) {
            document.getElementById("tbNgaySinh").innerHTML = "";

            return true; // Ngày sinh hợp lệ (nhỏ hơn hoặc bằng ngày hiện tại)
        } else {
            document.getElementById("tbNgaySinh").innerHTML = "Ngày sinh phải nhỏ hơn ngày hiện tại";

            return false; // Ngày sinh không hợp lệ (lớn hơn ngày hiện tại)
        }
    }
    document.getElementById("txtNgaySinh").addEventListener("blur", function () {
        kiemTraNgaySinh();
        
    });
    // Kiểm tra đã checked giới tính chưa
    function kiemTraGioiTinh() {
        var maleRadio = document.getElementById("male");
        var femaleRadio = document.getElementById("female");

        if (maleRadio.checked) {
            document.getElementById("tbGender").innerHTML = "";
           return true;
        } else if (femaleRadio.checked) {
            document.getElementById("tbGender").innerHTML = "";
            return true;
        } else {
            document.getElementById("tbGender").innerHTML = "Vui lòng chọn giới tính";
            return false;

        }
    }
    document.getElementById("txtGender").addEventListener("click", function () {
        kiemTraGioiTinh();
       
    });
    // Kiểm tra Địa chỉ
    function kiemTraDiaChi() {
        var thongTin = document.getElementById("txtDiaChi").value;
        var regex = /^[A-Za-z0-9\s]+$/;
        if (regex.test(thongTin)) {
            document.getElementById("tbDiaChi").innerHTML = "";
            return true;
        } else {
            document.getElementById("tbDiaChi").innerHTML = "Địa chỉ không được rỗng";
            return false;
        }
    }
    document.getElementById("txtDiaChi").addEventListener("blur", function () {
        kiemTraDiaChi();
        
    });
    // Kiểm tra Điện thoại
    function kiemTraDienThoai() {
        var thongTin = document.getElementById("txtDienThoai").value;
        var regex = /^[0][1-9][0-9]{8}$/;

        if (regex.test(thongTin)) {
            document.getElementById("tbDienThoai").innerHTML = "";
            return true;
        } else {
            document.getElementById("tbDienThoai").innerHTML = "Số điện thoại chỉ 10 số và bắt đầu từ số 0";
            return false;
        }
    }
    document.getElementById("txtDienThoai").addEventListener("blur", function () {
        kiemTraDienThoai();
        
    });
    // Kiểm tra Email
    function kiemTraEmail() {
        var thongTin = document.getElementById("txtEmail").value;
        var regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (regex.test(thongTin)) {
            document.getElementById("tbEmail").innerHTML = "";
            return true;
        } else {
            document.getElementById("tbEmail").innerHTML = "Email phải đúng cú pháp @.com";
            return false;
        }
    }
    document.getElementById("txtEmail").addEventListener("blur", function () {
       kiemTraEmail();
        
    });
    // Kiểm tra Tài Khoản
    function kiemTraTaiKhoan() {
        var thongTin = document.getElementById("txtTaiKhoan").value;
        var regex = /^[a-z0-9]{6,12}$/;

        if (regex.test(thongTin)) {
            document.getElementById("tbTaiKhoan").innerHTML = "";
            return true;
        } else {
            document.getElementById("tbTaiKhoan").innerHTML = "Tài khoản từ 6-12 kí tự a-z0-9";
            return false;
        }
    }
    document.getElementById("txtTaiKhoan").addEventListener("blur", function () {
         kiemTraTaiKhoan();
       
    });
    // Kiểm tra Mật Khẩu
    function kiemTraMatKhau() {
        var thongTin = document.getElementById("txtMatKhau").value;
        var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (regex.test(thongTin)) {
            document.getElementById("tbMatKhau").innerHTML = "";
            return true;
        } else {
            document.getElementById("tbMatKhau").innerHTML = "Mật khẩu ít nhất 8 kí tự, 1 in hoa,1 đặc biệt";
            return false;
        }
    }
    document.getElementById("txtMatKhau").addEventListener("blur", function () {
       kiemTraMatKhau();
       
    });

    // Kiểm tra Mật Khẩu 2
    function kiemTraMatKhau2() {
        var Mk2 = document.getElementById("txtMatKhau2").value;
        var Mk = document.getElementById("txtMatKhau").value;
        if (Mk === Mk2) {
            document.getElementById("tbMatKhau2").innerHTML = "";
            return true;
        }
        else {
            document.getElementById("tbMatKhau2").innerHTML = "Mật khẩu nhập lại không đúng";
            return false;
        }



    }
    document.getElementById("txtMatKhau2").addEventListener("blur", function () {
       kiemTraMatKhau2();
        
    });

    document.getElementById("Signup").addEventListener("click", function () {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của nút

        // Kiểm tra nếu tất cả là true thì cho phép đăng ký
        if (kiemTraHoTen() &&kiemTraNgaySinh() && kiemTraGioiTinh() && kiemTraDiaChi() &&
            kiemTraDienThoai() &&
            kiemTraEmail() &&
            kiemTraTaiKhoan() &&
            kiemTraMatKhau() && kiemTraMatKhau2()) {
            var username = document.getElementById('txtTaiKhoan').value;
            var password = document.getElementById('txtMatKhau').value;
            var user = {
                username:username,
                password:password,


            };
            var json =JSON.stringify(user);
            localStorage.setItem("user",json);

            alert("Đăng ký thành công!");



        } else {


            alert("Vui lòng kiểm tra lại thông tin đăng ký!");
        }


    });




};
