import { defineStore } from "pinia";
import { getWeatherData } from "@/api";

export const useWeatherStore = defineStore({
  id: "weather",
  state: () => ({
    city: "",
    weatherData: null,
    error: null,
  }),
  actions: {
    async getWeatherData(city) {
      try {
        const response = await getWeatherData(city);
        this.weatherData = response.data;
        this.city = city;
        this.error = null;
      } catch (error) {
        this.error = error;
      }
    },
  },
});