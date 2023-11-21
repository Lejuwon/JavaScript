let xhr = new XMLHttpRequest();
xhr.open("GET", "student.json");
xhr.send();

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status == 200) {
        let student = JSON.parse(xhr.responseText)
        document.querySelector("#result").innerHTML = `
            <h1>${student.name}</h1>
            <ul>
                <li>전공 : ${student.major}</li>
                <li>학년 : ${student.grade}</li>
            </ul>
        `;
    }
};
