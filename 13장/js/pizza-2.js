// 제작 코드
const pizza = () => {
    return new Promise((resolve, reject) => {
        resolve("피자를 주문합니다.");
    });
}

const step1 = (message) => {
    console.log(message);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("피자 도우 준비");
        }, 3000);
    });
};

const step2 = (message) => {
    console.log(message);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("토핑 완료");
        }, 3000);
    });
};

const step3 = (message) => {
    console.log(message);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("굽기 완료");
        }, 2000);
    });
};

// 소비 코드
pizza()
    .then(step1)    // 축약형
    .then(step2)
    .then(step3)
    .then(console.log)
    // .then(result => step1(result))
    // .then(result => step2(result))
    // .then(result => step3(result))
    // .then(result => console.log(result))
    .then(() => {
        console.log("피자가 준비되었습니다.");
    });