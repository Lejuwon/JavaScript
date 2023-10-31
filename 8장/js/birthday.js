// 올해 날짜 - 내가 태어난 날짜
const result = document.querySelector("#result");   // 결과 출력 영역 가져오기
const today = new Date();   // 오늘 날짜
const birth = new Date("2002-05-29");   // 내 생일

// 오늘날 빼기 생일날(밀리초)
let passedTime = today.getTime() - birth.getTime();
// 밀리초를 일수로 계산
let passedDay = Math.round(passedTime/(1000*60*60*24));
// 결과 출력
result.innerText = passedDay;
