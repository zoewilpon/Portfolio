const imageArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

let index = 0;

const changeImage = (direction) => {
    direction === "next" ? index++ : index--;
    index = (index >= imageArray.length) ? 0 : (index < 0) ? (imageArray.length-1) : index;
    document.querySelector("img").src = imageArray[index];
};

document.getElementById("next").addEventListener("click", () => changeImage("next"));
document.getElementById("previous").addEventListener("click", () => changeImage("previous"));