// id가 open인 요소를 가지고 와서 변수 open에 저장
const open = document.querySelector("#open");
// id가 modal-box인 요소를 가지고 와서 변수 modalBox에 저장
const modalBox = document.querySelector("#modal-box");
// id가 close인 요소를 가지고 와서 변수 close에 저장
const close = document.querySelector("#close");

open.addEventListener("click", () => {
    modalBox.classList.toggle("active");    // 클릭하면 css에 .active 스타일을 토글 
})

close.addEventListener("click", () => {
    modalBox.classList.toggle("active");    // 클릭하면 토글시켜 display를 none 
})