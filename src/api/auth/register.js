import { host } from "../const"
import { login } from "./login"

export const register = async (username, password) => {
    await fetch(`${host}/registration`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    }).then(() => {
        login(username, password)
    })

}