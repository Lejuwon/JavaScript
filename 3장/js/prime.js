// 소수 판단 스크립트
// 정수를 입력 받는다. 프롬프트
// 소수는 1을 제외한 자기 자신으로 나누어 떨어지는 수.
// 나누어 떨어진다 = 나머지가 0이다.

// 입력
const inputNum = parseInt(prompt("정수를 입력하세요."))

// 연산
let flag = 0;   // 연산 후 flag 값으로 소수인지 아닌지 출력
for (let i=2; i<inputNum; i++) {    // i가 2부터 입력값까지
    if(inputNum%i == 0) {   // 나머지가 있는지 검사
        flag = 1;   // 나머지가 없으면 소수가 아니므로 flag에 1로 변경
        break
    }
    else {
        flag = 0;    // 나머지가 있으면 0으로 변경
    }
}

// 출력
if (flag == 1)
    document.write(`${inputNum}은 소수가 아닙니다.`)
else
    document.write(`${inputNum}은 소수입니다.`)

