'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// // const inputCountry = document.querySelector('.country');

// // // // // // ///////////////////////////////////////

// // // // // // // What is a async JS -
// // // // // // // (Самое распространненое зачем его используют это чтобы делать AJAX запросы на API)

// // // // // // //
// // // // // // // Synchronis JS -
// // // // // // // this a simple code what exuciuted line by line in the order of execution that we difine in our code
// // // // // // //
// // // // // // //  start from the top and line by line the exetut in a execution theared

// // // // // // // //////////////////////////////////////////////////////////////////////////
// // // // // // //
// // // // // // // Long-running operation (exemple)
// // // // // // // alert('') - block the code execution and wait until we click on a "OK" BUTTON AND ONLY THEN NEXT LINE OF CODE WILL BE EXECUTION
// // // // // // //
// // // // // // // //////////////////////////////////////////////////////////////////////////

// // // // // // // AJAX - Asynchronise JavaScript And XML ,
// // // // // // // Allow as to communicate with remote web server in asunchronous way.

// // // // // // // XML - data type what bee n uset in past

// // // // // // // JSON - JavaScript Object (converted to a string)

// // // // // // //  API - Application Programmin Interface
// // // // // // // Pice of software that can be use by anouther pice of software , in order to allow application communitate

// // // // // // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // // // // // //  Lets beuld some and make a first API recvest

// // // // // // // const getCountryDate = function (country) {
// // // // // // //   // OLD way
// // // // // // //   const request = new XMLHttpRequest();
// // // // // // //   request.open(
// // // // // // //     'GET',
// // // // // // //     `https://restcountries.com/v3.1/name/${country}?fullText=true`
// // // // // // //   );
// // // // // // //   request.send();

// // // // // // //   // console.log(request.responseText); // ТАК НЕ ПОЛУЧИТЬСЯ ПОТОМЫ ЧТО В МОМЕНТ ИЛИЦАЛИЗАЦИИ КОДА ДАННЫЕ НЕ ПОЛУЧЕНЫ
// // // // // // //   // А здесь мы уде используем асинхронный JS и в момент получения данных обратно мы модем с ними работать
// // // // // // //   request.addEventListener('load', function () {
// // // // // // //     //   console.log(this.responseText);

// // // // // // //     const [data] = JSON.parse(this.responseText);
// // // // // // //     console.log(data);

// // // // // // //     const flag = data.flags.svg;
// // // // // // //     const name = data.altSpellings[1];
// // // // // // //     const region = data.region;
// // // // // // //     const population = +data.population / 1000000;
// // // // // // //     const languages = Object.values(data.languages)[0];
// // // // // // //     const currencies = Object.values(data.currencies)[0].symbol;
// // // // // // //     const curText = Object.values(data.currencies)[0].name;

// // // // // // //     const html = `
// // // // // // //     <article class="country">
// // // // // // //      <img class="country__img" src="${flag}" />
// // // // // // //      <div class="country__data">
// // // // // // //        <h3 class="country__name">${name}</h3>
// // // // // // //        <h4 class="country__region">${region}</h4>
// // // // // // //        <p class="country__row"><span>👫 </span>${population.toFixed(2)}M</p>
// // // // // // //        <p class="country__row"><span>🗣️</span>${languages}</p>
// // // // // // //        <p class="country__row"><span>💰 </span>${curText} ${currencies}</p>
// // // // // // //      </div>
// // // // // // //    </article>`;

// // // // // // //     countriesContainer.insertAdjacentHTML('beforeend', html);
// // // // // // //     countriesContainer.style.opacity = 1;

// // // // // // //     console.log(flag, name, region, population, languages, currencies);
// // // // // // //   });
// // // // // // // };

// // // // // // // На этом примере хорошо можно увидеть асинхронный JS
// // // // // // // getCountryDate('Ireland'); // После того как был выслан запрос он продолжает на дожидаясь ответа
// // // // // // // getCountryDate('Poland'); // Выполняет следущую строку кода
// // // // // // // getCountryDate('Niger'); // и следуюзию
// // // // // // // А на заднем плане выполняет функцию 'load' которая отображает все елементы в UI

// // // // // // // А что если мы хотим чтоб все запросф исполнялись в каком-то определенном порядке ?

// // // // // // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // // // // // //  Call Back HELL

// // const renderHtml = function (date, className = '') {
// //   const flag = date.flags.svg;
// //   const name = date.altSpellings[1];
// //   const region = date.region;
// //   const population = +date.population / 1000000;
// //   const languages = Object.values(date.languages)[0];
// //   const currenciesName = Object.values(date.currencies)[0].name;
// //   const currencies = Object.values(date.currencies)[0].symbol;

// //   const html = `
// //     <article class="country ${className}">
// //      <img class="country__img" src="${flag}" />
// //      <div class="country__data">
// //        <h3 class="country__name">${name}</h3>
// //        <h4 class="country__region">${region}</h4>
// //        <p class="country__row"><span>👫 </span>${population.toFixed(2)}M</p>
// //        <p class="country__row"><span>🗣️</span>${languages}</p>
// //        <p class="country__row"><span>💰 </span>${currenciesName} ${currencies}</p>
// //      </div>
// //    </article>`;

// //   countriesContainer.insertAdjacentHTML('beforeend', html);
// //   countriesContainer.style.opacity = 1;
// // };

// // // // // // const getCountryNeiber = function (country) {
// // // // // // AJAX call country 1
// // // // // //   const request = new XMLHttpRequest();
// // // // // //   request.open(
// // // // // //     'GET',
// // // // // //     `https://restcountries.com/v3.1/name/${country}?fullText=true`
// // // // // //   );
// // // // // //   request.send();

// // // // // //   //render country 1
// // // // // //   request.addEventListener('load', function () {
// // // // // //     const [date] = JSON.parse(this.responseText);
// // // // // //     console.log(date);
// // // // // //     //   call to render function
// // // // // //     renderHtml(date);

// // // // // //     // Get the neigbour country
// // // // // //     const neigbour = date.borders?.[0];
// // // // // //     if (!neigbour) return;

// // // // // //     // AJAX call neigbour country
// // // // // //     const neigbourRequest = new XMLHttpRequest();
// // // // // //     neigbourRequest.open(
// // // // // //       'GET',
// // // // // //       `https://restcountries.com/v3.1/alpha/${neigbour}
// // // // // //     `
// // // // // //     );
// // // // // //     neigbourRequest.send();

// // // // // //     neigbourRequest.addEventListener('load', function () {
// // // // // //       const [date2] = JSON.parse(this.responseText);

// // // // // //       console.log(date2);
// // // // // //       renderHtml(date2, 'neighbour');
// // // // // //     });

// // // // // //     console.log(neigbour);
// // // // // //   });
// // // // // // };

// // // // // // getCountryNeiber('Germany');

// // // // // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // // // // //  New way to make http request

// // // // // // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////// OLD way to make http request
// // // // // //
// // // // // //
// // // // // //
// // // // // //
// // // // // // const getCountryNeiber = function (country) {
// // // // // //   // AJAX call country 1
// // // // // //   const request = new XMLHttpRequest();
// // // // // //   request.open(
// // // // // //     'GET',
// // // // // //     `https://restcountries.com/v3.1/name/${country}?fullText=true`
// // // // // //   );
// // // // // //   request.send();

// // // // // // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////// New way to make http request
// // // // // //
// // // // // //
// // // // // //  AJAX -fetch API
// // // // // //
// // // // // //
// // // // // //

// // // // // // fetch()

// // // // // // fetch() - возврозает Promise
// // // // // // const request = fetch(
// // // // // //   'https://restcountries.com/v3.1/name/poland?fullText=true'
// // // // // // );

// // // // // // console.log(request); // Promise: {<pending>}

// // // // // // Promise - an object that is used as a placeholder for the future result of an asynchronous operation

// // // // // // promise - is a conteiner foran synchronouse delivered values

// // // // // // promise - is a conteiner for future value

// // // // // //
// // // // // //
// // // // // // We no longer need to rely on events and call-back function passed in to asynchronouse functionto handle asynchronouse result

// // // // // //Insted of nasting call-back function -> we can chaine the promise for a sequence of asynchronous operatio.

// // // // // //

// // // // // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // // // // // AJAX call -  Consuming Promise

// // // // // // Promise можно писать самому но в основном мы только потребляем Promise (fetch API - это готовые промисы для обработки HTTP запросов )

// // // // // // const request = fetch(
// // // // // //   'https://restcountries.com/v3.1/name/poland?fullText=true'
// // // // // // );

// // // // // // console.log(request);

// // // // // // function getVal() {
// // // // // //   const div = document.querySelector('.countries');
// // // // // //   div.innerHTML = ' ';

// // // // // //   const val = document.querySelector('input').value;

// // // // // //   getCountry(val + '');
// // // // // // }

// // // // // const renderHtml = function (date, className = '') {
// // // // //   const flag = date.flags.svg;
// // // // //   const name = date.altSpellings[1];
// // // // //   const region = date.region;
// // // // //   const population = +date.population / 1000000;
// // // // //   const languages = Object.values(date.languages)[0];
// // // // //   const currenciesName = Object.values(date.currencies)[0].name;
// // // // //   const currencies = Object.values(date.currencies)[0].symbol;

// // // // //   const html = `
// // // // //       <article class="country ${className}">
// // // // //        <img class="country__img" src="${flag}" />
// // // // //        <div class="country__data">
// // // // //          <h3 class="country__name">${name}</h3>
// // // // //          <h4 class="country__region">${region}</h4>
// // // // //          <p class="country__row"><span>👫 </span>${population.toFixed(2)}M</p>
// // // // //          <p class="country__row"><span>🗣️</span>${languages}</p>
// // // // //          <p class="country__row"><span>💰 </span>${currenciesName} ${currencies}</p>
// // // // //        </div>
// // // // //      </article>`;

// // // // //   countriesContainer.insertAdjacentHTML('beforeend', html);
// // // // // };

// // // // // //fetch()
// // // // // // const getCountryDate = function (country) {
// // // // // //   const request = fetch(
// // // // // //     'https://restcountries.com/v3.1/name/poland?fullText=true'
// // // // // //   )
// // // // // //     .then(function (response) {
// // // // // //       return response.json();
// // // // // //     })
// // // // // //     .then(function (data) {
// // // // // //       renderHtml(data[0]);
// // // // // //       console.log(data[0]);
// // // // // //     });
// // // // // // };
// // // // // // getCountryDate('poland');

// // // // // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // // // // //
// // // // // // Create a custom error
// // // const renderError = function (messag) {
// // //   countriesContainer.insertAdjacentText('beforeend', messag);
// // // };

// // // // // //
// // // // // // Helper Function (return JSON from URL)
// // // // // const getJson = function (url, errorMsg = 'Somthing went wrong!') {
// // // // //   return fetch(url).then(response => {
// // // // //     if (!response.ok) {
// // // // //       throw new Error(`${errorMsg} (${error.status})`);
// // // // //     }

// // // // //     return response.json();
// // // // //   });
// // // // // };

// // // // // const getData = function (country) {
// // // // //   getJson(
// // // // //     `https://restcountries.com/v3.1/name/${country}?fullText=true`,
// // // // //     'Country not found'
// // // // //   )
// // // // //     .then(data => {
// // // // //       renderHtml(data[0]);

// // // // //       const neigbour = data[0].borders[0];
// // // // //       if (!neigbour) {
// // // // //         throw new Error('No neigbour found!');
// // // // //       }

// // // // //       //   Generate neigbour country
// // // // //       return getJson(
// // // // //         `https://restcountries.com/v3.1/alpha/${neigbour}`,
// // // // //         'Country not found'
// // // // //       );
// // // // //     })
// // // // //     .then(neigbour => renderHtml(neigbour[0], 'neighbour'))
// // // // //     //
// // // // //     // catch() - если произайдут какието ошибки мы можем что-то сделать (например поп ап или  просто вывесли алерт виндов)
// // // // //     .catch(err => {
// // // // //       renderError(`Somthing went wrong2! (${err.message})`);
// // // // //       console.log(err.message);
// // // // //       console.error(err, 'DUPA MAAAN');
// // // // //     })
// // // // //     .finally(() => (countriesContainer.style.opacity = 1));
// // // // // };
// // // // // //
// // // // // // getData('poland');

// // // // // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // // // // // How to handle error  (Promise rejection)

// // // // // const input = document.getElementById('input');

// // // // // btn.addEventListener('click', function () {
// // // // //   countriesContainer.innerHTML = '';
// // // // //   getData(input.value);
// // // // // });

// // // // // /////////////////////////////////////////////////////////////////
// // // // // //
// // // // // // fetch() - создает запрос на сервер
// // // // // //
// // // // // // .then() - вызываеться когда Промис fillfild
// // // // // //
// // // // // // .catch() - вызываеться приощибки
// // // // // //
// // // // // // .finally() - вызовиться в любом из двух случии
// // // // // //
// // // // // /////////////////////////////////////////////////////////////////

// // // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// challenge 1

// // // // fetch('hhttps://api.bigdatacloud.net/data/reverse-geocode-client?latitude=52.508&longitude=13.381')
// // // //   .then(response => response.json())
// // // //   .then(data => console.log(data[0]))
// // // //   .catch(() => console.error(`Something went wrong!`));

// // const renderError = function (msg) {
// //   countriesContainer.insertAdjacentText('beforeend', msg);
// // };

// // // const renderHtml = function (data, className = '') {
// // //   const flag = data.flags.svg;
// // //   const name = data.altSpellings[1];
// // //   const region = data.region;
// // //   const population = new Intl.NumberFormat('de-DE').format(data.population);
// // //   const languages = Object.values(data.languages)[0];
// // //   const currenciesName = Object.values(data.currencies)[0].name;
// // //   const currencies = Object.values(data.currencies)[0].symbol;

// // //   const html = `
// // //     <article class="country ${className}">
// // //     <img class="country__img" src="${flag}" />
// // //     <div class="country__data">
// // //     <h3 class="country__name">${name}</h3>
// // //     <h4 class="country__region">${region}</h4>
// // //     <p class="country__row"><span>👫</span>${population}</p>
// // //     <p class="country__row"><span>🗣️</span>${languages}</p>
// // //     <p class="country__row"><span>💰</span>${currencies} ${currenciesName}</p>
// // //     </div>
// // //     </article>

// // //     `;

// // //   countriesContainer.insertAdjacentHTML('beforeend', html);
// // // };

// // // //
// // // // fetch()
// // // //
// // const requestOptions = {
// //   method: 'GET',
// // };
// // //

// // // // Promisify

// // // const getPosition = function () {
// // //   return new Promise((resolve, reject) => {
// // //     navigator.geolocation.getCurrentPosition(resolve, reject);
// // //   });
// // // };

// // // const whereIAm = function () {
// // //   // Get lan and lng - send them to API
// // //   getPosition()
// // //     .then(resp => {
// // //       const { latitude: lat, longitude: lng } = resp.coords;

// // //       return fetch(
// // //         `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&apiKey=c0eda9345c814f7cb970c084aad7478c`,
// // //         requestOptions
// // //       );
// // //     })

// // //     .then(response => {
// // //       console.log(response);

// // //       if (!response.ok) throw new Error(`Country not found`);

// // //       return response.json();
// // //     })
// // //     .then(result => {
// // //       const country = result.features[0].properties.country;
// // //       console.log(country + ' ');

// // //       return fetch(
// // //         `https://restcountries.com/v3.1/name/${country}?fullText=true`
// // //       );
// // //     })

// // //     .then(result => result.json())
// // //     .then(data => {
// // //       console.log(data[0]);

// // //       renderHtml(data[0], ' ');

// // //       const neigbour = data[0].borders[0];
// // //       if (!neigbour) return;
// // //       return fetch(`https://restcountries.com/v3.1/alpha/${neigbour}`);
// // //     })
// // //     .then(respose => respose.json())
// // //     .then(data => renderHtml(data[0], 'neighbour'))
// // //     .catch(error => {
// // //       renderError(`Something went wrong 😔 (${error.message})`);
// // //     })
// // //     .finally(() => {
// // //       countriesContainer.style.opacity = 1;
// // //     });
// // // };

// // // //
// // // //
// // // // input
// // // // const lat = document.getElementById('lat');
// // // // const lng = document.getElementById('lng');

// // // // btn
// // // btn.addEventListener('click', function (e) {
// // //   e.preventDefault();
// // //   countriesContainer.innerHTML = ' ';
// // //   whereIAm();
// // //   //   lat.value = lng.value = '';
// // // });

// // // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  The event loop on practic

// // // // console.log('Test start'); //1
// // // // setTimeout(() => console.log('0 sec timer'), 0); //4
// // // // Promise.resolve('Resolved promise 1 ').then(res => console.log(res)); //3
// // // // console.log('Test end'); // 2

// // // // Biulding new Promise

// // // //
// // // //
// // // // Promise take one executes function(resolve , reject)
// // // //
// // // //

// // // // const lottery = new Promise(function (resolve, reject) {
// // // //   console.log('Lottery draw is happen 😎 ');

// // // //   setTimeout(function () {
// // // //     if (Math.random() >= 0.5) {
// // // //       resolve('You win');
// // // //     } else {
// // // //       reject(new Error('You loose money'));
// // // //     }
// // // //   }, 2000);
// // // // });

// // // // lottery.then(resp => console.log(resp)).catch(err => console.error(err));

// // // // Promisify (real-worl exemple)
// // // // const wait = function (second) {
// // // //   return new Promise(resolve => setTimeout(resolve, second * 1000));
// // // // };

// // // // wait(4)
// // // //   .then(resp => {
// // // //     console.log('4 second pass');
// // // //     return wait(3);
// // // //   })
// // // //   .then(() => {
// // // //     console.log('3 second pass');
// // // //     return wait(2);
// // // //   })
// // // //   .then(resp => {
// // // //     console.log('2 second pass');
// // // //     return wait(1);
// // // //   })
// // // //   .then(resp => console.log('1 second pass'));

// // // // console.log(Promise.prototype);
// // // // //
// // // //

// // // //
// // // //
// // // // setTimeout(() => {
// // // //   console.log('1 second pass');
// // // //   setTimeout(() => {
// // // //     console.log('2 second pass');
// // // //     setTimeout(() => {
// // // //       console.log('3 second pass');
// // // //       setTimeout(() => {
// // // //         console.log('4 second pass');
// // // //       }, 4000);
// // // //     }, 3000);
// // // //   }, 2000);
// // // // }, 1000);

// // // //
// // // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // // //Promisify Geolocation API APP

// // // // navigator.geolocation.getCurrentPosition(
// // // //   position => console.log(position),
// // // //   err => console.error(err)
// // // // );

// // // //
// // // // const getPosition = function () {
// // // //   return new Promise(function (resolve, reject) {
// // // //     navigator.geolocation.getCurrentPosition(resolve, reject);
// // // //   });
// // // // };

// // // // getPosition().then(resp => console.log(resp));

// // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // // challenge 2

// // // const wait = function (sec) {
// // //   return new Promise(resolve => setTimeout(resolve, sec * 1000));
// // // };

// // // const createImg = function (e) {
// // //   return new Promise(function (resolve, reject) {
// // //     const div = document.querySelector('.images');
// // //     const img = document.createElement('img');
// // //     img.src = `img/img-${e}.jpg`;

// // //     img.onload = function () {
// // //       div.insertAdjacentElement('beforeend', img);

// // //       wait(2).then(resp => {
// // //         img.style.display = 'none';
// // //       });

// // //       resolve(`Successfully loaded the image ${e}`);
// // //     };

// // //     img.onerror = function () {
// // //       reject(`Failed to load the image ${e}`);
// // //     };
// // //   });
// // // };

// // // async function loadImg() {
// // //   try {
// // //     const response1 = await createImg(1);
// // //     console.log(response1);
// // //     await wait(2);
// // //     const response2 = await createImg(2);
// // //     console.log(response2);
// // //     await wait(2);
// // //     const response3 = await createImg(3);
// // //     console.log(response3);
// // //     await wait(2);
// // //   } catch (err) {
// // //     console.error(err);
// // //   }
// // // }

// // // loadImg();

// // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // //
// // //
// // //
// // //
// // // async / await function()

// // // const getPosition = function () {
// // //   return new Promise(function (resolve, reject) {
// // //     navigator.geolocation.getCurrentPosition(resolve, reject);
// // //   });
// // // };

// // // const whereAmI = async function () {
// // //   try {
// // //     // first
// // //     const pos = await getPosition();
// // //     console.log(pos);
// // //     const { latitude: latiii, longitude: lng } = pos.coords;

// // //     console.log(lat, lng);

// // //     //
// // //     //
// // //     const getLL = await fetch(
// // //       `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&apiKey=c0eda9345c814f7cb970c084aad7478c`,
// // //       requestOptions
// // //     );
// // //     const data1 = await getLL.json();

// // //     console.log(data1);

// // //     //
// // //     //   second
// // //     const res = await fetch(
// // //       `https://restcountries.com/v3.1/name/${data1.country}?fullText=true`
// // //     );

// // //     const data2 = await res.json();
// // //     console.log(data2);
// // //     //   renderHtml(data2[0]);
// // //   } catch (err) {
// // //     console.error(err);
// // //     renderError(`Something went wrong! , (${err.message})`);
// // //   }
// // // };

// // // whereAmI();

// // // btn.addEventListener('click', function () {
// // //   //   console.log(inputCountry.value);
// // //   whereAmI(inputCountry.value);
// // // });

// // // console.log('First');

// // const getPosition = function () {
// //   return new Promise(function (resolve, reject) {
// //     navigator.geolocation.getCurrentPosition(resolve, reject);
// //   });
// // };

// // // fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(res => console.log(res))

// // const whereAmI = async function () {
// //   try {
// //     // Geolocation
// //     const pos = await getPosition();
// //     const { latitude: lat, longitude: lng } = pos.coords;

// //     // Reverse geocoding
// //     const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
// //     // if (resGeo.altgeocode === 'Throttled! See geocode.xyz/pricing')
// //     //   throw new Error('Problem getting location data');

// //     const dataGeo = await resGeo.json();
// //     console.log(dataGeo);

// //     // Country data
// //     const res = await fetch(`https://restcountries.eu/rest/v2/name/${country}`);

// //     // FIX:
// //     if (!res.ok) throw new Error('Problem getting country');

// //     const data = await res.json();
// //     console.log(data);
// //     renderCountry(data[0]);
// //   } catch (err) {
// //     console.error(`${err} 💥`);
// //     renderError(`💥 ${err.message}`);
// //   }
// // };
// // whereAmI();
// // whereAmI();
// // whereAmI();
// // console.log('FIRST');

// // // try {
// // //   let y = 1;
// // //   const x = 2;
// // //   y = 3;
// // // } catch (err) {
// // //   alert(err.message);
// // // }

// // // whereAmI()
// // //   .then(city => console.log(`2: ${city}`))
// // //   .catch(err => console.error(`2: ${err.message} 💥`))
// // //   .finally(() => console.log('3: Finished getting location'));

// // (async function () {
// //   try {
// //     const data1 = await whereAmI();
// //     console.log(data1.city);
// //   } catch (err) {
// //     console.error(err.message);
// //   }

// //   console.log('3');
// // })();

// // Runnging asynch in paralel

// //
// //
// //
// // Running Promises in Parallel
// //
// //

// const getJSON = function (url, error = 'Something went wrong') {
//   return fetch(url).then(resp => {
//     if (!resp.ok) throw new Error(`${resp.masage}`);
//     return resp.json();
//   });
// };

// //
// //
// //
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Race, allSelect , any , All

// // All - если один из поданых в массиве фетч будет отелонен то все остальные будут тоже откланены

// // const get3Country = async function (c1, c2, c3) {
// //   try {
// //     // Get data from API

// //     const data = await Promise.all([
// //       getJson([`https://restcountries.com/v3.1/name/${c1}?fullText=true`]),
// //       getJson([`https://restcountries.com/v3.1/name/${c2}?fullText=true`]),
// //       getJson([`https://restcountries.com/v3.1/name/${c3}?fullText=true`]),
// //     ]);

// //     console.log(data.map(d => d[0].capital));
// //   } catch (err) {
// //     console.error(err);
// //   }
// // };

// // get3Country('Portugal', 'Poland', 'germany');
// //
// // Promise.race() - возврощает первый промис который ббыстрее все загрузился
// //
// // (async function () {
// //   const res = await Promise.race([
// //     getJSON(`https://restcountries.com/v3.1/name/Ukraine?fullText=true`),
// //     getJSON(`https://restcountries.com/v3.1/name/Poland?fullText=true`),
// //     getJSON(`https://restcountries.com/v3.1/name/Canada?fullText=true`),
// //   ]);

// //   console.log(res[0]);
// // })();

// //
// // это очень полезно
// // можно использовать для того чтобы исбежать очень долгой загрусски если интернет соединение слижком слабое
// //

// const timeout = function (sec) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error('Request take too long'));
//     }, sec);
//   });
// };

// // Promise.race([
// //   getJSON(`https://restcountries.com/v3.1/name/Canada?fullText=true`),
// //   timeout(1000000),
// // ])
// //   .then(res => console.log(res))
// //   .catch(err => console.error(err));

// const letsRace = async () => {
//   try {
//     const race = await Promise.race([
//       getJSON(`https://restcountries.com/v3.1/name/Canada?fullText=true`),
//       timeout(1),
//     ]);
//     console.log(race);
//   } catch (err) {
//     console.error(err);
//   }
// };

// //
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   all() - принемает и отдает масив с данными (Но если один будет откланен мы просто получем ошибку)

// Promise.all([
//   Promise.resolve('Success'),
//   Promise.resolve('Success'),
//   Promise.resolve('Error'),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.erroe(err));

// // Gолучаем в консоли
// //
// // Uncaught (in promise) Error
// //

// //
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   allSettle() - как и all принемает массив с фетч но додидаеться ответа от всех фетч чтоб выдать результат
// //

// Promise.allSettled([
//   Promise.resolve('Success'),
//   Promise.resolve('Success'),
//   Promise.reject('Error'),
// ]).then(res => console.log(res));

// // Gолучаем в консоль массив с тремя ответами не смотря на то что один был с ощибкой
// //
// // (3) [{…}, {…}, {…}]
// // 0 :  {status: 'fulfilled', value: 'Success'}
// // 1 :  {status: 'fulfilled', value: 'Success'}
// // 2 :  {status: 'rejected', reason: 'Error'}

// //
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  any()

// Promise.any([
//   Promise.resolve('Success'),
//   Promise.resolve('Success'),
//   Promise.reject('Error'),
// ]).then(res => console.log(res));
// //

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// challenge 3 (filan one)

const wait = function (sec) {
  return new Promise(res => setTimeout(res, sec * 1000));
};

const createImg = function (e) {
  return new Promise(function (resolve, reject) {
    const div = document.querySelector('.images');
    const img = document.createElement('img');
    img.src = `img/img-${e}.jpg`;

    img.onload = function () {
      div.insertAdjacentElement('beforeend', img);

      wait(2).then(resp => {
        img.classList.add('parallel');
      });

      resolve(`Successfully loaded the image ${e}`);
    };

    img.onerror = function () {
      reject(`Failed to load the image ${e}`);
    };
  });
};

async function loadImg() {
  try {
    const load1 = await createImg(1);
    await wait(3);
    const load2 = await createImg(2);
    await wait(3);
    const load3 = await createImg(3);
    await wait(3);
  } catch (err) {
    console.error(err);
  }
}

loadImg();

// const arr = ['img/img-1.jpg', 'img/img-2.jpg', 'img/img- 3.jpg'];

// async function loadArr() {
//   try {
//     const promises = arr.map((imgPath, index) => createImg(index + 1));

//     promises.forEach(img => img.classList.add('parallel'));
//     console.log(prom);
//   } catch (err) {
//     console.log(err);
//   }
// }

// loadArr();
