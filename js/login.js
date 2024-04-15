
window.onload = function () {

    document.getElementById('Login').addEventListener('click',function(){

        event.preventDefault();
        var username = document.getElementById('txtUserName').value;
        var password = document.getElementById('txtPassWord').value;
        var user = localStorage.getItem("user");
        var data = JSON.parse(user);

        console.log(user);
        console.log(data);
        if(username == "" || password == "" ){
            alert("Vui lòng nhập đủ thông tin!!");

        }
        else if(username != data.username || password != data.password){
            alert("Sai tài khoản hoặc mật khẩu!!");

        }
        else if(username == data.username && password == data.password)
        {
            localStorage.setItem('Login',true);
            alert("Đăng nhập thành công!!");
           
            window.location.href = "../html/home.html";
        }
        else{
            alert("Vui lòng nhập thông tin!!");
        }
    })


}
