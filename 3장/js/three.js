// 1. 정수를 입력받는다.
// 2. 만약 정수가 3의 배수이면
//     1) 3의 배수입니다.
// 3. 아니면
//     2) 3의 배수가 아닙니다.  
let num = parseInt(prompt("숫자를 입력하세요."));

if (num % 3 == 0) {
    alert(`${num}은 3의 배수입니다.`);
}
else {
    alert(`${num}은 3의 배수가 아닙니다.`);
}

/* [다른방법]
let userNum = prompt("숫자를 입력하세요.")

if (userNum != null) {
    userNum = parseInt(userNum);
    if (userNum % 3 == 0) {
        alert(`${userNum}은 3의 배수입니다.`);
    }
    else {
        alert(`${userNum}은 3의 배수가 아닙니다.`);
    }
}
else {
    alert("입력이 취소되었습니다.");
}*/