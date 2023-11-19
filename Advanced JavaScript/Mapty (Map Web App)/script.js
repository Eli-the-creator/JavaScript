'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');

// Fix scop
let map, mapEvent;

///////////////////////////////////////
/////////////////////////////////////// Workout Class
//
class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  clicks = 0;

  constructor(coords, distance, duration) {
    this.coords = coords; //[lat , lgt]
    this.distance = distance; //in km
    this.duration = duration; //in min
  }

  _setDiscription() {
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    this.discription = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()} `;
  }
}

///////////////////////////////////////
/////////////////////////////////////// Running (Child Workout)
//
class Running extends Workout {
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcePace();
    this._setDiscription();
  }

  calcePace() {
    // in min
    this.pace = this.distance / this.duration;
    return this.pace;
  }
}

///////////////////////////////////////
/////////////////////////////////////// Cycling (Child Workout)
//
class Cycling extends Workout {
  type = 'cycling';
  constructor(coords, distance, duration, elevation) {
    super(coords, distance, duration);

    this.elevation = elevation;
    this.calceSpeed();
    this._setDiscription();
  }

  calceSpeed() {
    // in min
    this.speed = this.distance / (this.duration / 60);
    return Number(this.speed);
  }
}

// Test Object
// const run1 = new Running([57, -7], 5.2, 24, 178);
// const cyc1 = new Cycling([57, -7], 5.2, 24, 178);

// console.log(run1, cyc1);

///////////////////////////////////////
/////////////////////////////////////// App Class
//
const inputType = document.querySelector('.form__input--type');
const containerWorkouts = document.querySelector('.workouts');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class Apps {
  #map;
  #mapZoomLevel = 14;
  #mapEvent;
  #workoutsDate = [];

  constructor() {
    // Get User Position
    //
    // construtctor function well be call after the page is load
    this._getPosition();

    // get Local Storege Date

    // Event Hendler
    //
    // this - inside of addEvent will by bind to the DOM element
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField.bind(this));
    containerWorkouts.addEventListener('click', this._moveToPopUp.bind(this));
  }

  _getPosition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('We need youre GIO to make it work');
        }
      );
  }

  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    //
    const coords = [latitude, longitude];

    console.log(coords);
    //

    console.log(this);
    this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

    // Map
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    // Handling click on amp
    this.#map.on('click', this._showForm.bind(this));

    // render Data from the local storage
    this._getLocalStorage();
  }

  _showForm(mapE) {
    // console.log(this.#mapEvent);
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDuration.focus();
  }

  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    e.preventDefault();

    // Take data from input
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;

    let workout;

    const validInput = (...input) => input.every(inp => Number.isFinite(inp));

    // If type cycki , create a cycki object
    if (type === 'running') {
      const cadence = +inputCadence.value;
      // Validation input value
      if (
        !validInput(distance, duration, cadence) ||
        !validInput(distance, duration, cadence) > 0
      )
        // !Number.isFinite(distance) ||
        // !Number.isFinite(duration) ||
        // !Number.isFinite(cadence)

        return alert('Wrong input (use only number!)');

      // create new objcet
      workout = new Running([lat, lng], distance, duration, cadence);
    }

    // If type running , create a running object
    if (type === 'cycling') {
      const elevation = +inputElevation.value;
      if (
        !validInput(distance, duration, elevation) ||
        !validInput(distance, duration) > 0
      )
        return alert('Wrong input (use only number!)');

      // create new object
      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    // Add the new Object to the array
    this.#workoutsDate.push(workout);
    console.log(workout);

    // Render it on the marker
    this._renderWorkoutMarker(workout);

    // Render new workout on a list
    this._renderWorkoutList(workout);

    // Hide/Clear input fills
    this._hideFills();

    // set Local Storeg
    this._setLocalStorage();
  }

  //   Hide Fills
  _hideFills() {
    inputCadence.value =
      inputDistance.value =
      inputDuration.value =
      inputElevation.value =
        '';

    form.style.display = 'none';
    form.classList.add('hidden');

    setTimeout(() => (form.style.display = 'grid'), 1000);
  }

  //
  // Render new workout on a list
  _renderWorkoutMarker(workout) {
    const newLocal = this;
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: true,
          closeOnClick: true,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `${workout.discription} ${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'}`
      )
      .openPopup();
  }

  // Generate the first part of div
  _renderWorkoutList(workout) {
    let html = `      
    <li class="workout workout--${workout.type}" data-id="${workout.id}">
       <h2 class="workout__title">${workout.discription}</h2>
       <div class="workout__details">
         <span class="workout__icon">${
           workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
         }</span>
         <span class="workout__value">${workout.distance}</span>
         <span class="workout__unit">km</span>
       </div>
       <div class="workout__details">
         <span class="workout__icon">⏱</span>
         <span class="workout__value">${workout.duration}</span>
         <span class="workout__unit">min</span>
       </div>`;

    // Generate the second part of div
    if (workout.type === 'running')
      html += `          
        <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${workout.pace}</span>
          <span class="workout__unit">min/km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">🦶🏼</span>
          <span class="workout__value">${workout.cadence}</span>
          <span class="workout__unit">spm</span>
        </div>
      </li>`;

    if (workout.type === 'cycling')
      html += `
         <div class="workout__details">
           <span class="workout__icon">⚡️</span>
           <span class="workout__value">${workout.speed}</span>
           <span class="workout__unit">km/h</span>
         </div>
         <div class="workout__details">
           <span class="workout__icon">⛰</span>
           <span class="workout__value">${workout.elevation}</span>
           <span class="workout__unit">m</span>
         </div>
        </li>`;

    // Add html on a page
    form.insertAdjacentHTML('afterend', html);
  }

  _moveToPopUp(e) {
    const clickOnEl = e.target.closest('.workout');
    if (!clickOnEl) return;
    // console.log(clickOnEl);

    const workEl = this.#workoutsDate.find(
      work => work.id === clickOnEl.dataset.id
    );

    workEl.clicks++;
    console.log(workEl.clicks);

    this.#map.setView(workEl.coords, this.#mapZoomLevel, {
      animate: true,
      pan: {
        duration: 1,
      },
    });
  }

  //set a localStorage
  _setLocalStorage() {
    // Local Storage  -  это браузерный API который сохроняет обьекты ('keyName:' 'value')
    // его лучще не использовать НО если и использовать то только для небольших вещей
    localStorage.setItem('workout', JSON.stringify(this.#workoutsDate));
  }

  //get the localStorage Date back After reload
  _getLocalStorage() {
    const localStorageData = JSON.parse(
      localStorage.getItem('workout', this.#workoutsDate)
    );

    if (!localStorageData) return;
    console.log(localStorageData);

    this.#workoutsDate = localStorageData;

    localStorageData.forEach(work => {
      this._renderWorkoutList(work);
      this._renderWorkoutMarker(work);

      //   После того как мы отправили нащи данные в Local Store и изменили вид нащего обьекта в стоку, он потерял прототип
      //   всегда поле работы с localStore возвращай PROTOTYPE обьекта к его родному прототипу
      work.__proto__ = Workout.prototype;
    });
  }

  reset() {
    localStorage.removeItem('workout');
    location.reload();
  }
}

const app = new Apps();
// app._getPosition();

// Geolocation API

// Marker on map after submit
