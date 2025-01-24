const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstpageanim()
{
    var tl=gsap.timeline();

    tl.from("#nav",{
        y:'-15',
        opacity:0,
        duration:1.5,
        ease: Expo.easeInOut
    })

    .to(".bound-el",{
        y:0,
        duration:1.75,
        ease: Expo.easeInOut,
        stagger: 0.2,
        delay:-1
    })

    .from("#hero-footer",{
        y:-10,
        opacity:0,
        delay:-1,
        duration:1.5,
        ease: Expo.easeInOut
    })
}

function circleskew(){
    var xscale=1;
    var yscale=1;

    var xprev=0;
    var yprev=0;

    window.addEventListener("mousemove", function(dets) {
        var xdiff = dets.clientX - xprev;
        var ydiff = dets.clientY - yprev;

        
        xscale = gsap.utils.clamp(0.8, 1.2, xdiff);
        yscale = gsap.utils.clamp(0.8, 1.2, ydiff);

        
        xprev = dets.clientX;
        yprev = dets.clientY;

        
        circlemouse(dets.clientX, dets.clientY, xscale, yscale);
    });
}

function circlemouse(x, y, xscale, yscale) {
   
    document.querySelector("#circle-pointer").style.transform = `translate(${x}px, ${y}px) scale(${xscale}, ${yscale})`;
}
firstpageanim();



circleskew();

circlemouse();

document.querySelectorAll(".elem").forEach(function (elements) {
    elements.addEventListener("mousemove", function (dets) {
      gsap.from(elements.querySelector("img"), {
        opacity: 1,
        
        duration: 0.5,
      });
    });
});