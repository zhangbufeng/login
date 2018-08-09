window.onload=function () {
    let  Time=document.getElementsByTagName("span")[0];
    let num=Time.innerText;
    let t=window.setInterval(fn,1000);
    function fn() {
        num--;
        Time.innerText=num;
        if (num == 0) {
            clearInterval(t)
            close();
        }
    }
}