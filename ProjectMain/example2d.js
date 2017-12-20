function Person(name) {
    this.name = name;
    this.sayHi = function () {
        console.log("Cao ja sam " + this.name + "13");
    };
}
var persona = new Person("boki");
persona.sayHi;
/*
  this.sayHi = function()
  {
    setTimeout(
      function()
      {
      console.log('Hello my name is ' + that.name);
      }
    ,1000)
  }
}


const person = new Person('Bob');

person.sayHi;
*/
