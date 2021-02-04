const slidshowimg =["lamen.jpg","souhan.jpg","chaozu.jpg"];
let second = -1;


function slideshow_timer(){
    if (second === 2){
        second = 0;
    } else {
        second ++;
    }
    document.getElementById("slideshow").src = slidshowimg[second];
}

setInterval(slideshow_timer, 1500);






document.getElementById("close").addEventListener("click",function(){
    document.getElementById("poppuapp").classList.add("active")
    document.getElementById("mask").classList.add("active")
})