// 생성자 함수 만들기
function Book(title, price) {
    // 프로퍼티 선언
    this.title = title;
    this.price = price;
}

// 프로토타입으로 메서드 추가
Book.prototype.buy = function() {
    console.log(`${this.title}을 ${this.price}원에 구매 했습니다.`);
}

// 객체 만들기
const book1 = new Book("JAVA", 10000);
book1.buy();

// 새로운 생성자 함수 만들기
function Textbook(title, price, major) {
    // 기존 생성자 함수(Book)의 프로퍼티 재사용
    Book.call(this, title, price);
    this.major = major; // 새로운 프로퍼티 정의
}

// 프로토타입으로 새로운 메서드 정의
Textbook.prototype.buyTextbook = function() {
    console.log(`${this.major}전공 서적, ${this.title}을 구매했습니다.`);
}

// 상위 객체와 하위 객체를 연결
// 상속 받기 위해 반드시 필요하다
                    // 하위 객체,         // 상위 객체
Object.setPrototypeOf(Textbook.prototype, Book.prototype);

// 객체 만들기
const book2 = new Textbook("알고리즘", 25000, "컴퓨터공학")
book2.buyTextbook();
book2.buy();