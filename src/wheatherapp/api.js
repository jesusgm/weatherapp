import config from "../config/config"
import {
    createClient
} from 'pexels';

export default {
    fetchWeatherData: (searchTerm, searchType = "q") => {
        return fetch(`//api.openweathermap.org/data/2.5/weather?${searchType}=${searchTerm}&appid=${config.API_KEY}&lang=${config.LANG}&units=${config.UNITS}`).then(res => res.json())
    },

    fetchPhotos: (searchTerm) => {
        const client = createClient(config.PXELS_API);
        const query = searchTerm;

        return client.photos.search({
            query,
            per_page: 10
        });
    }
}