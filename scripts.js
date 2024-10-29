// scripts.js

document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.querySelector('input[type="text"]');
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
            userItem.dataset.id = filteredUsers[i].id;  // data-id 속성 추가

            // 사용자 클릭 시 user-detail.html로 이동
            userItem.addEventListener('click', () => {
                window.location.href = `chat.html?username=${filteredUsers[i].name}`;
            });

            fragment.appendChild(userItem);
        }

        userList.appendChild(fragment);
        displayedUsers += usersPerPage;

        if (displayedUsers >= filteredUsers.length) {
            loadMoreButton.style.display = "none"; // 더 이상 표시할 사용자가 없으면 버튼 숨기기
        }

        userList.classList.add('show'); // 애니메이션 효과
    };

    // 입력 필드에서 Enter 키 입력 시 사용자 필터링
    inputField.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();

            resultText.style.display = "block";
            resultText.classList.add('show');
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
                userList.innerHTML = '<li>해당하는 사용자가 없습니다.</li>';
                resultText.textContent = "";
                userList.classList.add('show');
            }
        }
    });

    loadMoreButton.addEventListener("click", addUsersToList); // 더보기 버튼 클릭 시 추가 사용자 표시
    loadMoreButton.style.display = "none"; // 초기 상태에서 더보기 버튼 숨기기
});
