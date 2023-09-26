// 인수의 일부분만 나머지 매개변수로 받기
function fav(first, ...favs) {
    let str1 = `가장 좋아하는 과일은 ${first}입니다.\n`;
    let str2 = `나머지 과일은 ${favs}입니다.`;
    return str1 + str2;
}

console.log(fav("샤인머스켓", "복숭아", "사과", "귤"));