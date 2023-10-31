// 버튼 가져오기
const back_btn = document.querySelector("#back");
const forward_btn = document.querySelector("#forward");

back_btn.addEventListener("click", () => {
    history.go(-1); // 뒤로 가기
});

forward_btn.addEventListener("click", () => {
    history.go(1);  // 앞으로 가기
});
