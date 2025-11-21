// js/category_loader.js

document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const categoryType = urlParams.get("type");
  const productListContainer = document.querySelector(".product__list");
  const categoryTitle = document.querySelector(".category__title");

  const categoryNames = {
    tao: "Trái Táo",
    le: "Trái Lê",
    chuoi: "Trái Chuối",
    cam: "Cam, Quýt",
    buoi: "Trái Bưởi",
    nho: "Nho & Cherry",
    kiwi: "Trái Kiwi",
    xoai: "Trái Xoài",
    man: "Đào & Mận",
  };

  if (categoryType && productListContainer && typeof products !== "undefined") {
    const productsByCategory = products.filter(
      (p) => p.category === categoryType
    );

    if (categoryTitle) {
      categoryTitle.textContent = `Sản phẩm ${
        categoryNames[categoryType] || categoryType.toUpperCase()
      }`;
    }

    if (productsByCategory.length > 0) {
      let htmlContent = "";
      productsByCategory.forEach((product) => {
        htmlContent += `
                    <a href="../html/productDetails.html?product=${
                      product.id
                    }" class="product__link">
                        <div class="product">
                            <div class="product__img">
                                <img src="${product.image}" alt="${
          product.name
        }">
                            </div>
                            <div class="product__check">
                                <img src="../img/chinhhang.png" alt="">
                            </div>
                            <div class="product__des">
                                <p>${product.name}</p>
                            </div>
                            <div class="product__combo">
                                <div class="product__star">
                                    <i class="fa-solid fa-star" style="color: yellow;"></i>
                                    <i class="fa-solid fa-star" style="color: yellow;"></i>
                                    <i class="fa-solid fa-star" style="color: yellow;"></i>
                                    <i class="fa-solid fa-star" style="color: yellow;"></i>
                                    <i class="fa-solid fa-star" style="color: yellow;"></i>
                                </div>
                                <div class="product__sell">
                                    <p style="font-size: 13px;">${
                                      product.sell
                                    }</p>
                                </div>
                            </div>
                            <div class="product__price">
                                <span>${product.price.toLocaleString(
                                  "vi-VN"
                                )}</span>
                                <span class="dong">đ</span>
                            </div>
                            <button class="product__btn" type="submit">
                                <span> Thêm vào giỏ</span> <i class="fa-solid fa-plus"></i>
                            </button>
                        </div>
                    </a>
                `;
      });
      productListContainer.innerHTML = htmlContent;
    } else {
      productListContainer.innerHTML = `<p style="padding: 20px; text-align: center;">Không tìm thấy sản phẩm nào trong danh mục này.</p>`;
    }
  }
});
