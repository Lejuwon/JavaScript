// 화살표 함수,
// 매개 변수 2개인 함수
let sum = (a, b) => {
    let result =  a + b;
    return result
}

// 매개 변수가 없을 때
let hi = () => {
    return '안녕하세요.';
}

hi();

// return 생략 가능
let hi1 = () => { return '안녕하세요.'; }

// 매개 변수가 1개 일때
let hi2 = user => console.log(`${user}님 안녕하세요.`);
hi2('이주원');