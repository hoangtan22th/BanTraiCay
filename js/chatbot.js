window.initializeChatbotLogic = function () {
  const chatWidget = document.getElementById("chat-widget");
  const newsWidget = document.getElementById("news-widget");
  const btnTroly = document.querySelector(".troly");
  const btnTinMoi = document.querySelector(".tinmoi");
  const closeChatBtn = document.getElementById("close-chat");
  const closeNewsBtn = document.getElementById("close-news");
  const btnSend = document.getElementById("btn-send-chat");
  const chatInput = document.getElementById("chat-input");
  const chatBody = document.getElementById("chat-body");

  if (btnTroly && chatWidget) {
    btnTroly.onclick = function (e) {
      e.stopPropagation();
      if (chatWidget.style.display === "flex") {
        chatWidget.style.display = "none";
      } else {
        if (newsWidget) newsWidget.style.display = "none";
        chatWidget.style.display = "flex";
        if (chatInput) chatInput.focus();
      }
    };
  }

  if (btnTinMoi && newsWidget) {
    btnTinMoi.onclick = function (e) {
      e.stopPropagation();
      if (newsWidget.style.display === "flex") {
        newsWidget.style.display = "none";
      } else {
        if (chatWidget) chatWidget.style.display = "none";
        newsWidget.style.display = "flex";
      }
    };
  }

  if (closeChatBtn)
    closeChatBtn.onclick = () => (chatWidget.style.display = "none");
  if (closeNewsBtn)
    closeNewsBtn.onclick = () => (newsWidget.style.display = "none");

  function getBotResponse(input) {
    input = input.toLowerCase();

    if (
      input.includes("chào") ||
      input.includes("hi ") ||
      input.includes("hello") ||
      input === "hi"
    ) {
      return "Chào bạn! 👋 TanFruits rất vui được hỗ trợ. Bạn đang tìm loại trái cây nào hay cần tư vấn gì không ạ?";
    }
    if (input.includes("cảm ơn") || input.includes("thanks")) {
      return "Dạ không có chi! Cần ăn trái cây ngon cứ ghé TanFruits nhé! ❤️";
    }
    if (input.includes("tạm biệt") || input.includes("bye")) {
      return "Tạm biệt bạn! Hẹn gặp lại bạn sớm nha. 👋";
    }

    if (input.includes("nho")) {
      return "🍇 <b>Nho:</b> Bên mình có Nho Mẫu Đơn, Nho Đen không hạt Mỹ. Trái to, ngọt lịm, giòn tan. Giá khoảng 200k/kg. Bạn muốn xem hình ảnh chi tiết không?";
    }
    if (input.includes("táo")) {
      return "🍎 <b>Táo:</b> Shop chuyên Táo Envy New Zealand và Táo Rockit. Giòn, thơm, rất hợp làm quà biếu. Đang có giá tốt từ 150k/kg ạ.";
    }
    if (input.includes("sầu riêng") || input.includes("sầu")) {
      return "durian <b>Sầu riêng:</b> Shop có Ri6 và Monthong, bao ăn, múi vàng hạt lép. Nếu sượng shop đổi 1-1 ngay lập tức ạ!";
    }
    if (input.includes("cam") || input.includes("quýt")) {
      return "🍊 <b>Cam/Quýt:</b> Cam vàng nhập khẩu và Cam sành mọng nước, bổ sung Vitamin C cực tốt. Giá chỉ từ 40k/kg thôi ạ.";
    }
    if (input.includes("dâu")) {
      return "🍓 <b>Dâu tây:</b> Dâu Đà Lạt giống Nhật và Dâu Hàn Quốc. Trái đỏ mọng, ngọt thanh. Hàng về mỗi sáng nên rất tươi.";
    }
    if (input.includes("kiwi")) {
      return "🥝 <b>Kiwi:</b> Có Kiwi xanh và Kiwi vàng. Kiwi vàng ngọt hơn, Kiwi xanh chua nhẹ. Đang có combo 1 hộp 500g giá 120k.";
    }
    if (input.includes("menu") || input.includes("danh sách")) {
      return "Shop có nhiều loại lắm ạ: Nho, Táo, Cam, Dâu, Kiwi, Lê, Dưa hấu... Bạn vào mục <b>'Sản phẩm'</b> trên thanh menu để xem đầy đủ nhé!";
    }

    if (input.includes("giá") || input.includes("nhiêu tiền")) {
      return "💰 Giá sản phẩm dao động từ 20k - 300k tùy loại và tùy mùa vụ. Giá chi tiết được niêm yết công khai trên từng sản phẩm ạ.";
    }
    if (
      input.includes("ship") ||
      input.includes("giao hàng") ||
      input.includes("vận chuyển")
    ) {
      return "🚀 <b>Chính sách giao hàng:</b><br>- Freeship nội thành cho đơn từ 200k.<br>- Phí ship thường: 20k - 30k.<br>- Giao hỏa tốc trong 2H.";
    }
    if (
      input.includes("địa chỉ") ||
      input.includes("ở đâu") ||
      input.includes("shop")
    ) {
      return "🏠 <b>Địa chỉ TanFruits:</b> 12 Nguyễn Văn Bảo, Phường 4, Gò Vấp, TP.HCM (Gần ĐH Công Nghiệp). Mời bạn ghé chơi!";
    }
    if (input.includes("giờ") || input.includes("mở cửa")) {
      return "⏰ Shop mở cửa từ <b>8:00 sáng đến 21:00 tối</b> tất cả các ngày trong tuần (kể cả Chủ Nhật) ạ.";
    }
    if (input.includes("thanh toán") || input.includes("trả tiền")) {
      return "💳 Bạn có thể thanh toán bằng:<br>1. Tiền mặt khi nhận hàng (COD).<br>2. Chuyển khoản ngân hàng.<br>3. Quẹt thẻ tại shop.";
    }
    if (input.includes("đổi trả") || input.includes("hư")) {
      return "🛡️ <b>Bảo hành:</b> Nếu trái cây bị hư, dập hoặc không ngọt, bạn chụp hình gửi shop trong vòng 24h để được ĐỔI MỚI hoặc HOÀN TIỀN 100% nhé.";
    }
    if (
      input.includes("liên hệ") ||
      input.includes("sđt") ||
      input.includes("hotline")
    ) {
      return "📞 Hotline/Zalo hỗ trợ: <b>1900-6035</b> hoặc <b>0907-631-248</b> (Gặp Tấn).";
    }

    return "Xin lỗi, shop chưa hiểu rõ ý bạn lắm 😅.<br>Bạn có thể hỏi về: <b>Giá, Ship, Địa chỉ, Táo, Nho...</b> hoặc gọi Hotline <b>1900-6035</b> để được hỗ trợ nhanh nhất nhé!";
  }

  function handleChat() {
    if (!chatInput) return;
    const text = chatInput.value.trim();
    if (!text) return;

    const userMsg = document.createElement("div");
    userMsg.className = "message user-message";
    userMsg.innerText = text;
    chatBody.appendChild(userMsg);

    chatInput.value = "";
    chatBody.scrollTop = chatBody.scrollHeight;

    setTimeout(() => {
      const botMsg = document.createElement("div");
      botMsg.className = "message bot-message";
      const reply = getBotResponse(text);
      botMsg.innerHTML = reply;
      chatBody.appendChild(botMsg);
      chatBody.scrollTop = chatBody.scrollHeight;
    }, 600);
  }

  if (btnSend) {
    btnSend.onclick = handleChat;
  }

  if (chatInput) {
    chatInput.onkeypress = function (e) {
      if (e.key === "Enter") handleChat();
    };
  }
};
