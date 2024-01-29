function Person(name) {
    this.name = name;
}

Person.prototype.sayName = function () {
    console.log(`Hello, I'm ${this.name}!`);
};

function Person(name, marker) {
    this.name = name;
    this.marker = marker;
}

Person.prototype = {

    getMarker(){
        console.log(`My marker is '${this.marker}'`);
    }
    
};



// Object.getPrototypeOf(Player.prototype) should
// return the value of "Person.prototype" instead
// of "Object.prototype"
Object.getPrototypeOf(Person.prototype); // returns Object.prototype

console.log(Object.getPrototypeOf(Person.prototype));


// Now make `Player` objects inherit from `Person`
Object.setPrototypeOf(Person.prototype, Person.prototype);


console.log(Object.getPrototypeOf(Person.prototype));


Object.getPrototypeOf(Person.prototype); // returns Person.prototype

const player1 = new Person('steve', 'X');
const player2 = new Person('also steve', 'O');

player1.sayName(); // Hello, I'm steve!
player2.sayName(); // Hello, I'm also steve!

player1.getMarker(); // My marker is 'X'
player2.getMarker(); // My marker is 'O'