import { host } from "../const"


export const getFlights = async (searchFrom, searchTo, date1, passengers) => {
    const token = localStorage.getItem('token')
    const response = await fetch(`${host}/flights?from=${searchFrom}&to=${searchTo}&date1=${date1}&passengers=${passengers} `, {
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