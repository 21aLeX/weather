import axios from 'axios'

export default class WeatherServise {
  static async getAll(lat, lon) {
    try {
      const url ='https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=7ed1905ef8be386576f35bc4199aad76'
      let response = await axios.get(url).then((repos) => {
        return repos
      })
      let t = []
      let h = []
      let p = []
      let date = []
      for (let i = 0; i < response.data.list.length; i++) {
        t.push(Math.round(response.data.list[i].main.temp - 273.15))
        h.push(response.data.list[i].main.humidity)
        p.push(response.data.list[i].main.pressure)
        date.push(response.data.list[i].dt_txt)
      }
      return [{ id: 1, temperature: t, humidity: h, pressure: p, date: date }]
    } catch (e) {
      alert(e.message)
    }
  }
}
