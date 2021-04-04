 "use strict";

/* function showThis(a, b) {
    console.log(this);
    function sum() {
        console.log(this);
        return a + b; 
    }

    console.log(sum());
}
showThis(4, 5); */

/* const obj = {
    a: 20,
    b: 15,
    sum: function () {
        console.log(this);
    }
};

obj.sum (); */

/* function User (name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function (){
        console.log("Hello!" + this.name);
    };
}
let ivan = new User("Ivan", 23); */

/* function sayName() {
    console.log(this);
    console.log(this.name);
}
const user = {
    name: "John"
};

sayName.call(user);
sayName.apply(user); */

/* function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}
const user = {
    name: "John"
};

sayName.call(user, "Smith");
sayName.apply(user, ["Smith"]);

function count(num) {
    return this*num;
}

const double = count.bind(2);
console.log(double(3));
console.log(double(13)); */

const obj = {
    num: 5,
    sayNumber: function () {
        const say = () => {
            console.log(this.num);
        };
        say();
    }
};

obj.sayNumber();

const double = a =>  a *2;
   
