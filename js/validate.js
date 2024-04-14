
window.onload = function () {
    function kiemTraHoTen() { 
        var hoTen = document.getElementById("txtHoTen").value;
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(hoTen)) {
            document.getElementById("tbHoTen").innerHTML = ""; 
            return true;
        } else {
            document.getElementById("tbHoTen").innerHTML = "Họ tên phải từ 2 chữ trở lên và không rỗng"; 
            return false;
        }
    }
    document.getElementById("txtHoTen").addEventListener("blur", function () {
        var kqHoTen = kiemTraHoTen();
        console.log(kqHoTen);
    });



};
