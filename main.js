// scroll header
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
  
    if (window.scrollY > 120) { 
      header.classList.add('shrink');
    } else {
      header.classList.remove('shrink');
    }
  });

document.addEventListener("DOMContentLoaded", function () {
  // Lấy các phần tử HTML cần thiết
  var modal = document.querySelector(".canvas-customer-login");
  var modalMenu = document.querySelector(".header-canvas-menu");
  var btn = document.querySelector(".header-account");
  var overLay = document.querySelector(".header-overlay");
  var btnClose = document.querySelector(".close");
  var btnClose2 = document.querySelector(".header-overlay");

  // Xử lý sự kiện khi người dùng nhấp vào nút mở cửa sổ đăng nhập
  btn.addEventListener("click", function () {
      modal.style.right = "0";
      overLay.style.display = "block";
  });

  // Xử lý sự kiện khi người dùng nhấp vào nút đóng cửa sổ đăng nhập
  btnClose.addEventListener("click", function () {
      modal.style.right = "-500px";
      overLay.style.display = "none";
  });

  // Xử lý sự kiện khi người dùng nhấp vào nút đóng cửa sổ đăng nhập hoặc nền đen mờ
  btnClose2.addEventListener("click", function () {
      modal.style.right = "-500px";
      overLay.style.display = "none";
  });

  // Xử lý slideshow
  var slideIndex = 0;
  var timeout;

  showSlides();

  function showSlides() {
      var i;
      var slides = document.querySelectorAll(".slide");
      var dots = document.querySelectorAll(".dot");

      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }

      slideIndex++;

      if (slideIndex > slides.length) {
          slideIndex = 1;
      }

      for (i = 0; i < dots.length; i++) {
          dots[i].classList.remove("active");
      }

      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].classList.add("active");

      if (timeout) {
          clearTimeout(timeout);
      }

      timeout = setTimeout(showSlides, 3000); // Đổi ảnh mỗi 3 giây
  }

  // Xử lý sự kiện khi người dùng nhấp vào các dot
  var dots = document.querySelectorAll(".dot");
  dots.forEach(function (dot, index) {
      dot.addEventListener("click", function () {
          slideIndex = index;
          showSlides();
      });
    }); 
});