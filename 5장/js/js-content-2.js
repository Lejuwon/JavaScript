// 제목 가져오기
const title = document.querySelector("#title");   

// 이름 가져오기
const userName = document.querySelector("#desc p")
//const userName = document.querySelectorAll("#desc .user")[0];

// 프로필 이미지 가져오기
const pfImg = document.querySelector("#profile img");


// 제목 영역 클릭 시 내용 변경
title.onclick = () => title.innerText = "프로필";

// 이름 영역 클릭 시 이름만 진하게 만들기
userName.onclick = () => userName.innerHTML = "이름 : <b>이주원</b>";

// 이미지 영역 클릭 시 이미지 변경(이미지의 파일(경로 포함) 변경)
pfImg.onclick = () => pfImg.src = "images/pf2.png";
