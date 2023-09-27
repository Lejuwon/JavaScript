// 반복되는 실행 멈추기
let count = 0;

let timer = setInterval(() => {
    console.log("안녕하세요.");
    count++;

    if (count == 5) {   // 만약 count가 5가 되면 멈춤
        clearInterval(timer);
    }
}, 2000);   // 2초마다 함수 실행