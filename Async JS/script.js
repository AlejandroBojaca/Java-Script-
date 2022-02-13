'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

/////////////////////////////////////

// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
//   countriesContainer.style.opacity = 1;
// };

// const renderCountry = function (data, className = '') {
//   const html = `<article class="country ${className}">
//   <img class="country__img" src="${Object.values(data.flags)[0]}" />
//   <div class="country__data">
//     <h3 class="country__name">${data.name.common}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${(
//       +data.population / 1000000
//     ).toFixed(1)} million</p>
//     <p class="country__row"><span>🗣️</span>${
//       Object.values(data.languages)[0]
//     }</p>
//     <p class="country__row"><span>💰</span>${
//       Object.values(data.currencies)[0].name
//     }</p>
//   </div>
// </article>`;

//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   // countriesContainer.style.opacity = 1;
// };

// // const getCountryandNeighbour = function (country) {
// //   //AJAx call country 1
// //   const request = new XMLHttpRequest();
// //   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// //   request.send();

// //   request.addEventListener('load', function () {
// //     const [data] = JSON.parse(this.responseText);
// //     // console.log(data);
// //     //render country 1
// //     renderCountry(data);
// //     //Get neighbour country (2)
// //     const [neighbour] = data.borders;

// //     if (!neighbour) return;
// //     console.log(neighbour);

// //     //AJAx call country 2
// //     const request2 = new XMLHttpRequest();
// //     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
// //     request2.send();

// //     request2.addEventListener('load', function () {
// //       const [data2] = JSON.parse(this.responseText);

// //       renderCountry(data2, 'neighbour');
// //     });
// //   });
// // };

// // getCountryandNeighbour('usa');

// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

//     return response.json();
//   });
// };

// const getCountryData = function (country) {
//   //Country 1

//   getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];

//       if (!neighbour) throw new Error('No neighbour found!');

//       //Country 2
//       return getJSON(
//         `https://restcountries.com/v3.1/alpha/${neighbour}`,
//         'Country not found'
//       );
//     })
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(error => renderError(`Something went wrong ${error.message} 💥💥`))
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('australia');
// });

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(
//       position => resolve(position),
//       err => reject(err)
//     );
//   });
// };

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmI = async function (country) {
//   const pos = await getPosition();

//   const { latitude: lat, longitude: lng } = pos.coords;

//   const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//   const dataGeo = await resGeo.json();
//   console.log(dataGeo);

//   const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
//   const data = await res.json();
//   renderCountry(data[0]);
// };

// whereAmI('portugal');
// console.log('first');

// (async function(){
//   const where = await whereAmI();
//   dataWhere =
// })

// const get3Countries = async function (c1, c2, c3) {
//   try {
//     const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
//     const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
//     const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);

//     const data = Promise.all([
//       getJSON(`https://restcountries.com/v3.1/name/${c1}`),
//       getJSON(`https://restcountries.com/v3.1/name/${c2}`),
//       getJSON(`https://restcountries.com/v3.1/name/${c3}`),
//     ]);

//     data.then(countries => console.log(countries));
//   } catch (err) {
//     console.error(err);
//     `https://restcountries.com/v3.1/name/${country}`;
//   }
// };

// get3Countries('portugal', 'spain', 'australia');

//// CODING CHALLENGE #2

const wait = function (seconds) {
  return new Promise(function (resolve) {
    console.log('waiting');
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    // console.log('loading img');
    const img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener('load', function () {
      document.querySelector('.images').append(img);
      console.log('loaded');
      resolve(img);
    });
    img.addEventListener('error', function () {
      reject('Image not found');
    });
  });
};

// let currentImg;

// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img2 => {
//     currentImg = img2;
//     return wait(2);
//   })
//   .then(() => (currentImg.style.display = 'none'))
// .catch(err => console.error(err));

////CODING CHALLENGE #3

const loadNPause = async function () {
  try {
    const img = await createImage(`img/img-1.jpg`);
    await wait(2);
    img.style.display = 'none';
    await wait(2);
    const img2 = await createImage(`img/img-2.jpg`);
    await wait(2);
    img2.style.display = 'none';
  } catch (err) {
    console.log(err.message);
  }
};

const loadAll = async function (arrayImg) {
  const imgs = arrayImg.map(async function (img) {
    return await createImage(img);
  });
  const imgsEl = await Promise.all(imgs);
  console.log(imgsEl);

  imgsEl.forEach(img => img.classList.add('parallel'));
  Promise.all([await imgs]);
};

// loadNPause();

const arrayImg = ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'];

loadAll(arrayImg);
