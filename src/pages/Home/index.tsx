import { useEffect, useState } from 'react'
import UserComponent from '../../components/UserComponent'
import style from './style.module.css'
import { userProps } from '../../services/Types'
import { getUsers } from '../../services/getUsers'

export default function Home(){

    const [users, setUsers] = useState<userProps[]>([])

    useEffect(()=>{
        (async()=>{
            const usersResponse: userProps[] | any = await getUsers()
            setUsers(usersResponse.data)
        })()
    },[])

    return(
        <main className={style.container}>
            {users.length != 0 ? (users.map(user => (
                <UserComponent avatar={user.avatar_url} displayName={user.login} key={user.id}/>
            ))):(<div>Carregando</div>)}
        </main>
    )
}