const messagee =
{
  hello: "Hello world!"
}

messagee.hello = "null";
console.log(messagee.hello);

let messagee2 = messagee;
console.log(messagee.hello);

messagee2.hello = "null2";
console.log(messagee2.hello);
