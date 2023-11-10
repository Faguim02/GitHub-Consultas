import style from './style.module.css'

interface propsType{
    avatar: string,
    displayName: string,
}

export default function UserComponent({avatar, displayName}: propsType){
    return(
        <section className={style.container}>
            <img src={avatar} alt="avatar" />
            <a href={`/${displayName}`}>{displayName}</a>
        </section>
    )
}