 // 페이지 로드 시 실행될 함수
 window.onload = function() {
    // 게시 버튼 요소를 가져옵니다.
    var loadBtn = document.querySelector('.load-btn');
    
    // 게시 버튼 클릭 이벤트 리스너를 추가합니다.
    loadBtn.addEventListener('click', function(event) {
      event.preventDefault(); // 기본 동작(링크 이동)을 막습니다.
      
      // 선택된 플랫폼의 값을 가져옵니다.
      var selectElement = document.querySelector('.form-select');
      var selectedPlatform = selectElement.value;
      
      // 선택된 플랫폼 페이지로 이동합니다.
      if (selectedPlatform !== '') {
        window.location.href = selectedPlatform;
      }
    });
  }