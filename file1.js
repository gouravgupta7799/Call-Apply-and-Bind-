

// call//
let student = {
  newAge: 20
};

let CallFunction = function () {
  console.log(this.newAge);
}
CallFunction.call(student);

// apply//
let obj = {
  num: 17
};
arr = [20, 2, 25,21,20];

let ApplyFunction = function (a,b,c,d,e) {
  return this.num + a + b + c + d + e;
}
console.log(ApplyFunction.apply(obj, arr));

// bind//
newName = {
  firstName: 'Gourav',
  lastName : 'Gupta'
}
fullName = function () {
  console.log(this.firstName+' '+this.lastName);
}
AboutMe = fullName.bind(newName);
AboutMe()
console.dir(fullName)