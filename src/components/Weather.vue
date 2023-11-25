<template>
  <div
    class="weather"
    :class="
      typeof weather?.main != 'undefined' && weather?.main.temp - 273.15 > 16
        ? 'warm'
        : ''
    ">
    <main>
      <div class="container">
        <div class="search-box">
          <input
            type="text"
            id="city"
            class="search-bar"
            placeholder="Search..."
            v-model="city"
            @keyup.enter="fetchData" />
          <button @click="fetchData" class="btn-search">
            <i class="fa fa-search fa-2x"></i>
          </button>
          <span v-if="store.error" class="error">
            You entered the city name incorrectly
          </span>
        </div>
        <div v-if="weather?.main" class="weather-container">
          <div class="weather-wrap">
            <div class="location-box">
              <div class="location">
                {{ weather?.name }}, {{ weather.sys.country }}
                <div class="date">
                  {{ dateBuilder() }}
                </div>
              </div>
            </div>
            <div class="weather-box">
              <p class="temp">
                {{ (weather?.main.temp - 273.15).toFixed(1) }}°c
              </p>
              <p class="weather">
                {{ weather?.weather[0].main }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { useWeatherStore } from "@/store";
import { computed, defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const city = ref("");
    const store = useWeatherStore();
    const weather = computed(() => store.weatherData);

    function fetchData() {
      store.getWeatherData(city.value);
    }

    function dateBuilder() {
      let standartDay = new Date();
      let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      let day = days[standartDay.getDay()];
      let date = standartDay.getDate();
      let month = months[standartDay.getMonth()];
      let year = standartDay.getFullYear();
      return `${day} ${date} ${month} ${year}`;
    }

    return {
      city,
      weather,
      store,
      fetchData,
      dateBuilder,
    };
  },
});
</script>

<style scoped>
.weather {
  background-image: url("../assets/cold-bg.jpg");
  background-size: cover;
  background-position: 25% 100%;
  transition: 0.4s;
}

.weather.warm {
  background-image: url("../assets/warm-bg.jpg");
}

.search-box {
  position: relative;
  width: 100%;
  margin-bottom: 80px;
}

.search-box .search-bar {
  display: block;
  width: 100%;
  padding: 15px;
  color: #202535;
  font-size: 20px;
  appearance: none;
  border: none;
  outline: none;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 0 16px 0 16px;
  transition: 0.4s;
}

.search-box .search-bar:focus {
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 16px 0 16px 0;
}

.btn-search {
  position: absolute;
  top: 12px;
  right: 12px;
  color: #465175;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.5s ease-in-out;
}

.btn-search:hover {
  color: #4760aeb8;
}

.error {
  position: absolute;
  bottom: -24px;
  left: 10px;
  font-weight: 600;
  font-size: 13px;
  color: #d93d3ddb;
}

.location-box .location {
  color: #fff;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
}

.location-box .date {
  color: #fff;
  font-size: 20px;
  font-weight: 300;
  text-align: center;
}

.weather-box {
  text-align: center;
}

.weather-box .temp {
  display: inline-block;
  padding: 10px 25px;
  color: #fff;
  font-size: 102px;
  font-weight: 900;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  margin: 30px 0;
  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}

.weather-box .weather {
  background: none;
  color: #fff;
  font-size: 48px;
  font-weight: 700;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}
</style>