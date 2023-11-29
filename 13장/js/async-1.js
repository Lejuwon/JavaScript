function displayA() {
  console.log("A");
}
function displayB() {
  setTimeout(() => console.log("B"), 2000);
}
function displayC() {
  console.log("C");
}    
displayA();
displayB();
displayC();

/*
  함수의 실행 시간에 따라 오래 걸리는 것은 별도로 처리하고 실행이 끝났을 때 결과를 반환
*/