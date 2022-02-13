'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

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

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1}</div>
        <div class="movements__date">3 days ago</div>
      <div class="movements__value">${mov}€</div>
  `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(function (name) {
        return name[0];
      })
      .join('');
  });
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .filter(int => int > 1)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = `${interest}€`;
};

createUsernames(accounts);
// console.log(accounts);

const calcPrintBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;

    //Clear input fields

    containerApp.style.opacity = 100;

    inputLoginUsername.value = inputLoginPin.value = ' ';

    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

function updateUI(currentAccount) {
  //Display movements
  displayMovements(currentAccount.movements);
  //Display balance
  calcPrintBalance(currentAccount);
  //Display summary
  calcDisplaySummary(currentAccount);
}

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const loan = Number(inputLoanAmount.value);

  if (loan > 0 && currentAccount.movements.some(mov => mov >= loan * 0.1)) {
    currentAccount.movements.push(loan);
    updateUI(currentAccount);
  }

  inputClosePin.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    accounts.splice(index, 1);

    containerApp.style.opacity = 0;
  }
});

let sorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const higher = accounts
//   .flatMap(acc => acc.movements)
//   .filter(acc => acc > 1000).length;

// console.log(higher);

// const obj = {};

// obj.depositsTotal = accounts
//   .flatMap(acc => acc.movements)
//   .filter(acc => acc > 0)
//   .reduce((acumulator, acc) => acumulator + acc, 0);

// obj.withdrawalsTotal = accounts
//   .flatMap(acc => acc.movements)
//   .filter(acc => acc < 0)
//   .reduce((acumulator, acc) => acumulator + acc, 0);

// console.log(obj);

// const convertTitleCase = function (title) {
//   const exceptions = ['a'];
//   const [...words] = title.split(' ');

//   const newWords = words.map(word => {
//     if (!exceptions.includes(word)) {
//       return word[0].toUpperCase() + word.slice(1, word.length);
//     } else return word;
//   });

//   console.log(newWords);
// };

// convertTitleCase('this is a long title');
// // console.log();

// /////////////////////////////////////////////////

// const withdrawals = movements.filter(function (mov) {
//   return mov < 0;
// });

// console.log(withdrawals);

// const balance = movements.reduce(function (acc, cur, i, arr) {
//   return acc + cur;
// }, 0);

// console.log(balance);

// const firstWithdrawal = movements.find(mov => mov < 0);

// console.log(movements);
// console.log(firstWithdrawal);
// ////CODING CHALLENGE #1

// const checkDogs = function (dogsJulia, dogsKate) {
//   let copyJulia = [...dogsJulia];
//   copyJulia = copyJulia.slice(1, -2);
//   const both = [...copyJulia, ...dogsKate];

//   for (const [i, dog] of Object.entries(both)) {
//     console.log(i, dog);
//     if (dog > 3) console.log(`Dog ${i} is an adult, and is ${dog} years old`);
//     else
//       console.log(`"Dog number ${i} is still a puppy
//     🐶`);
//   }
// };

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

////CODING CHALLENGE #2 3

// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages
//     .map(function (dog) {
//       return dog <= 2 ? dog * 2 : dog * 4 + 16;
//     })
//     .filter(function (dog) {
//       return dog > 18;
//     })
//     .reduce(function (carry, human, i, array) {
//       console.log(typeof array);
//       return human + carry / array.length;
//     }, 0);

//   return humanAges;
// };

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

//CODING CHALLENGE #4

// const dogs = [
//   { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//   { weight: 8, curFood: 200, owners: ['Matilda'] },
//   { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
//   { weight: 32, curFood: 340, owners: ['Michael'] },
// ];

// //1.
// const foodPortion = dogs.map(dog => dog.weight ** 0.75 * 28);
// console.log(foodPortion);

// //2.
// const indexDogSarah = dogs.findIndex(dog => dog.owners.includes('Sarah'));

// dogs[indexDogSarah].curFood < foodPortion[indexDogSarah] * 1.1
//   ? console.log('Dog is eating well')
//   : console.log('Dog is eating too much');

// //3.
// const ownersEatTooMuch = dogs
//   .filter((dog, index) => dog.curFood > foodPortion[index] * 1.1)
//   .map(dog => dog.owners);

// console.log(ownersEatTooMuch);

// const ownersEatTooLittle = dogs
//   .filter((dog, index) => dog.curFood < foodPortion[index] * 0.9)
//   .map(dog => dog.owners);
// console.log(ownersEatTooLittle);

// //4.
// function cl(ownersEatTooLittle, ownersEatTooMuch) {
//   ownersEatTooLittle.forEach(owners =>
//     console.log(`${owners.join(' and ')}'s dogs eat too little!`)
//   );

//   ownersEatTooMuch.forEach(owners =>
//     console.log(`${owners.join(' and ')}'s dogs eat too much!`)
//   );
// }

// cl(ownersEatTooLittle, ownersEatTooMuch);

// //5.
// console.log(
//   dogs.some((dog, index) => foodPortion[index] === dogs[index].curFood)
// );

// //6.
// console.log(
//   dogs.some(
//     (dog, index) =>
//       foodPortion[index] * 1.1 > dogs[index].curFood &&
//       foodPortion[index] * 0.9 < dogs[index].curFood
//   )
// );

// //7.
// const dogsEatingOk = dogs
//   .map((dog, index) =>
//     foodPortion[index] * 1.1 > dog.curFood &&
//     foodPortion[index] * 0.9 < dog.curFood
//       ? dog
//       : null
//   )
//   .filter(dog => dog !== null);

// console.log(dogsEatingOk);

// //8.
// const sorteda = dogs.sort((curr, next) => curr.curFood - next.curFood);
// console.log(sorteda);

// const mapa = new Map([
//   ['animal', 'crocodile'],
//   ['color', 'purple'],
// ]);

// const array = [1, 5, 4, 7, 7, 6, 4, 5, 2, 3, 4];

// const set = new Set(array);

// console.log(typeof set);

// cl
