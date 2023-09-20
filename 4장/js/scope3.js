// 필기 문제로 나오기 아주 적합함. 분석할 수 있어야함.

// var hi = "hello~~~";

// function change() {
//     hi = "bye"; // 함수 안에서 전역 변수 수정 가능
// }

// console.log(hi);    // hello~~~
// change();
// console.log(hi);    // bye

var hi = "hello~~~";

function change() {
    var hi = "bye"; // 지역 변수. 이 함수에서만 사용 가능
}

console.log(hi);    // hello~~~
change();
console.log(hi);    // hello~~~