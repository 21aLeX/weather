import "@progress/kendo-theme-material/dist/all.css";
import "hammerjs";
import { useState, useEffect, useRef } from 'react';
import WeatherItem from './component/WeatherItem';
import WeatherServise from "./API/WeatherServise";
import ListCity from "./component/ListCity";
import CityServise from "./API/CityServise";

function App() {

  const [apiWeather, setApiWeather] = useState([])
  const [city, setCity] = useState([{
    name: 'Москва',
    country: 'RU',
    lat: 55,
    lon: 37
  }])

  const cityRef = useRef()
  useEffect(async () => {
    await fetchApi(city[0].lat, city[0].lon)
  }, [city[0].lat, city[0].lon])

  async function searchCity(e) {
    try {
      e.preventDefault()
      const response = await CityServise.getAll(cityRef.current.value)
      if (response !== 404) {
        setCity(response)
      }
      else {
        throw new SyntaxError('Такого города не найдено!')
      }
    } catch (e) {
      alert('Произошла ошибка ' + e)
    }
  }

  async function fetchApi(lat, lon) {
    try {
    const response = await WeatherServise.getAll(lat, lon)
    setApiWeather(response)
    } catch (e) {
      alert('Произошла ошибка' + e)
    }
  }
  async function createCity(indicatorsCity) {
    setApiWeather(indicatorsCity)
  }

  return (
    <div className="App">
      <form>
        <input
          ref={cityRef}
          placeholder="City"
        ></input>
        <ListCity city={city} create={createCity} />
        <button onClick={searchCity}>Search</button>
      </form>
      {apiWeather.map(indicators =>
        <WeatherItem indicators={indicators} key={indicators.id} />
      )}

    </div>
  );
}

export default App;
