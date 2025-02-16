import { host } from "../const"
import { login } from "./login"

export const register = async (firstName, lastName, documentNumber, phone, password) => {
    await fetch(`${host}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ firstName, lastName, documentNumber, phone, password })
    }).then(() => {
        login(phone, password)
    })

}