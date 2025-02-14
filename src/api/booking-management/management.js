import { host } from "../const"

export const getManagement = async () => {
    const token = localStorage.getItem('token')
    const response = await fetch(`${host}/booking/7`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    const data = await response.json()
    return data
}