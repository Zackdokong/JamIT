// scripts.js

document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.querySelector('input[type="text"]');
const heading = document.querySelector('h1');
const formContainer = document.querySelector('.form-container');
const resultText = document.querySelector('.result-text');
const userList = document.querySelector('.user-list');
const loadMoreButton = document.getElementById('load-more');


    let displayedUsers = 0;
    const usersPerPage = 5; // 한 번에 표시할 사용자 수
    let filteredUsers = [];

    const addUsersToList = () => {
        const fragment = document.createDocumentFragment();
        const end = Math.min(displayedUsers + usersPerPage, filteredUsers.length);

        for (let i = displayedUsers; i < end; i++) {
            const userItem = document.createElement("li");
            userItem.textContent = `${filteredUsers[i].name} (${filteredUsers[i].age}세) - ${filteredUsers[i].interests}, ${filteredUsers[i].location}`;
            fragment.appendChild(userItem);
        }

        userList.appendChild(fragment);
        displayedUsers += usersPerPage;

        if (displayedUsers >= filteredUsers.length) {
            loadMoreButton.style.display = "none"; // 더 이상 표시할 사용자가 없으면 버튼 숨기기
        }

        // 사용자 리스트가 추가된 후 애니메이션을 위해 클래스 추가
        userList.classList.add('show');
    };

    inputField.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();

            resultText.style.display = "block"; // 결과 텍스트 표시
            resultText.classList.add('show'); // 애니메이션 효과를 위해 클래스 추가
            userList.innerHTML = ''; // 기존 사용자 리스트 초기화
            displayedUsers = 0; // 표시된 사용자 수 초기화

            // 입력한 태그에 맞는 사용자 필터링
            const tag = inputField.value.trim().toLowerCase();
            filteredUsers = users.filter(user => user.interests.toLowerCase().includes(tag));

            if (filteredUsers.length > 0) {
                loadMoreButton.style.display = "block"; // 필터링된 사용자가 있을 경우 버튼 보이기
                addUsersToList(); // 필터링된 사용자 추가
            } else {
                loadMoreButton.style.display = "none"; // 필터링된 사용자가 없으면 버튼 숨기기
                userList.innerHTML = '<li>해당하는 사용자가 없습니다.</li>'; // user-list 위치에 메시지 추가
                resultText.textContent = ""; // 결과 텍스트 초기화
                userList.classList.add('show'); // 리스트를 보이게 처리
            }
            
        }
    });

    loadMoreButton.addEventListener("click", addUsersToList); // 더보기 버튼 클릭 이벤트

    // 초기 상태에서 더보기 버튼 숨기기
    loadMoreButton.style.display = "none";
});