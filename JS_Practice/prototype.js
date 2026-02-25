// const user={
//     name:" clove   "
// }

// Object.prototype.trueLength=function(){
//     console.log(`true length of ${this} is ${this.trim().length}`);
// }

// console.log(user.name.length)
// user.name.trueLength()

// const myarr=["jett","waylay"]

// myarr[0].trueLength()

// username=" chamber "
// username.trueLength()

function createUser(name,role){
    this.name=name,
    this.role=role
}

createUser.prototype.print=function(){
    console.log(`name: ${this.name} role:${this.role}`);
    
}


const user1=new createUser("waylay","duelist")
console.log(user1.print);
user1.print()

const user2=new createUser("jett")
user2.print()

const user3=new createUser("neon")
console.log(user3)
console.log(user2)



/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/