function Person(name:string)
{
  this.name = name;

  this.sayHi = function()
  {
    console.log("Cao ja sam " + this.name + "13");
  }
}

let persona = new Person("boki");
persona.sayHi;
