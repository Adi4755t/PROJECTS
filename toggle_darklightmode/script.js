let menutoggle=document.querySelector('.menutoggle');
let lightdark=document.querySelector('.light-dark');
let body=document.querySelector('body');
let video=document.querySelector('video');
let dark=false
let nav=document.querySelector('.nav');

menutoggle.onclick=function(){
    menutoggle.classList.toggle('active');
    nav.classList.toggle('active');
}

lightdark.onclick=function(){
    dark=!dark;
    lightdark.classList.toggle('active');
    body.classList.toggle('dark');

    if(dark){
        video.setAttribute('src','adi2.mp4');
    }
    else{
        video.setAttribute('src','adi1.mp4');
        color:white
    }
}