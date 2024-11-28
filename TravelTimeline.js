berlin.addEventListener('click',function (){
    console.log("City being changed");
    document.getElementById("banner").src="images/berlin.png";
})

prague.addEventListener('click',function (){
    console.log("City being changed");
    document.getElementById("banner").src="images/prague.png";

})

vienna.addEventListener('click',function (){
    console.log("City being changed");
    document.getElementById("banner").src="images/vienna copy.webp";

})

munich.addEventListener('click',function (){
    console.log("City being changed");
    document.getElementById("banner").src="images/MusicfromMunich.png";

})

amsterdam.addEventListener('click',function (){
    console.log("City being changed");
    document.getElementById("banner").src="images/Amsterdam.png";

})

const changeText = document.querySelector("change-text");

changeText.addEventListener("click", function (){
    console.log("Text being changed");
    changeText.textContent = "Text has been changed!";

});