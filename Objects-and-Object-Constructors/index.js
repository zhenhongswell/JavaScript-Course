const myObject = {
    property: 'Value!',
    otherProperty: 77,
    "obnoxious property": function() {
      // do stuff!
        console.log("do something!")
    }
};

function Person(name, marker) {
    this.name = name;
    this.marker = marker;
    this.sayName = () => {
        console.log(this.name);
    };
}

Person.prototype.sayHello = ()=>{
    console.log("Helloooooo");
}




const player1 = new Person('zhenhong','X');
player1.sayName();

player1.sayHello();
console.log(player1.valueOf());

player1.hasOwnProperty('valueOf'); // false
Object.prototype.hasOwnProperty('valueOf'); // true
Object.prototype.hasOwnProperty('hasOwnProperty'); // true

console.log(Object.getPrototypeOf(player1) === Person.prototype);
const player2 = new Person('swell','O');

// console.log(player_one.name);



// function Book(title, author,pages,read){
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
//     this.info = ()=>{
//         let returnString="";

//         returnString+=this.addingSpace(this.title);
//         returnString+=this.addingSpace(this.author);
//         returnString+=this.addingSpace(this.pages);
        
//         if (!read){
//             const readstring =  'not read yet';
//             returnString+=this.addingSpace(readstring);
//         }else{
//             const readstring =  'have read';
//             returnString+=this.addingSpace(readstring);
//         }

//         return returnString;
//     }

//     this.addingSpace = (string)=>{
//         return string + " ";
//     }
// }

// const theHobbit = new Book('booktitle','writer',100,true);


// console.log(theHobbit.info());