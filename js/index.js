// var femaleData=[
//     {
//         image_url:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/berna/berna30007192f2/berna30007192f2_1650048139171_2-0._QL90_UX346_.jpg" ,

//         name:"Nitish",


//     }
// ]



let thumb=document.getElementsByClassName("thumb");

let slider=document.getElementById("slider");

let btnrigtht=document.getElementById("slide_right");

let btnleft=document.getElementById("slide_left");

btnleft.addEventListener("click",()=>{
    slider.scrollLeft -=125;
})

btnrigtht.addEventListener("click",()=>{
    slider.scrollLeft +=125;
})

const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

// alert(maxScrollLeft)

function autoPlay(){
    if(slider.scrollLeft >(maxScrollLeft-1)){
        slider.scrollLeft -=maxScrollLeft;
    }
    else{
        slider.scrollLeft += 1;
    }
}

let play= setInterval(autoPlay,50);

