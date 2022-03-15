import React from 'react'
import WeatherServise from '../API/WeatherServise'

const ListCity = ({ city, create }) => {
  async function fetchApi(e) {
    create(await WeatherServise.getAll(city[e].lat, city[e].lon))
  }
  return (
    <select onChange={e => {
      fetchApi(e.target.selectedIndex)
    }
    }>
      {city.map((city, index) =>

        <option key={index}>{city.name} {city.country}</option>

      )}
    </select>
  )
}


export default ListCity
