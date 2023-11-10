import { Api } from "./Api";

export async function getUser(name: string){
    try {
        const response = await Api.get(`/users/${name}`)

        return response
    } catch (error) {
        return error
    }
}