newbtn=document.querySelector("#newmode");
let cmode= "light";
newbtn.addEventListener("click",()=>
{
    console.log("naughty boy");
    if(cmode==="light")
    {
        cmode="dark";
        document.querySelector("body").style.backgroundColor="black";
    }
    else{
        cmode="light";
        document.querySelector("body").style.backgroundColor="purple";
    }
})