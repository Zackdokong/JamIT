document.addEventListener("DOMContentLoaded", () => {
    const messageInput = document.getElementById("message-input");
    const sendButton = document.getElementById("send-button");
    const chatMessages = document.getElementById("chat-messages");

    // 메시지 추가 함수
    function addMessage(content, user = true) {
        const message = document.createElement("div");
        message.classList.add("message", user ? "user" : "other");
        message.textContent = content;
        chatMessages.appendChild(message);

        // 스크롤을 맨 아래로 이동
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // 전송 버튼 클릭 이벤트
    sendButton.addEventListener("click", () => {
        const message = messageInput.value.trim();
        if (message) {
            addMessage(message);
            messageInput.value = "";
            // 다른 사용자 메시지 예시 (잠시 후에 표시)
            setTimeout(() => addMessage("상대방의 응답입니다.", false), 1000);
        }
    });

    // 엔터 키로 전송하기
    messageInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            sendButton.click();
        }
    });
});
