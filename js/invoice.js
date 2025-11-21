document.addEventListener("DOMContentLoaded", function () {
  const lastOrder = JSON.parse(localStorage.getItem("lastOrder"));
  const user = JSON.parse(localStorage.getItem("user"));

  const customerNameEl = document.getElementById("inv-customer-name");
  const dateEl = document.getElementById("inv-date");
  const idEl = document.getElementById("inv-id");
  const itemsContainer = document.getElementById("inv-items");
  const totalEl = document.getElementById("inv-total-price");

  if (!lastOrder) {
    document.querySelector(".invoice-container").innerHTML = `
            <div style="text-align: center; padding: 50px;">
                <h2>Bạn chưa có hóa đơn nào gần đây!</h2>
                <a href="product.html" style="color: blue; text-decoration: underline;">Đi mua sắm ngay</a>
            </div>
        `;
    return;
  }

  if (user && user.username) {
    customerNameEl.innerText = user.username;
  } else {
    customerNameEl.innerText = "Khách vãng lai";
  }

  dateEl.innerText = lastOrder.date;
  idEl.innerText = "#DH" + Math.floor(Math.random() * 1000000);

  let htmlItems = "";
  lastOrder.items.forEach((item) => {
    htmlItems += `
            <tr>
                <td>${item.soLuong}</td>
                <td style="text-align: left;">${item.tenSP}</td>
                <td>${item.giaSP.toLocaleString("vi-VN")}</td>
                <td>${item.tongGiaSP.toLocaleString("vi-VN")}</td>
            </tr>
        `;
  });
  itemsContainer.innerHTML = htmlItems;

  totalEl.innerText = lastOrder.total.toLocaleString("vi-VN") + "đ";
});
