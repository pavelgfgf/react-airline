import { host } from "../const"

export const booking = async (passengers) => {
    const token = localStorage.getItem('token')
    const response = await fetch(`${host}/booking`, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }, 
        body: JSON.stringify({ passengers, flight: 7})
    }) 
    const data = await response.json()
    return data
}