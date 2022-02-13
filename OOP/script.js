'use strict';

//CODING CHALLENGE #1

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed = this.speed + 10;
//   console.log(this.speed);
// };

// Car.prototype.brake = function () {
//   this.speed = this.speed - 5;
//   console.log(this.speed);
// };

// const BMW = new Car(true, 120);
// const Mercedes = new Car(true, 95);

// console.log(BMW);
// BMW.brake();
// console.log(BMW);

// //CODING CHALLENGE #2

// console.log('CODING CHALLENGE #2');
// class CarCl {
//   constructor(name, speed) {
//     this.name = name;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(this.speed);
//     return this;
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(this.speed);
//     return this;
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }
// }

// const ford = new CarCl('Ford', 120);
// ford.accelerate();
// ford.accelerate();
// ford.accelerate();
// ford.brake();

// console.log(ford.speedUS);

// // CODING CHALLENGE #3

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// EV.prototype.accelerate = function () {
//   this.speed = this.speed + 20;
//   this.charge = this.charge - 1;
//   console.log(
//     `${this.make} going at ${this.speed} Km/h, with a charge of ${this.charge}%`
//   );
// };

// const Tesla = new EV('Tesla', 120, 23);
// console.log('CODING CHALLENGE #3');

// Tesla.accelerate();
// Tesla.accelerate();
// Tesla.chargeBattery(90);
// Tesla.accelerate();

// Tesla.brake();

// //CODING CHALLENGE #4

// console.log('CODING CHALLENGE #4');

// class EVCl extends CarCl {
//   locale = navigator.language;
//   #charge;

//   constructor(make, speed, charge) {
//     super(make, speed);
//     this.#charge = charge;
//   }

//   chargeBattery = function (chargeTo) {
//     this.#charge = chargeTo;
//     return this;
//   };
// }

// const Rivian = new EVCl('Rivian', 120, 23);

// Rivian.accelerate()
//   .accelerate()
//   .accelerate()
//   .brake()
//   .brake()
//   .chargeBattery(100)
//   .brake()
//   .accelerate();

// const Person = function (firstName, birthyear) {
//   this.firstName = firstName;
//   this.birthyear = birthyear;
// };

// const jonas = new Person('Jonas', 1991);

// //Prototypes
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthyear);
// };

// console.log(jonas.__proto__.__proto__);

// const arr = [1, 2, 3, 4];
// console.log(arr.__proto__);

// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
// }

// const jessica = new PersonCl('Jessica', 1996);
// jessica.calcAge();

// const account = {
//   name: 'Jonas',
//   movements: [1, 200, 3, 400],

//   get latest() {
//     return this.movements.pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest);

// account.latest = 50;
// console.log(account.movements);

// PersonCl.hey = function () {
//   console.log('Hey');
// };

// PersonCl.hey();
// // jessica.hey();

// const PersonProto = {
//   clacAge() {
//     console.log(2037 - this.birthYear);
//   },
// };

// const steven = Object.create(PersonProto);

// const Student = function (firstName, birthYear, course) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
//   this.course = course;
// };

// const mike = new Student('Mike', 2020, 'Computer Science');

// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// mike.introduce();

////CODING CHALLENGE #2 Redo

// class CarlCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//     // return this.speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(this.speed);
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(this.speed);
//   }
// }

// const car = new CarlCl('ford', 20);

// car.accelerate();
// car.accelerate();
// car.accelerate();

// car.speedUS = 20;
// console.log(car.speed);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// const total = accounts.map(account => {
//   console.log(account);
//   account.movements.reduce((mov1, mov2, i) => {
//     return mov1 + mov2;
//   }, 0);
// });

const total = accounts
  .map(account => {
    return account.movements.reduce((mov1, mov2, i) => {
      return mov1 + mov2;
    }, 0);
  })
  .reduce((tot1, tot2) => tot1 + tot2);

const filter = accounts.map(account =>
  account.movements.filter(element => element > 1000)
);

const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      console.log(sums.deposits);
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

// console.log(deposits, withdrawals);
// console.log(sumWith);

const dictionary = ['a'];
const convertTitleCase = function (string) {
  let array = string.split(' ');
  return (array = array.map(word => {
    console.log(word);
    if (!dictionary.includes(word)) return word.toUpperCase();
    else return word;
  }));
};

const convertWords = function (string) {
  let sentence = '';
  for (let i = 0; i < string.length; i++) {
    if (!dictionary.includes(string[i])) sentence += string[i].toUpperCase();
    else sentence += string[i];
  }

  return sentence;
};

// console.log(convertTitleCase('this is a nice title'));
console.log(convertWords('this is a nice title'));
