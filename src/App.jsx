import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RInput from "./assets/components/Input/RInput.jsx";
import axios from "axios";
import {API_URL} from "./API_URL.js";


function App() {

    const [city, setCity] = useState('')
    const [data, setData] = useState('')


    const onChangeHandle = (e) => {
        setTimeout(() => {
            setCity(e.target.value)
        }, 1000)

    }

    useEffect(() => {
        const fetchData = async () => {
            if (city.length === 0) return
            const resp = await axios.get(`${API_URL}/find_city?city_name=${city}`, {
                headers: {
                    'ngrok-skip-browser-warning': 'true'
                }
            });
            setData(resp.data.cities)
        }
        fetchData()
    }, [city]);


    return (
        <div>
            <h1>Hello</h1>
            {city}
            {data ? data.map((city) => {
                return <p key={city.id}>
                    <span>Название города: {city.title}</span>
                    <ul>
                        {city.area ? <li>
                            {city.area}
                        </li> : ''}
                        {city.region ? <li>
                            {city.region}
                        </li> : ''}
                        {city.country ? <li>
                            {city.country}
                        </li> : ''}
                    </ul>
                </p>
            }) : <div>Результатов не найдено!</div>}
            <RInput placeholder={'meow'} onChange={onChangeHandle} label={'Введите город'}/>
        </div>
    )
}

export default App
