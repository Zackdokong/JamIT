const inputField = document.querySelector('input[type="text"]');
const heading = document.querySelector('h1');
const formContainer = document.querySelector('.form-container');
const resultText = document.querySelector('.result-text');
const userList = document.querySelector('.user-list');

// 사용자 리스트 예시 데이터
const users = [
    "김철수 (치킨 먹기 좋아함)",
    "박영희 (운동 좋아함)",
    "이승준 (프로그래밍 매니아)",
    "남궁나연 (영화 감상 전문가)"
];

// keydown 이벤트 리스너 추가
inputField.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && inputField.value.trim() !== '') {
        event.preventDefault();

        heading.classList.add('hide');
        formContainer.classList.add('move-up');

        setTimeout(function() {
            resultText.classList.add('show');

            // 사용자 리스트를 표시
            userList.innerHTML = ''; // 기존 리스트 초기화
            users.forEach(function(user) {
                const li = document.createElement('li');
                li.textContent = user;
                userList.appendChild(li);
            });
        }, 1000);
    }
});
