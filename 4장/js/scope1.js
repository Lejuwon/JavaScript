function sum(num1, num2) {
    var result = num1 + num2;   // result는 지역변수(지역 스코프)
}

sum(10,20);
console.log(result);    // 오류 result가 없다. 선언 필요