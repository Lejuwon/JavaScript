// 현재 날짜와 시간 정보를 담은 today 객체 생성.
const today = new Date();

// 현재 시간 중 시(hour) 정보 가져오기
const hrs = today.getHours();

// 이미지 보여질 영역 가져오기 container
const container = document.querySelector("#container");

// 이미지 노드 만들기
let newImg = document.createElement("img");

// 이미지 경로 설정 (시간에 따른)
newImg.src = (hrs < 12) ? "images/morning.jpg" : "images/afternoon.jpg"

// 이미지를 container의 자식 노드로 추가
container.appendChild(newImg)