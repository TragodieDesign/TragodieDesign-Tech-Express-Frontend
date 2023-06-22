
import Head from 'next/head'
import {useContext, useState} from 'react'
import AuthContext from '../../context/AuthContext'

export default function Login() {
    const [email, setEmail] =useState("")
    const {loginUser} =useContext(AuthContext)
    const handleSubmit =(event) =>{
        event.preventDefault()
        loginUser(email)
    }


    return(
        <div>
            <Head>
                <title>
                    Login

                </title>
                <meta 
                name='description' 
                content='Faça o login para poder comprar'/>
            </Head>
        <main>
        <h2>
            Login
            </h2>
            <form onSubmit={handleSubmit}>
                <input 
                type="email" 
                value={email} 
                onChange={(event) => setEmail(event.target.value)} 
                placeholder="Seu e-mail aqui"
                />
                <button type="submit">
                    Login
                </button>
            </form>
        </main>
        </div>
    )
}
