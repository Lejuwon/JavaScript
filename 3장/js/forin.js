// 객체 선언할 땐 const 이용
const student = {
    major : "컴퓨터공학",
    idNum : 202195036,
    name : '이주원'
}

for(key in student) {
    document.write(`${key} : ${student[key]}<br>`);
}