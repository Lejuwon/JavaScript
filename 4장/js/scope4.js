// 오류나는 이유?
// const, let 블록 스코프로 기본적인 범위가 결정되어 블록 안에서만 사용 가능합니다.
// 그렇기 때문에 함수에서는 사용 불가.
const factor = 5;

function calc() {
    return num * factor;    // 오류 발생
}

{
    const num = 10;
    let result = calc();
    console.log(`result : ${result}`);
}