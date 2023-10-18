// 제목, 저자, 저장하기 버튼, 정보 표시 영역 가져오기
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const save = document.querySelector("#save");
const bookList = document.querySelector("#bookList");

// 저장하기 버튼을 클릭할 경우
save.addEventListener("click", (e) => { // 제목, 저자를 받아와야하므로 e라는 매개변수 사용
    e.preventDefault(); // 버튼을 누르면 서버로 보내지 않는다
    // 제목과 저자 정보 출력
    // 리스트 요소 만들기
    const item = document.createElement("li");
    // item에 내용 넣기 
    item.innerHTML = `${title.value} - ${author.value}  <span class="delButton">삭제</span>`;

    // 정보 영역에 추가
    bookList.appendChild(item);

    // input text 상자의 내용 지우기
    title.value="";
    author.value="";

    // 목록에서 제거
    // 삭제 버튼 요소 가져오기
    const delbtns = document.querySelectorAll(".delButton");

    // 삭제 버튼을 누를 때마다 .. 삭제
    for(let delbtn of delbtns) {    // delbtns에 있는 아이들을 delbtn에 담아서 반복
        delbtn.addEventListener("click", function() {
            // 해당 요소가 있는 내용 삭제
            // span 항목을 클릭하면 부모 노드인 p 삭제
            this.parentNode.remove(this);
            
        });
    }
});