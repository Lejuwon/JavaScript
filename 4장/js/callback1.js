// 버튼의 요소 가져오기
// 쿼리샐렉터가 태그가 버튼인것을 가져와서 변수에 삽입
const btn = document.querySelector("button");

/*
// display() 함수 정의
function display() {
    alert("버튼을 클릭했습니다.")
}

// 버튼을 클릭하면 display() 함수 실행
btn.addEventListener("click", display);
*/

// 함수에 직접 작성하여 콜백 함수 실행
btn.addEventListener("click",() => {
    alert("버튼 클릭");
})