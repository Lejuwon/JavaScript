// 리스트를 클릭하면 해당 리스트 내용 삭제
// 리스트의 모든 항목 가져오기
const items = document.querySelectorAll("li");

for(let item of items) {    // items에 있는 아이들을 item에 담아서 반복
    item.addEventListener("click", function() {
        // 해당 항목을 클릭했을 때.. 그 항목이 삭제 됨.
        // this는 이벤트가 발생한 노드를 가리킴
        // 화살표 함수가 아닌 익명 함수를 사용해야 함(정해진 사실임)
        // 화살표 함수는 최상위를 가리킴
        
        //this.remove(this);  // this : 나 자신
        this.parentNode.removeChild(this);  // 부모노드에서 삭제
    });
}