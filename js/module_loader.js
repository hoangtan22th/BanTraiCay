document.addEventListener("DOMContentLoaded", function () {
  function loadModule(targetId, filePath) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      fetch(filePath)
        .then((response) => response.text())
        .then((data) => {
          targetElement.innerHTML = data;

          // --- XỬ LÝ HEADER (Giữ nguyên) ---
          if (targetId === "header-container") {
            initializeHeaderLogic();
            if (typeof initializeSearchLogic === "function") {
              initializeSearchLogic();
            }
          }

          // --- XỬ LÝ FOOTER (CẦN THÊM ĐOẠN NÀY) ---
          if (targetId === "footer-container") {
            console.log("Footer đã tải xong, đang kích hoạt Chatbot..."); // Dòng này để kiểm tra
            if (typeof initializeChatbotLogic === "function") {
              initializeChatbotLogic(); // <--- QUAN TRỌNG: Gọi hàm kích hoạt Chatbot
            } else {
              console.error(
                "Lỗi: Không tìm thấy hàm initializeChatbotLogic. Kiểm tra file chatbot.js"
              );
            }
          }
        })
        .catch((error) => console.error(`Error loading ${filePath}:`, error));
    }
  }

  loadModule("header-container", "../html-modules/header.html");

  // Tải footer (trong đó có chứa nút Trợ lý và Khung chat)
  loadModule("footer-container", "../html-modules/footer.html");

  const Noidung = document.querySelector(".Noidung");
  if (Noidung && document.getElementById("sidebar-container")) {
    loadModule("sidebar-container", "../html-modules/sidebar.html");
  }
});

// ... (Giữ nguyên hàm initializeHeaderLogic ở dưới)
function initializeHeaderLogic() {
  // Code cũ của bạn...
  const isLogin = JSON.parse(localStorage.getItem("Login"));
  const user = JSON.parse(localStorage.getItem("user"));
  const userStatusLoggedIn = document.getElementById("user-status-logged-in");
  const userStatusNoLogin = document.getElementById("user-status-no-login");
  const userId = document.getElementById("userId");
  const btnLogout = document.getElementById("btn__logout");

  if (isLogin == true && user) {
    if (userId) userId.innerHTML = user.username;
    if (userStatusLoggedIn) userStatusLoggedIn.style.display = "flex";
    if (userStatusNoLogin) userStatusNoLogin.style.display = "none";
  } else {
    if (userStatusLoggedIn) userStatusLoggedIn.style.display = "none";
    if (userStatusNoLogin) userStatusNoLogin.style.display = "flex";
  }

  if (btnLogout) {
    btnLogout.addEventListener("click", function () {
      localStorage.setItem("Login", false);
      window.location.href = "../html/home.html";
    });
  }
}
