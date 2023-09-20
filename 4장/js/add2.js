// 1 ~ 전달 받은 수까지 합계를 계산하는 함수
// 함수 선언
function calcSum(num) {
    let sum = 0;
    for(let i=0; i<num; i++) {
        sum += i+1;
    }
    document.write(`<h1>1부터 ${num}까지 합은 ${sum}입니다.</h1>`);
}

// 함수 호출
calcSum(10);    // 인수 값을 가지고 호출