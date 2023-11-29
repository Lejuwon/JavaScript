// 프로미스 객체 만들기
const order = new Promise((resolve, reject) => {
    let coffee = prompt("어떤 커피를 주문하시겠습니까?", "아이스아메리카노");
    if (coffee != null && coffee != "") {
        document.querySelector(".start").innerText = `${coffee} 주문 접수`;
        setTimeout(() => {
            resolve(coffee);
        }, 3000);
    }
    else
        reject("커피를 주문하지 않았습니다.");
});


// 프로미스 객체 사용하기 (소비 코드)
function display(result) {
    document.querySelector(".end").innerText = `${result} 준비 완료🥤`;
    document.querySelector(".end").classList.add("active");
    document.querySelector(".start").classList.add("done");
}

function showErr(err) {
    document.querySelector(".start").innerText = err;
}

order
    .then(display)
    .catch(showErr);