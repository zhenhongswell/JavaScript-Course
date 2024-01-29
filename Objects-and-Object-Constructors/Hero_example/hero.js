let Hero = function(name,level){
    this.name = name;
    this.level = level;
}

Hero.prototype.greet = function(){
    return (`My name is ${this.name} greeting!`)
    
}

let Warrior = function(name,level,weapon){
    //function borrowing
    
    Hero.call(this,name,level);
    //notice prototype properties and methods are not automatically linked when you use call() to chain constructors
    this.weapon = weapon;
}

Warrior.prototype.attack = function(){
    return `use the ${this.weapon} to attack!`;
}



let hero1 = new Warrior('w1',3,'the sword');


console.log(hero1.attack());



// console.log(hero1.greet());


Object.setPrototypeOf(Warrior.prototype,Hero.prototype);


console.log(hero1.greet());

