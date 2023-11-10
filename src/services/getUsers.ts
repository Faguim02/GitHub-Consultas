import { Api } from "./Api"
import { userProps } from "./Types"

export async function getUsers(){
    try {
        const response: userProps[] = await Api.get('/users')

        return response

    } catch (error) {
        return error
    }
}