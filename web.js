let list = document.getElementById("menu");
let flag = true;
function showBox(){
    if(flag==true){
        list.style.display ="block";
        flag =false;
    }
    else{
        list.style.display="none";
        flag =true;
    }
    console.log("hello")
}