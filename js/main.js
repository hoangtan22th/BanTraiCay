document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".banner")) {
    var hinhAnhBanner = document.querySelectorAll(".banner img");
    var chiSoHienTai = 0;

    function hinhAnhTiepTheo() {
      hinhAnhBanner[chiSoHienTai].style.display = "none";
      chiSoHienTai = (chiSoHienTai + 1) % hinhAnhBanner.length;
      hinhAnhBanner[chiSoHienTai].style.display = "block";
    }

    function hinhAnhTruocDo() {
      hinhAnhBanner[chiSoHienTai].style.display = "none";
      chiSoHienTai =
        (chiSoHienTai - 1 + hinhAnhBanner.length) % hinhAnhBanner.length;
      hinhAnhBanner[chiSoHienTai].style.display = "block";
    }

    document
      .getElementById("btn__nextbanner")
      .addEventListener("click", hinhAnhTiepTheo);
    document
      .getElementById("btn__prebanner")
      .addEventListener("click", hinhAnhTruocDo);

    function tuDongChuyenDoi() {
      hinhAnhBanner.forEach((img, index) => {
        img.style.display = index === 0 ? "block" : "none";
      });
      setInterval(hinhAnhTiepTheo, 2000);
    }

    tuDongChuyenDoi();
  }
});

const products = [
  {
    id: 0,
    name: "Nho nhập khẩu từ Hàn Quốc",
    image: "../img/nho.jpg",
    sell: "đã bán 60",
    price: 20000,
    kilogram: "1 kg",
    thuongHieu: "TanFruits",
    category: "nho",
  },
  {
    id: 1,
    name: "Lê nhập khẩu từ Nhật Bản",
    image: "../img/le.jpg",
    sell: "đã bán 333",
    price: 50000,
    kilogram: "1 kg",
    thuongHieu: "TanFruits",
    category: "le",
  },
  {
    id: 2,
    name: "Táo đỏ ít hột",
    image: "../img/tao.jpg",
    sell: "đã bán 432",
    price: 20000,
    kilogram: "1 kg",
    thuongHieu: "TanFruits",
    category: "tao",
  },
  {
    id: 3,
    name: "Khóm xuất khẩu trong nước",
    image: "../img/thom-dua.jpg",
    sell: "đã bán 123",
    price: 10000,
    kilogram: "1 kg",
    thuongHieu: "TanFruits",
    category: "khom",
  },
  {
    id: 4,
    name: "Bưởi 5 roi Việt Nam",
    image: "../img/buoi.jpg",
    sell: "đã bán 1223",
    price: 70000,
    kilogram: "1 kg",
    thuongHieu: "TanFruits",
    category: "buoi",
  },
  {
    id: 5,
    name: "Mận mà Việt Nam",
    image: "../img/man.jpg",
    sell: "đã bán 6900",
    price: 75000,
    kilogram: "2 kg",
    thuongHieu: "TanFruits",
    category: "man",
  },
  {
    id: 6,
    name: "Kiwi Trung Quốc",
    image: "../img/kiwi.jpg",
    sell: "đã bán 300",
    price: 90000,
    kilogram: "1 kg",
    thuongHieu: "TanFruits",
    category: "kiwi",
  },
  {
    id: 7,
    name: "Dâu tằm Đà Lạt",
    image: "../img/dau.jpg",
    sell: "đã bán 600",
    price: 150000,
    kilogram: "1 kg",
    thuongHieu: "TanFruits",
    category: "dau",
  },
  {
    id: 8,
    name: "Dưa Hấu nông thôn",
    image: "../img/duahau.jpg",
    sell: "đã bán 120",
    price: 40000,
    kilogram: "1 kg",
    thuongHieu: "TanFruits",
    category: "duahau",
  },
  {
    id: 9,
    name: "Xoài vàng bến tre",
    image: "../img/xoai.jpg",
    sell: "đã bán 432",
    price: 20000,
    kilogram: "1 kg",
    thuongHieu: "TanFruits",
    category: "xoai",
  },
  {
    id: 10,
    name: "Chuối già mũi né",
    image: "../img/chuoi.jpg",
    sell: "đã bán 300",
    price: 90000,
    kilogram: "1 kg",
    thuongHieu: "TanFruits",
    category: "chuoi",
  },
  {
    id: 11,
    name: "Cam nguyên trái",
    image: "../img/cam.jpg",
    sell: "đã bán 123",
    price: 10000,
    kilogram: "1 kg",
    thuongHieu: "TanFruits",
    category: "cam",
  },
];
function formatPrice(price) {
  return price.toLocaleString("vi-VN") + "đ";
}

if (document.getElementById("details__img")) {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get("product")) || 0;
  const product = products.find((p) => p.id === productId);

  if (product) {
    document.getElementById("details__name").innerText = product.name;
    document.getElementById("details__des").innerText = product.name;
    document.getElementById("details__total__price").innerText = formatPrice(
      product.price
    );
    document.getElementById("details__img").src = product.image;
    document.getElementById("details__price").innerText = `Giá: ${formatPrice(
      product.price
    )}`;
    document.getElementById("product__sell").innerText = product.sell;
    document.getElementById("thuonghieu").innerText = product.thuongHieu;
    document.getElementById("product-weight").innerText = product.kilogram;
  }
}
