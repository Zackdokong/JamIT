// scripts.js

document.addEventListener("DOMContentLoaded", () => {
    const userList = document.getElementById("user-list");
    const loadMoreButton = document.getElementById("load-more");
    const inputField = document.querySelector('input[type="text"]');
    const resultText = document.querySelector('.result-text');

    let users = [
        { name: "김철수", interests: "치킨 먹기 좋아함", age: 25, location: "서울" },
        { name: "박영희", interests: "운동 좋아함", age: 22, location: "부산" },
        { name: "이승준", interests: "프로그래밍 매니아", age: 19, location: "대전" },
        { name: "남궁나연", interests: "영화 감상 전문가", age: 20, location: "광주" },
        { name: "최민수", interests: "독서 좋아함", age: 24, location: "서울" },
        { name: "정하늘", interests: "음악 감상", age: 21, location: "인천" },
        { name: "이재민", interests: "여행 계획하기", age: 27, location: "제주" },
        { name: "홍길동", interests: "요리 실험", age: 23, location: "대구" },
        { name: "신수현", interests: "게임 좋아함", age: 18, location: "부산" },
        { name: "윤정희", interests: "패션 스타일링", age: 30, location: "서울" },
        { name: "강지민", interests: "디지털 아트", age: 29, location: "광주" },
        { name: "박서준", interests: "테니스", age: 26, location: "서울" },
        { name: "이서연", interests: "자원봉사", age: 20, location: "부산" },
        { name: "오민호", interests: "사진 찍기", age: 22, location: "대전" },
        { name: "문지혜", interests: "필름 사진", age: 21, location: "제주" },
        { name: "장수진", interests: "재즈 음악", age: 24, location: "광주" },
        { name: "김민지", interests: "베이킹", age: 25, location: "서울" },
        { name: "이승호", interests: "축구", age: 28, location: "인천" },
        { name: "최서영", interests: "수영", age: 19, location: "부산" },
        { name: "한준우", interests: "캠핑", age: 22, location: "대구" },
        { name: "김지현", interests: "고전 영화 감상", age: 23, location: "서울" },
        { name: "이경민", interests: "인테리어 디자인", age: 30, location: "광주" },
        { name: "정우성", interests: "마라톤", age: 26, location: "서울" },
        { name: "윤지성", interests: "드로잉", age: 27, location: "부산" },
        { name: "박예은", interests: "정원 가꾸기", age: 18, location: "대전" },
        { name: "오지호", interests: "스노우보드", age: 24, location: "제주" },
        { name: "강다은", interests: "공예", age: 22, location: "광주" },
        { name: "문상혁", interests: "블로그 운영", age: 29, location: "서울" },
        { name: "최태호", interests: "서핑", age: 30, location: "부산" },
        { name: "이효리", interests: "커피 감상", age: 19, location: "대전" },
        { name: "김세은", interests: "음악 연주", age: 21, location: "서울" },
        { name: "홍유진", interests: "연극 관람", age: 25, location: "광주" },
        { name: "이진우", interests: "전시회 관람", age: 22, location: "부산" },
        { name: "정민주", interests: "사냥", age: 28, location: "대구" },
        { name: "오상민", interests: "미술관 탐방", age: 30, location: "서울" },
        { name: "윤찬영", interests: "정치 토론", age: 26, location: "광주" },
        { name: "김상우", interests: "영어 회화", age: 24, location: "부산" },
        { name: "이소연", interests: "재미있는 팟캐스트", age: 21, location: "대전" },
        { name: "장호연", interests: "과학 실험", age: 19, location: "서울" },
        { name: "최지훈", interests: "역사 탐구", age: 27, location: "광주" },
        { name: "김보미", interests: "애니메이션 감상", age: 20, location: "부산" },
        { name: "이현수", interests: "패션 디자인", age: 29, location: "대전" },
        { name: "오채원", interests: "바둑", age: 22, location: "서울" },
        { name: "정윤아", interests: "요가", age: 24, location: "광주" },
        { name: "임재현", interests: "지구과학", age: 23, location: "부산" },
        { name: "한솔", interests: "공연 관람", age: 26, location: "대구" },
        { name: "이유진", interests: "로봇 제작", age: 19, location: "서울" },
        { name: "조성우", interests: "치과 치료", age: 30, location: "광주" },
        { name: "박하영", interests: "도자기", age: 28, location: "부산" },
        { name: "홍소희", interests: "차 마시기", age: 25, location: "대전" },
        { name: "김태현", interests: "사운드 디자인", age: 27, location: "서울" },
        { name: "임유진", interests: "모바일 게임", age: 21, location: "광주" },
        { name: "이서빈", interests: "유머", age: 20, location: "부산" },
        { name: "박주환", interests: "사이버 보안", age: 29, location: "대전" },
        { name: "조현진", interests: "기계 공학", age: 23, location: "서울" },
        { name: "정세린", interests: "플라워 어레인지", age: 30, location: "광주" },
        { name: "이해준", interests: "프로그래밍 언어", age: 24, location: "부산" },
        { name: "한서연", interests: "패션 잡지", age: 22, location: "대전" },
        { name: "김은지", interests: "작곡", age: 28, location: "서울" },
        { name: "오현석", interests: "전통 음악", age: 25, location: "광주" },
        { name: "최지수", interests: "피아노 연주", age: 19, location: "부산" },
        { name: "이현정", interests: "수학 문제 풀기", age: 30, location: "대전" },
        { name: "정시온", interests: "패션 아이템", age: 26, location: "서울" },
        { name: "이진주", interests: "행복한 삶", age: 24, location: "광주" },
        { name: "조수빈", interests: "기초 미술", age: 21, location: "부산" },
        { name: "한민재", interests: "개발자 컨퍼런스", age: 30, location: "대전" },
        { name: "정서희", interests: "복싱", age: 19, location: "서울" },
        { name: "이찬희", interests: "바이올린 연주", age: 22, location: "광주" },
        { name: "강영민", interests: "우주 과학", age: 25, location: "부산" },
        { name: "박하늘", interests: "음악 방송", age: 23, location: "대전" },
        { name: "조유진", interests: "과학 실험", age: 29, location: "서울" },
        { name: "이영호", interests: "드론 조종", age: 30, location: "광주" },
        { name: "최승민", interests: "자전거 여행", age: 26, location: "부산" },
        { name: "김현진", interests: "플라스틱 아트", age: 24, location: "대전" },
        { name: "정민아", interests: "베이킹", age: 21, location: "서울" },
        { name: "이민호", interests: "영화 제작", age: 20, location: "광주" },
        { name: "한상훈", interests: "타로 카드", age: 28, location: "부산" },
        { name: "조영수", interests: "도서관 탐방", age: 19, location: "대전" },
        { name: "임서현", interests: "친환경 제품", age: 25, location: "서울" },
        { name: "김하늘", interests: "스페인어 배우기", age: 30, location: "광주" },
        { name: "오세훈", interests: "스포츠 관람", age: 22, location: "부산" },
        { name: "최유리", interests: "지식 공유", age: 24, location: "대전" },
        { name: "이명호", interests: "자연 탐험", age: 21, location: "서울" },
        { name: "한태현", interests: "다큐멘터리 촬영", age: 19, location: "광주" },
        { name: "조은서", interests: "패턴 디자인", age: 28, location: "부산" },
        { name: "정호연", interests: "기타 연주", age: 30, location: "대전" },
        { name: "이진철", interests: "미니멀리즘", age: 26, location: "서울" },
        { name: "김상미", interests: "트래킹", age: 24, location: "광주" },
        { name: "박정훈", interests: "독서", age: 21, location: "부산" },
        { name: "조재훈", interests: "모험 여행", age: 30, location: "대전" },
        { name: "한아름", interests: "해양 생물 관찰", age: 19, location: "서울" },
        { name: "이승리", interests: "종이접기", age: 22, location: "광주" },
        { name: "김다은", interests: "DIY 프로젝트", age: 25, location: "부산" },
        { name: "최정수", interests: "스포츠 팀 응원", age: 30, location: "대전" },
        { name: "정혜원", interests: "연기", age: 26, location: "서울" },
        { name: "이현지", interests: "패션 트렌드", age: 24, location: "광주" },
        { name: "박서영", interests: "어린이 도서 읽기", age: 21, location: "부산" },
        { name: "홍찬희", interests: "주말 농장", age: 19, location: "대전" },
        { name: "임종현", interests: "스피치", age: 30, location: "서울" },
        { name: "조하윤", interests: "청소", age: 27, location: "광주" },
        { name: "최우진", interests: "극복 이야기", age: 20, location: "부산" },
        { name: "이소정", interests: "이벤트 기획", age: 26, location: "대전" },
        { name: "김용현", interests: "교양 수업", age: 22, location: "서울" },
        { name: "박정희", interests: "가드닝", age: 30, location: "광주" },
        { name: "조상우", interests: "문화 체험", age: 24, location: "부산" },
        { name: "한예진", interests: "실험", age: 19, location: "대전" },
        { name: "임수빈", interests: "아이디어 회의", age: 29, location: "서울" },
        { name: "정수경", interests: "라디오 방송", age: 27, location: "광주" },
    ];

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

            // 필터링된 사용자가 있는 경우에만 더보기 버튼 보이기
            if (tag === '') {
                loadMoreButton.style.display = "none"; // 태그가 비어있을 경우 버튼 숨기기
                resultText.textContent = ""; // 결과 텍스트 초기화
                userList.classList.remove('show'); // 리스트 숨기기
            } else if (filteredUsers.length > 0) {
                loadMoreButton.style.display = "block"; // 필터링된 사용자가 있을 경우 버튼 보이기
                addUsersToList(); // 필터링된 사용자 추가
            } else {
                loadMoreButton.style.display = "none"; // 필터링된 사용자가 없으면 버튼 숨기기
                resultText.textContent = "해당하는 사용자가 없습니다."; // 사용자 없음 메시지
                userList.classList.remove('show'); // 리스트 숨기기
            }
        }
    });

    loadMoreButton.addEventListener("click", addUsersToList); // 더보기 버튼 클릭 이벤트

    // 초기 상태에서 더보기 버튼 숨기기
    loadMoreButton.style.display = "none";
});
