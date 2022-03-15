import axios from 'axios'

export default class CityServise {
    static async getAll(city) {
        try {
            const url = 'https://api.openweathermap.org/geo/1.0/direct?q=' + city + '&limit=5&appid=7ed1905ef8be386576f35bc4199aad76'
            
            const response = await axios.get(url).then((repos) => {
                return repos
              })
            if (response.status == 200 && response.data.length !== 0) {
                return response.data
            } else {
                throw new SyntaxError('Такого города не найдено!')
            }
        } catch (e) {
            return 404
        }
    }
}
