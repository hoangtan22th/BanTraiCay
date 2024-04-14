
window.onload = function () {

    document.getElementById('Login').addEventListener('click',function(){

        event.preventDefault();
        var username = document.getElementById('txtUserName').value;
        var password = document.getElementById('txtPassWord').value;
        var user = localStorage.getItem(username);
        var data = JSON.parse(user);
        if(user == null){
            alert("Vui lòng nhập tài khoản và mật khẩu")
        }
        else if(username == data.username && password == data.password)
        {
            localStorage.setItem('Login',true);
            alert("Đăng nhập thành công!!");
           
            window.location.href = "../html/home.html";
        }
        else{
            alert("Tài khoản hoặc mật khẩu không chính xác!!");
        }
    })


}
