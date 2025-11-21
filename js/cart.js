document.addEventListener("DOMContentLoaded", function () {
  const cartTable = document.getElementById("table__cart");
  const btnBuy = document.getElementById("btn__buy");

  const formatPrice = (price) => price.toLocaleString("vi-VN") + "đ";

  function renderCart() {
    let danhSachSanPham =
      JSON.parse(localStorage.getItem("danhSachSanPham")) || [];
    let totalAmount = 0;

    if (cartTable) {
      const tbody = cartTable.querySelector("tbody");
      tbody.innerHTML = "";

      if (danhSachSanPham.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding: 20px;">Giỏ hàng của bạn đang trống. <a href="product.html" style="color:blue">Mua sắm ngay</a></td></tr>`;
        updateTotal(0);
        return;
      }

      danhSachSanPham.forEach(function (sanPham, index) {
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
          <td>${index + 1}</td>
          <td><img src="${sanPham.hinhSP}" alt="${
          sanPham.tenSP
        }" id="cart__img" style="width: 60px; height: 60px; object-fit: cover; border-radius: 5px;"></td>
          <td style="font-weight: 500;">${sanPham.tenSP}</td>
          <td>${formatPrice(sanPham.giaSP)}</td>
          <td>${sanPham.soLuong}</td>
          <td style="color: red; font-weight: bold;">${formatPrice(
            sanPham.tongGiaSP
          )}</td>
          <td>
            <button class="btn-delete-item" data-index="${index}">
              <i class="fa-solid fa-trash"></i> Xóa
            </button>
          </td>
        `;
        tbody.appendChild(newRow);
        totalAmount += sanPham.tongGiaSP;
      });

      const deleteButtons = document.querySelectorAll(".btn-delete-item");
      deleteButtons.forEach((btn) => {
        btn.addEventListener("click", function () {
          const indexToDelete = this.getAttribute("data-index");
          deleteProduct(indexToDelete);
        });
      });

      updateTotal(totalAmount);
    }
  }

  function updateTotal(amount) {
    const tfoot = cartTable.querySelector("tfoot");
    if (tfoot) {
      if (amount > 0) {
        tfoot.innerHTML = `
          <tr class="cart-total-row">
              <th colspan="5" style="text-align: right; font-size: 18px;">Tổng thanh toán:</th>
              <th colspan="2" style="font-size: 20px; color: #d32f2f;">${formatPrice(
                amount
              )}</th>
          </tr>
        `;
      } else {
        tfoot.innerHTML = "";
      }
    }
  }

  function deleteProduct(index) {
    let danhSachSanPham =
      JSON.parse(localStorage.getItem("danhSachSanPham")) || [];

    if (
      confirm(
        `Bạn có chắc muốn xóa sản phẩm "${danhSachSanPham[index].tenSP}" không?`
      )
    ) {
      danhSachSanPham.splice(index, 1);
      localStorage.setItem("danhSachSanPham", JSON.stringify(danhSachSanPham));
      renderCart();
    }
  }

  if (btnBuy) {
    btnBuy.addEventListener("click", function () {
      let danhSachSanPham =
        JSON.parse(localStorage.getItem("danhSachSanPham")) || [];

      if (danhSachSanPham.length === 0) {
        alert("Giỏ hàng trống! Vui lòng thêm sản phẩm.");
        return;
      }

      const isLogin = JSON.parse(localStorage.getItem("Login"));
      if (!isLogin) {
        alert("Vui lòng đăng nhập để thanh toán!");
        window.location.href = "login.html";
        return;
      }
      const total = danhSachSanPham.reduce(
        (sum, item) => sum + item.tongGiaSP,
        0
      );

      if (
        confirm(
          `Xác nhận thanh toán đơn hàng trị giá ${total.toLocaleString(
            "vi-VN"
          )}đ?`
        )
      ) {
        const orderData = {
          items: danhSachSanPham,
          total: total,
          date: new Date().toLocaleString("vi-VN"),
        };
        localStorage.setItem("lastOrder", JSON.stringify(orderData));

        localStorage.removeItem("danhSachSanPham");

        window.location.href = "invoice.html";
      }
    });
  }

  renderCart();
});
