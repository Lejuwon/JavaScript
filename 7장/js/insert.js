const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    // 새로운 p 요소 만들기
    let newP = document.createElement("p");
    // 텍스트 만들기 - titl의 텍스트 부분만 가지고 와서 텍스트 노드로 생성.
    let textNode = document.createTextNode("안녕하세요");
    // 텍스트 노드를 p 요소에 추가, p의 자식으로 텍스트 연결
    newP.appendChild(textNode);
    // 세 번째 p 요소를 기준 노드로 지정
    let basicNode = document.querySelectorAll("p")[2]
    // 기준 노드의 앞에 newP 추가
    document.body.insertBefore(newP, basicNode)

}, {once:true});    // 클릭하면 한 번만 출력