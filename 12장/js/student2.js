let xhr = new XMLHttpRequest();
xhr.open("GET", "student-2.json");
xhr.send();

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status ===200) {
        let students = JSON.parse(xhr.responseText);
        let output = "";
        for (let student of students) {
            output += `
            <h1>${student.name}</h1>
            <ul>
                <li>전공 : ${student.major}</li>
                <li>학년 : ${student.grade}</li>
            </ul>
            <hr>
            `;
        }
        document.querySelector("#result").innerHTML = output;
    }
};