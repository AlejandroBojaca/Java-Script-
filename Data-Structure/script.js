'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const restaurant = {
//   n: 1,
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex - 1], this.mainMenu[mainIndex - 1]];
//   },
// };

// const { name, openingHours, categories } = restaurant;
// console.log(restaurant);

// let { name: restaurantName, openingHours: Hours } = restaurant;
// console.log(restaurantName, openingHours);

// restaurantName = [1, 2, 3];

// console.log(restaurantName);
// console.log(restaurant.name);

// const { open, close } = restaurant.openingHours.fri;

// console.log(open, close);

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

// console.log(menu);

// console.log(0 || '' || null || 0);

// const values = Object.values(openingHours);

// const entries = Object.entries(openingHours);
// console.log(entries[0][1]);

// for (const x of entries) {
//   for (const y in entries[x]) {
//     console.log(entries[x][y]);
//   }
// }

// console.log('SEPARATION');
// const [i, j] = Object.entries(restaurant.openingHours);
// console.log(Object.entries(restaurant.openingHours));

// const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza']);

// console.log(new Set('davidalejandro').size);

// const map = new Map();

// map
//   .set('key', 2)
//   .set('key2', 3)
//   .set(1, 2)
//   .set(2, 3)
//   .set('restaurants in the world', 25);

// console.log(map);

////CODING CHALLENGE #1

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const [players1, players2] = game.players;

// const [gk, ...fieldPlayers] = players1;

// const allPlayers = [...players1, ...players2];

// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// console.log(players1Final);
// // const { odds:{team1}, x: draw, team2 } = game;
// const {
//   odds: { team1, x: draw, team2 },
// } = game;

// const printGoals = function (...players) {
//   console.log(players, players.length);
// };

// printGoals('Thiago', 'Neuer');
// printGoals(...game.scored);

// (team1 < team2 && console.log('Team one is more likely to win')) ||
//   (team2 < team1 && console.log('Team two is more likely to win'));

// //// CODING CHALLENGE #2

// //1.
// for (const [i, player] of Object.entries(game.scored)) {
//   console.log(`Goal ${Number(i) + 1}: ${player}`);
// }

// //2.
// let avg = 0;
// for (const value of Object.values(game.odds)) {
//   avg += value;
// }
// avg /= Object.values(game.odds).length;

// console.log(avg);

// //3.
// for (const odd of game.odds) {
//   odd === 'x' ? console.log('draw', odd) : console.log(game[odd], odd.value);
// }

// //Bonus

// const scorers = {};

// for (const player of Object.values(game.scored)) {
//   scorers[player] ? (scorers[player] += 1) : (scorers[player] = 1);
// }

// console.log(scorers);

//// COODING CHALLENGE #3
// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '� Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '� Substitution'],
//   [64, '� Yellow card'],
//   [69, '� Red card'],
//   [70, '� Substitution'],
//   [72, '� Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '� Yellow card'],
// ]);

// console.log('CODING CHALLENGE #3');
// //1.
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// //2.
// gameEvents.delete(64);
// console.log(gameEvents);

// //3.
// const minutes = 90 / gameEvents.size;
// console.log(`An event happened on average every ${minutes} minutes`);

// //4.
// for (let [i, event] of gameEvents) {
//   const time = i <= 45 ? '[FIRST HALF]' : '[SECOND HALF]';
//   console.log(`${time} ${i}: ${event}`);
// }

//CODING CHALLENGE #4

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const text = document.querySelector('textarea');

document.querySelector('button').addEventListener('click', function () {
  console.log(text.value);
  let arrStrings = text.value.split('\n');
  for (let i of arrStrings) {
    i = i.toLowerCase();
    let [first, second] = i.split('_');
    const a = second[0].toUpperCase();
    i = first + a + second.slice(1);
    console.log(i);
  }
});

// underscore_case;
// first_name;
// Some_Variable;
// calculate_AGE;
// delayed_departure;
