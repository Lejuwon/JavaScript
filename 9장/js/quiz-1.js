// Pet 클래스 만들기
class Pet {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    // run() 메서드 생성
    run() {
        document.write(`${this.color} ${this.name}이 달린다.`);
    }
}

// 객체 생성
const newPet = new Pet("누런", "장잼민");
newPet.run();