import { host } from "../const"

export const login = async (username, password) => {
    const response = await fetch(`${host}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    const data = await response.json()
    localStorage.setItem('token', data.access)
    return data 
}