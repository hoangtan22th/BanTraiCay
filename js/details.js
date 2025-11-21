document.addEventListener("DOMContentLoaded", function () {
  const quantityElement = document.querySelector(".details__number");
  const priceElement = document.getElementById("details__price");
  const totalPriceElement = document.getElementById("details__total__price");
  const productBtnDetails = document.getElementById("product__btn__details");
  const productBtnBuy = document.getElementById("buy__btn");
  const decreaseBtn = document.querySelector("#btn__pre");
  const increaseBtn = document.querySelector("#btn__next");

  let basePrice = 0;

  if (priceElement) {
    const priceText = priceElement.textContent
      .replace("Giá: ", "")
      .replace("đ", "")
      .replace(/\./g, "");
    basePrice = parseFloat(priceText) || 0;
    updateTotalPrice(parseInt(quantityElement.textContent) || 1);
  }

  function updateTotalPrice(quantity) {
    if (isNaN(basePrice)) basePrice = 0;
    const totalPrice = quantity * basePrice;
    if (totalPriceElement) {
      totalPriceElement.textContent = totalPrice.toLocaleString("vi-VN") + "đ";
    }
  }

  if (decreaseBtn) {
    decreaseBtn.addEventListener("click", function () {
      let quantity = parseInt(quantityElement.textContent);
      if (quantity > 1) {
        quantity--;
        quantityElement.textContent = quantity;
        updateTotalPrice(quantity);
      }
    });
  }

  if (increaseBtn) {
    increaseBtn.addEventListener("click", function () {
      let quantity = parseInt(quantityElement.textContent);
      quantity++;
      quantityElement.textContent = quantity;
      updateTotalPrice(quantity);
    });
  }

  function checkLogin(callback) {
    var isLogin = JSON.parse(localStorage.getItem("Login"));
    if (!isLogin) {
      alert("Hãy đăng nhập để thực hiện chức năng này.");
      window.location.href = "../html/login.html";
      return false;
    }
    callback();
  }

  if (productBtnBuy) {
    productBtnBuy.addEventListener("click", () => {
      checkLogin(() => {
        alert("Đã chuyển đến trang thanh toán (chưa xây dựng).");
      });
    });
  }

  if (productBtnDetails) {
    productBtnDetails.addEventListener("click", function () {
      checkLogin(() => {
        const productName = document.getElementById("details__des").textContent;
        const productPrice = basePrice; // Đơn giá dạng số
        const productImage = document.getElementById("details__img").src;
        const quantity = parseInt(quantityElement.textContent);
        const totalPrice = quantity * productPrice;

        let danhSachSanPham =
          JSON.parse(localStorage.getItem("danhSachSanPham")) || [];

        const existingProductIndex = danhSachSanPham.findIndex(
          (item) => item.tenSP === productName
        );

        if (existingProductIndex !== -1) {
          danhSachSanPham[existingProductIndex].soLuong += quantity;
          danhSachSanPham[existingProductIndex].tongGiaSP += totalPrice;
        } else {
          const sanPham = {
            tenSP: productName,
            giaSP: productPrice,
            hinhSP: productImage,
            soLuong: quantity,
            tongGiaSP: totalPrice,
          };
          danhSachSanPham.push(sanPham);
        }

        localStorage.setItem(
          "danhSachSanPham",
          JSON.stringify(danhSachSanPham)
        );
        alert(`Đã thêm ${quantity} sản phẩm ${productName} vào giỏ hàng!`);
        window.location.href = "cart.html";
      });
    });
  }
});
