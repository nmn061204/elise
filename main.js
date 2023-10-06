// slideshow
let slideIndex = 0;
let timeout;

showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    if (timeout) {
        clearTimeout(timeout); // Xóa timeout hiện tại
    }

    timeout = setTimeout(showSlides, 3000); // Đổi ảnh mỗi 2 giây
}

// Xử lý sự kiện khi người dùng nhấp vào dot
let dots = document.getElementsByClassName("dot");
for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", function() {
        slideIndex = i;
        showSlides();
    });
}
// phân trang
// Lấy danh sách sản phẩm và nút phân trang
const productList = document.querySelector('.list-products');
const pageButtons = document.querySelectorAll('.page-btn');

// Số sản phẩm trên mỗi trang
const productsPerPage = 8;

// Tính số lượng trang dựa trên số sản phẩm và sản phẩm trên mỗi trang
const totalProducts = productList.children.length;
const totalPages = Math.ceil(totalProducts / productsPerPage);

// Hiển thị sản phẩm trên trang đầu tiên khi trang web được tải
showPage(1);

// Gán sự kiện click cho nút phân trang
pageButtons.forEach((button, index) => {
  button.addEventListener('click', () => showPage(index + 1));
});

// Hiển thị sản phẩm trên trang cụ thể và ẩn sản phẩm dư
function showPage(page) {
  // Ẩn tất cả sản phẩm
  for (let i = 0; i < totalProducts; i++) {
    productList.children[i].style.display = 'none';
  }

  // Tính chỉ mục sản phẩm bắt đầu và kết thúc cho trang hiện tại
  const startIndex = (page - 1) * productsPerPage;
  const endIndex = Math.min(startIndex + productsPerPage, totalProducts);

  // Hiển thị sản phẩm trên trang hiện tại
  for (let i = startIndex; i < endIndex; i++) {
    productList.children[i].style.display = 'block';
  }
}

  
  


