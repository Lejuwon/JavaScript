// 두 수를 전달 받아 곱셈하는 화살표 함수 정의
let mul = (num1, num2) => {
    let result =  num1 * num2;
    return result    // 생략 가능 num1 * num2
}

// 두 수 입력 받기
let num1 = parseInt(prompt("첫번째 수 입력"))
let num2 = parseInt(prompt("두번째 수 입력"))

// 결과 출력
document.write(`<h2>${num1} × ${num2} = ${mul(num1, num2)}</h2>`);