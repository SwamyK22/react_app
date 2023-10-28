class Cat {
    constructor(name, color) {
        this.name = name;
        this.color = color
    }
    print() {
        console.log('Cat Name: ' + this.name)
    }
}

const c = new Cat('kittle');
const c1 = new Cat('juju')
c.print()
c1.print();

class Dog extends Cat {
    constructor(name, color, dogName) {
        super(name, color);
        this.dogName = dogName;
    }
    print() {
        console.log('Cat Nama: ' + this.name + " color: " + this.color + "\nDog Name: " + this.dogName)
    }
}

const d = new Dog('catty', 'white', 'puppy')
d.print();