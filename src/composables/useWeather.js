import { usewatherStore } from "@/stores/weatherStore";
import { getTemperatura } from "@/helpers/getWeather.js";

export const useWeather = async () => {
    const temperatura = await getTemperatura()
    const weatherStore = usewatherStore();
    weatherStore.temperatura = temperatura;
}

