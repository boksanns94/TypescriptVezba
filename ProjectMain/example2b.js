var messagee = {
    hello: "Hello world!"
};
messagee.hello = "null";
console.log(messagee.hello);
var messagee2 = messagee;
console.log(messagee.hello);
messagee2.hello = "null2";
console.log(messagee2.hello);
