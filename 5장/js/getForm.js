// 선택 목록을 가져와 selectMenu 로 저장
const selectMenu = document.querySelector("#major");

selectMenu.onchange = () => {
    // selectIndex로 선택한 인덱스 번호를 가져와 요소 내용을 변수에 저장
    let selectText = selectMenu.options[selectMenu.selectedIndex].innerText;
    alert(`[${selectText}]를 선택하셨습니다.`);
}