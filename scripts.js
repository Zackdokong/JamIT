// 입력 필드와 h1, form-container, 새 텍스트 요소 선택
const inputField = document.querySelector('input[type="text"]');
const heading = document.querySelector('h1');
const formContainer = document.querySelector('.form-container');
const resultText = document.querySelector('.result-text');

// keydown 이벤트 리스너 추가
inputField.addEventListener('keydown', function(event) {
    // 엔터 키를 감지
    if (event.key === 'Enter' && inputField.value.trim() !== '') {
        event.preventDefault(); // 폼 제출 방지
        // h1을 사라지게 하고 form을 위로 이동
        heading.classList.add('hide');
        formContainer.classList.add('move-up');

        // 일정 시간 후에 새로운 텍스트를 표시
        setTimeout(function() {
            resultText.classList.add('show');
        }, 1000); // form이 이동하는 1초 후에 텍스트 표시
    }
});
