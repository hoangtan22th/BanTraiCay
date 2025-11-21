// File: js/search.js

// Định nghĩa hàm khởi tạo tìm kiếm để module_loader gọi sau khi nạp Header
function initializeSearchLogic() {
  const searchInput = document.getElementById("header__search__input");
  const btnTim = document.getElementById("btn__tim");

  function performSearch() {
    // Lấy từ khóa tìm kiếm
    const searchQuery = searchInput ? searchInput.value.trim().toLowerCase() : "";

    if (!searchQuery) {
      alert("Vui lòng nhập từ khóa tìm kiếm!");
      return;
    }

    // Kiểm tra nếu đang ở trang sản phẩm và có danh sách sản phẩm để lọc
    if (
      (window.location.pathname.includes("product.html") ||
      window.location.pathname.includes("productDetails.html")) &&
      typeof products !== "undefined"
    ) {
      // Nếu đang ở trang sản phẩm, thực hiện lọc trực tiếp (nếu có logic lọc DOM)
      // Tuy nhiên, code cũ của bạn chuyển hướng, ta giữ nguyên logic chuyển hướng cho đồng bộ
      // Hoặc nếu bạn muốn lọc ngay trên DOM:
      const productList = document.querySelectorAll(".product__list .product__link");
      let found = false;
      
      if(productList.length > 0) {
          productList.forEach(function (productLink) {
            const productNameElement = productLink.querySelector(".product__des p");
            if (productNameElement) {
                const productName = productNameElement.innerText.trim().toLowerCase();
                if (productName.includes(searchQuery)) {
                  productLink.style.display = "block";
                  found = true;
                } else {
                  productLink.style.display = "none";
                }
            }
          });
          if(!found && !window.location.search.includes(searchQuery)) {
             alert(`Không tìm thấy sản phẩm nào tên: "${searchQuery}"`);
          }
      } else {
          // Nếu không có DOM list (trường hợp productDetails), chuyển về trang product
           window.location.href = `../html/product.html?search=${encodeURIComponent(searchQuery)}`;
      }

    } else {
      // Nếu ở trang khác (Home, Cart...), chuyển hướng sang trang Product kèm từ khóa
      console.log("Redirecting search to product page...");
      window.location.href = `../html/product.html?search=${encodeURIComponent(searchQuery)}`;
    }
  }

  if (btnTim) {
    // Sự kiện click nút tìm
    btnTim.addEventListener("click", function (event) {
      event.preventDefault();
      performSearch();
    });
  }

  if (searchInput) {
    // BỔ SUNG: Sự kiện nhấn Enter trong ô input
    searchInput.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        performSearch();
      }
    });

    // Điền lại từ khóa vào ô input nếu trên URL có tham số search
    const urlParams = new URLSearchParams(window.location.search);
    const initialSearch = urlParams.get("search");
    if (initialSearch) {
      searchInput.value = initialSearch;
      // Nếu đang ở trang product.html, tự động kích hoạt lọc
      if (window.location.pathname.includes("product.html")) {
          setTimeout(performSearch, 500); // Đợi 1 chút để list sản phẩm render xong
      }
    }
  }
}