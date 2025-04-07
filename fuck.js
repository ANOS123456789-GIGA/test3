const audioEl = document.getElementById("annoyingSound");

// 嘗試播放音效
audioEl.play().catch(error => {
    console.log("自動播放失敗，可能需要使用者互動：", error);
});

// 函數：創建一個假的警告視窗
function createFakeAlert() {
    const alertDiv = document.createElement("div");
    alertDiv.className = "fake-alert";

    // 隨機定位
    const maxX = window.innerWidth - 200; // 假視窗寬度約 200px
    const maxY = window.innerHeight - 100; // 假視窗高度約 100px
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    alertDiv.style.left = `${randomX}px`;
    alertDiv.style.top = `${randomY}px`;

    // 設置內容
    alertDiv.innerHTML = `
        <p>此頁面說：shut the fuck up *</p>
        <button onclick="this.parentElement.remove()">確定</button>
    `;

    document.body.appendChild(alertDiv);
}

// 一進入頁面就創建大量假視窗
for (let i = 0; i < 20; i++) { // 創建 20 個假視窗
    createFakeAlert();
}

// 每隔一段時間再新增更多視窗，模擬「中毒」不斷惡化的效果
setInterval(() => {
    createFakeAlert();
}, 1000); // 每秒新增一個假視窗