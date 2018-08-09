window.onload=function () {
    let user=document.getElementById("userName");
    let psw=document.getElementById("psw");
    let login1=document.getElementById("login1");
    console.log(login1,psw,user);

    login1.onclick=function () {
        if(user.value=="zs" && psw.value=="111111"){
            alert("success");
            user.value="";
            psw.value="";
        }
        else{
            window.open("error.html");
        }
    }

}