var imageContainer = document.querySelector(".image-container");
var images = imageContainer.getElementsByClassName("image");
var len = images.length;
var activeIndex = 0;

function setActiveImage(index) {
  // 移除之前激活的图片样式
  images[activeIndex].classList.remove("active");
  // 更新激活图片的索引
  activeIndex = index;
  // 添加新的激活图片样式
  images[activeIndex].classList.add("active");

  // 计算激活图片在容器中的位置
  var translateX = (len / 2 - activeIndex) * 20;
  imageContainer.style.transform = `translateX(${translateX}%)`;
}

for (var i = 0; i < len; i++) {
  images[i].addEventListener("click", function (event) {
    var index = Array.from(images).indexOf(event.target);
    setActiveImage(index);
  });
}

setActiveImage(activeIndex);
