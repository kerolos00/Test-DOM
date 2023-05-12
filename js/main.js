let imgList = Array.from(document.querySelectorAll(".item img"));
let boxContainer = document.getElementById("boxContainer");
let innerBox = document.querySelector(".innerBox");
let closeEle = document.getElementById("close");
let prevEle = document.getElementById("prev");
let nextEle = document.getElementById("next");
let currentIndex = null;

for (let i = 0; i < imgList.length; i++) {
  imgList[i].addEventListener("click", function (e) {
    boxContainer.style.display = "flex";
    let imageSrc = e.target.getAttribute("src");
    innerBox.style.backgroundImage = "url(" + imageSrc + ")";
    currentIndex = imgList.indexOf(e.target);
  });
}

closeEle.addEventListener("click", closeTag);
function closeTag() {
  boxContainer.style.display = "none";
}

nextEle.addEventListener("click", nextTag);
function nextTag() {
  currentIndex++;
  if (currentIndex == imgList.length) {
    currentIndex = 0;
  }
  let imgPath = imgList[currentIndex].getAttribute("src");
  innerBox.style.backgroundImage = "url(" + imgPath + ")";
}

prevEle.addEventListener("click", prevTag);
function prevTag() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = imgList.length - 1;
  }
  let imgPath = imgList[currentIndex].getAttribute("src");
  innerBox.style.backgroundImage = "url(" + imgPath + ")";
}

document.addEventListener("keyup", function (e) {
  if (e.code == "ArrowRight") {
    nextTag();
  } else if (e.key == "ArrowLeft") {
    prevTag();
  } else if (e.key == "Escape") {
    closeTag();
  }
});

boxContainer.addEventListener("click", function (e) {
  if (e.target.getAttribute("id") === "boxContainer") {
    closeTag();
  }
});
