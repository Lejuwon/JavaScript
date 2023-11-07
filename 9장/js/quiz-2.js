// Pet 클래스 만들기
class Pet {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    // run() 메서드 생성
    run() {
        document.write(`<h1>${this.color} ${this.name}이 달린다.</h1>`);
    }
}

// 객체 생성
// const newPet = new Pet("누런", "장잼민");
// newPet.run();

class Cat extends Pet {
    constructor(name, color, breed) {
        super(name, color);
        this.breed = breed;
    }

    viewInfo() {
        document.write(`<h1>이름 : ${this.name}, 품종 : ${this.breed}, 색깔 : ${this.color}<hr></h1>`);
    }
}

const pet2 = new Cat("장잼민", "갈색", "코숏");
pet2.viewInfo();
pet2.run();