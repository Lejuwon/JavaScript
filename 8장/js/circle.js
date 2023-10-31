// 반지름을 입력받아 원의 넓비와 둘레를 출력한다
// 반지름은 프롬프트로 입력 받는다
// 원의 넓이와 둘레를 구하는 함수를 각각 작성합니다
// 넓이와 둘레가 소수 3자리까지 출력합니다

// 1. 함수 생성
function area(r) {    // 원 넓이
    return Math.PI * r * r;
}

function circum(r) {    // 원 둘레
    return Math.PI * r * 2;
}

// 2. 출력 영역 가져오기
const result = document.querySelector("#result");

// 3. 입력 받기
let r = parseInt(prompt("반지름을 입력하세요."));

// 4. 결과 출력
result.innerText = 
    `반지름 : ${r}, 
    원의 넓이 : ${area(r).toFixed(3)}, 
    원의 둘레 : ${circum(r).toFixed(3)}`;