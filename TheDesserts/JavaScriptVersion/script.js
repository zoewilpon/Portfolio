/* var imageArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

var index = 0;


document.getElementById("next").onclick = function(){
    index++;
    if (index >= imageArray.length){
        index = 0;
    }
    document.querySelector("img").src = imageArray[index];
};

document.getElementById("previous").onclick = function(){
    index--;
    if (index < 0){
        index = (imageArray.length-1);
    }
    document.querySelector("img").src = imageArray[index];
};

 */

/*REDO ES6*/

/* const imageArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

let index = 0;

document.getElementById("next").onclick = () => {    
    index++;
    if (index >= imageArray.length){
        index = 0;
    }
    document.querySelector("img").src = imageArray[index];
};

document.getElementById("previous").onclick = () => {
    index--;
    if (index < 0){
        index = (imageArray.length-1);
    }
    document.querySelector("img").src = imageArray[index];
} */

/*REDO ES6 + 1 FUNCTION*/

/* const imageArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

let index = 0;

const changeImage = (direction) => {
    direction === "next" ? index++ : index--;
    index = (index >= imageArray.length) ? 0 : (index < 0) ? (imageArray.length-1) : index;
    document.querySelector("img").src = imageArray[index];
};

document.getElementById("next").addEventListener("click", () => changeImage("next"));
document.getElementById("previous").addEventListener("click", () => changeImage("previous")); */


//Redo jQuery //

const imageArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

let index = 0;

const changeImage = (direction) => {  
    direction === "next" ? index++ : index--;  // if direction is next, increment index, else decrement index (aka changing the index and therefor the direction of the images)
    index = (index >= imageArray.length) ? 0 : (index < 0) ? (imageArray.length-1) : index; // if index is greater than or equal to the length of the array, set index to 0, else if index is less than 0, set index to the length of the array minus 1, else set index to index
    $("img").attr("src", imageArray[index]); 

};  



/* function changeImage(direction){
    if (direction === "next") {
        index++;
        if (index >= imageArray.length) {
        index = 0;
    }
    } else {
        index--;
        if (index < 0) {
        index = (imageArray.length - 1);
        }
    }
    $("img").attr("src", imageArray[index]);
}; */

$("#next").click(() => changeImage("next"));
$("#previous").click(() => changeImage("previous"));



