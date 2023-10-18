// 모든 스판을 가져와야함(p > span : 부모자식도 가능)
const spans = document.querySelectorAll("p > span");

for(let span of spans) {    // items에 있는 아이들을 item에 담아서 반복
    span.addEventListener("click", function() {
        // 해당 요소가 있는 내용 삭제
        // x를 누르면 x와 내용이 모두 삭제되어야 함
        // span 항목을 클릭하면 부모 노드인 p 삭제
        this.parentNode.remove(this);
    });
}