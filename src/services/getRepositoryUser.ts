import { Api } from "./Api"

export async function getRepositoryUser(name: string){
    try {
        
        const response = await Api.get(`/users/${name}/repos`)
        return response

    } catch (error) {
        return error
    }
}