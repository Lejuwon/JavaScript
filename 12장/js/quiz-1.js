const url = "https://reqres.in/api/products/10";    // 서버에 있는 JSON의 자료 위치를 변수로 저장
let xhr = new XMLHttpRequest();
xhr.open("GET", url, true);
xhr.send();

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status == 200) {
        let info = JSON.parse(xhr.responseText)
        document.querySelector("#result").innerHTML = `
            <ul>
                상품명 : ${info.data.name}
                <br>
                생산년도 : ${info.data.year}
            </ul>
        `;
    }
};