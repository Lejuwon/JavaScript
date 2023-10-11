// 캐러셀 영역 가져오기
const container = document.querySelector("#container");
// 이미지배열
const pics = ['pic-1.jpg','pic-2.jpg','pic-3.jpg','pic-4.jpg','pic-5.jpg'];

// 첫 번째 이미지 기본으로 표시
container.style.backgroundImage = `url(images/${pics[0]})`;

// 화살표 요소 가져오기 (arrow는 두개로 querySelectorAll이 맞음)
const arrows = document.querySelectorAll(".arrow");

let i = 0;

// 화살표 버튼을 누르면 반복해서 다음 또는 이전 이미지를 가져 온다
arrows.forEach(arrow => {
    arrow.addEventListener("click", (e) => {
        if(e.target.id === "left") {
            i--;    // 이전 이미지로 이동
            if(i < 0) {
                i = pics.length - 1;    // 마지막 이미지로 이동
            }
        }
        else if(e.target.id === "right") {
            i++;
            if(i >= pics.length) {
                i = 0;    // 첫 번째 이미지로 이동
            }
        }
        // 현재 이미지 표시
        container.style.backgroundImage = `url(images/${pics[i]})`;
    });
}); 







// 시험 문제 : 문서에서 화살표 요소를 가지고 와서 저장하시오