// 아이디가 title인 요소를 가지고 와서 title 변수에 저장.
const title = document.querySelector("#title");

// title을 클릭하면 클래스 이름이 clicked인 것을 추가.
title.onclick = () => {
    title.classList.add("clicked");
}