import { host } from "../const"


export const getFlights = async (searchFrom, searchTo, date) => {
    const token = localStorage.getItem('token')
    const response = await fetch(`${host}/flights?fromi=${searchFrom}&to=${searchTo}&date=${date} `, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    })
    const data = await response.json()
    return data
} 

export const getFlight = async () => {
    const token = localStorage.getItem('token')
    const response = await fetch(`${host}/flights/7`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    const data = await response.json()
    return data 
}