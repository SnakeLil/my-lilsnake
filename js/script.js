document.addEventListener("DOMContentLoaded", function(event) {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('#left');
    const nextBtn = document.querySelector('#right');
    var indicators = document.querySelectorAll('.carousel-indicators li');
    let currentSlide = 0;
  
    function showSlide(index) {
      slides.forEach((slide) => {
        slide.classList.remove('active');
      });
      
      slides[index].classList.add('active');
                  // 移除之前活动指示器的活动类
                  document.querySelector('.carousel-indicators .active').classList.remove('active');
                  // 将新的指示器项添加活动类
                  indicators[index].classList.add('active');
    }
  
    function nextSlide() {
      currentSlide++;
      if (currentSlide >= slides.length) {
        currentSlide = 0;

      }
  
      showSlide(currentSlide);
    }
    function prevSlide() {
      currentSlide--;
      if (currentSlide < 0) {
        currentSlide = slides.length - 1;
      }
      showSlide(currentSlide);
    }
  
    showSlide(currentSlide); // 将第一张图片设为活动状态
  
    // 调用nextSlide函数，每隔3秒切换到下一张图片
    setInterval(nextSlide, 3000);
      function navigateToPage(pageId) {
    // 隐藏当前显示的页面
    const currentPage = document.querySelector('.page.active');
    currentPage.classList.remove('active');
  
    // 显示目标页面
    const targetPage = document.getElementById(pageId);
    targetPage.classList.add('active');
    
    
  }
  // 点击下一个按钮时显示下一张幻灯片
  nextBtn.addEventListener("click", function() {
    nextSlide();
});

// 点击上一个按钮时显示上一张幻灯片
prevBtn.addEventListener("click", function() {
    prevSlide();
});

// 点击指示器时显示对应的幻灯片
for (var i = 0; i < indicators.length; i++) {
    (function(index) {
        indicators[i].addEventListener("click", function() {
            showSlide(index);
            currentSlide = index;
        });
    })(i);
}

// 显示初始幻灯片
showSlide(currentSlide);
  });

  
