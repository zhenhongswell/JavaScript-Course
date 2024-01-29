const Person = function(name,age){
    this.name = name;
    this.age = age;
}

Person.prototype.getName = function(){
    return this.name;
}

Person.prototype.getAge = function(){
    return this.age;
}

let player1 = new Person('zhen hong',24);


console.log(player1.getAge());
console.log(player1.getName());


const Infos = function(name,age,account,password){
    
    Person.call(this,name,age);

    this.account = account;
    this.password = password;

}

let info1 = new Infos('sadf',12,'asdasd','123456');



Object.setPrototypeOf(Infos.prototype,Person.prototype);
console.log(info1.getAge());