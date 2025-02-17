import { host } from "../const"


export const getFlights = async (searchParams) => {
    const token = localStorage.getItem('token')
    const response = await fetch(`${host}/flights?${searchParams}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    })
    const data = await response.json()
    return data
}
