module.exports = (Franz) => {
  const getMessages = () => {
    const badgeElement = document.querySelector(".z-noti-badge__content.--big");

    if (!badgeElement) {
      Franz.setBadge(0);
      return;
    }

    // Sử dụng regex để trích xuất số lượng từ class
    const match = [...badgeElement.classList]
      .join(" ")
      .match(/fa-(\d)(_Plus)?_24_Line/);

    // Nếu khớp, xác định số lượng badge; nếu có "_Plus", đặt số lượng là 5
    const badgeCount = match ? (match[2] ? 5 : parseInt(match[1], 10)) : 0;

    Franz.setBadge(badgeCount);
  };

  Franz.loop(getMessages);
};
