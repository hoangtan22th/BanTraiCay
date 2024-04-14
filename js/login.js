
window.onload = function () {

    document.getElementById('Login').addEventListener('click',function(){

        event.preventDefault();
        var username = document.getElementById('txtUserName').value;
        var password = document.getElementById('txtPassWord').value;
        var user = localStorage.getItem("user");
        var data = JSON.parse(user);

        console.log(user);
        console.log(data);

        
        if(username == data.username && password == data.password)
        {
            localStorage.setItem('Login',true);
            alert("Đăng nhập thành công!!");
           
            window.location.href = "../html/home.html";
        }
        else{
            alert("Đm nhập không đúng");
        }
    })


}
