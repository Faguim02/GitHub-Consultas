import { Button, Input } from '@chakra-ui/react'
import style from './style.module.css'
import { AiFillGithub, AiOutlineSearch } from 'react-icons/ai'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header(){

    const path = location.pathname
    const navigate = useNavigate()

    const [search, setSearch] = useState<string>()

    function handleSearchUser(){
        navigate(`/${search}`)
    }

    return(
        <header className={style.container}>
            <a href="/">
                <AiFillGithub className={style.logoIcon} size={50}/>
            </a>

            {path.length == 1 && (
                <div className={style.inputGroup}>
                    <Input placeholder='pesquise pelo usuario' onChange={(e)=>setSearch(e.target.value)}/>
                    <Button onClick={handleSearchUser}>
                        <AiOutlineSearch/>
                    </Button>
                </div>
            )}
        </header>
    )
}