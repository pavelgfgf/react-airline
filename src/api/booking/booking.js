import { host } from "../const"

export const booking = async (passengers, flightFrom, flightBack) => {
    const flightFromData = { id: flightFrom.id, date: flightFrom.from.date }
    const flightBackData = flightBack ? { id: flightBack.id, date: flightBack.from.date } : {}

    const payload = flightBack ? {
        passengers, flightFrom: flightFromData, flightBack: flightBackData
    } :  {
        passengers, flightFrom: flightFromData
    };

    
    const token = localStorage.getItem('token')
    const response = await fetch(`${host}/booking`, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }, 
        body: JSON.stringify(payload),
    }) 
    const data = await response.json();
    return data;
}

export const getbookingDetail = async (code) => {
    const token = localStorage.getItem('token')
    const response = await fetch(`${host}/booking/${code}/`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }, 
    }) 
    const data = await response.json();
    return data;
}