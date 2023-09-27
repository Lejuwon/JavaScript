// 제목 가져오기
const title = document.querySelector("#title");

// 아이디가 title인 요소 클릭 시 배경과 글자 컬러 수정
title.onclick = () => {
    title.style.backgroundColor = "skyblue";
    title.style.color = "beige";
}