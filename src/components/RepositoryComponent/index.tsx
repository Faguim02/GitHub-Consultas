import style from './style.module.css'
import { AiFillGithub } from 'react-icons/ai'

interface propsType{
    repositoryName: string,
    userName: string
}

export default function RepositoryComponent({repositoryName, userName}: propsType){
    return(
        <li className={style.container}>
            <AiFillGithub color={'white'} size={35}/>
            <a href={`https://github.com/${userName}/${repositoryName}`}>{repositoryName}</a>
        </li>
    )
}