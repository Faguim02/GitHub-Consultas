import { useEffect, useState } from 'react'
import RepositoryComponent from '../../components/RepositoryComponent'
import style from './style.module.css'
import { aboutUserProps } from '../../services/Types'
import { getUser } from '../../services/getUser'
import { useParams } from 'react-router-dom'
import { getRepositoryUser } from '../../services/getRepositoryUser'

export default function UserView(){

    const [user, setUser] = useState<aboutUserProps>()
    const [repositorys, setRepositorys] = useState<any[]>([])

    const { name }: any = useParams()

    useEffect(()=>{
        (async()=>{
            const responseUser: aboutUserProps | any = await getUser(name)
            setUser(responseUser.data)

            const responseRepositorys: any = await getRepositoryUser(name)
            setRepositorys(responseRepositorys.data)
        })()
    },[])
    
    if(user){
        return(
            <main className={style.container}>
                <header>
                    <figure>
                        <img src={user.avatar_url} alt="avatar" />
                    </figure>

                    <div className={style.names}>
                        <h2>@{user.login}</h2>
                        <h1>{user.name}</h1>
                    </div>

                    <section className={style.abolt}>
                        <span>{user.followers} seguidores</span>
                        <span>{user.following} seguindo</span>
                    </section>

                    {user.bio && (
                        <p style={{color: '#c4c4c4ff'}}>{user.bio}</p>
                    )}

                </header>

                <section>
                    <div className={style.tagArea}>
                        <div className={style.tag}></div>
                        <span>Repositorios</span>
                        <div className={style.tag}></div>
                    </div>
                    <ul className={style.repositorys}>
                        {repositorys.map(repository => (
                            <RepositoryComponent key={repository.id} userName={user.login} repositoryName={repository.name}/>
                        ))}
                    </ul>
                </section>
            </main>
        )
    }
}