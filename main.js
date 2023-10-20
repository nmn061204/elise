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
  let slideIndex = 0;
  let timeout;
  
  showSlides(slideIndex);
  
  function showSlides(index) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
  
    // Ẩn tất cả các slide và loại bỏ lớp "active" cho tất cả các "dot"
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      dots[i].classList.remove("active");
    }
  
    // Hiển thị slide hiện tại và đánh dấu "dot" tương ứng là "active"
    slides[index].style.display = "block";
    dots[index].classList.add("active");
  
    // Tăng chỉ số slide hoặc quay lại slide đầu nếu cần
    slideIndex = (index + 1) % slides.length;
  
    // Xóa timeout hiện tại và thiết lập timeout cho việc chuyển slide sau một khoảng thời gian
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => showSlides(slideIndex), 3000); // Chuyển slide mỗi 2 giây
  }
  
  // Xử lý sự kiện khi người dùng nhấp vào "dot"
  let dots = document.getElementsByClassName("dot");
  for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", function () {
      showSlides(i);
    });
  }
});



var productList = document.getElementById("product-list");
var pageButtons = document.querySelectorAll(".page-btn");

var productsPerPage = 60;
var currentPage = 1;
var totalProducts = productList.children.length;
var totalPages = Math.ceil(totalProducts / productsPerPage);

// Hiển thị sản phẩm trên trang đầu tiên khi trang web được tải
document.addEventListener("DOMContentLoaded", function () {
  showPage(currentPage);
});

// Xử lý sự kiện khi người dùng nhấp vào nút phân trang
pageButtons.forEach(function (button, index) {
    button.addEventListener("click", function () {
        if (index === 0) {
            if (currentPage > 1) {
                currentPage--;
            }
        } else if (index === pageButtons.length - 1) {
            if (currentPage < totalPages) {
                currentPage++;
            } else if (currentPage === totalPages && totalProducts % productsPerPage !== 0) {
                totalProducts = productList.children.length;
                totalPages = Math.ceil(totalProducts / productsPerPage);
                totalPages++;
                currentPage = totalPages;
            }
        } else {
            currentPage = index;
        }
        showPage(currentPage);
    });
});

// Hiển thị sản phẩm trên trang cụ thể
function showPage(page) {
    for (var i = 0; i < totalProducts; i++) {
        productList.children[i].style.display = "none";
    }

    var startIndex = (page - 1) * productsPerPage;
    var endIndex = Math.min(startIndex + productsPerPage, totalProducts);

    for (var i = startIndex; i < endIndex; i++) {
        productList.children[i].style.display = "block";
    }

    pageButtons.forEach(function (button, index) {
        var buttonPage = parseInt(button.getAttribute("data-page"));
        if (buttonPage === page) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });

    pageButtons.forEach(function (button, index) {
        if (index === 0 && currentPage === 1) {
            button.style.display = "none";
        } else if (index === pageButtons.length - 1 && currentPage === totalPages) {
            button.style.display = "none";
        } else if (index === currentPage) {
            button.classList.add("active");
        } else {
            button.style.display = "inline";
            button.classList.remove("active");
        }
    });
}
