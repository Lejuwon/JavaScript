// 함수 밖에서 프로토타입을 사용해 함수의 메서드를 정의함.
// 프로퍼티는 함수 안에, 메서드는 포로토타입을 사용해 정의함.
function newBook(title, page, done){
    // 프로퍼티 생성
    this.title = title;
    this.page = page;
    this.done = done;
}

// 프로토타입으로 메서드 생성
newBook.prototype.finish = function() {
    this.done === false ? (str = '읽는 중') : (str = '완독');
        return str;
}

const nBook1 = new newBook("자바스크립트", 650, false);
const nBook2 = new newBook("자바", 750, true);