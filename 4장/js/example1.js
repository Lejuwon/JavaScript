// 두 수를 입력 받아 곱한 결과를 리턴하여 화면에 출력하는 함수
// 함수 선언
function maltiple(num1, num2) {
    //let result = num1*num2; // 곱하기 연산

    //return result; // 함수를 호출한 곳으로 돌려 줌
    return num1*num2;
}

// 사용자로부터 정수 입력
let num1 = parseInt(prompt("첫번째 정수 입력"));
let num2 = parseInt(prompt("두번째 정수 입력"));

// 입력 받은 수를 인수로 함수 호출
document.write(`<h1>${num1} × ${num2} = ${maltiple(num1, num2)}</h1>`);