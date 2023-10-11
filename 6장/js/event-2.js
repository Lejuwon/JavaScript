// 마우스 이벤트에서 클릭 위치 알아내기
// 사각형 요소 가져오기
const box = document.querySelector("#box");

box.addEventListener("click", (e) => {
    alert(`이벤트 발생 위치 > X : ${e.pageX}, Y : ${e.pageY}`);
});

// 키보드 이벤트에서 키 값 알아내기
const body = document.body;
const result = document.querySelector("#result");   // 결과가 출력될 공간

body.addEventListener("keydown", (e) => {
    result.innerText = `code : ${e.code}, key : ${e.key}`;
}); // addEventListener 사용 시 세미콜론 붙이기