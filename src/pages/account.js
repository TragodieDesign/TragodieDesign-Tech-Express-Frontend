import Head from 'next/head'
import {useContext, useState, useEffect} from 'react'
import AuthContext from '../../context/AuthContext'
import Link from 'next/link'
import { API_URL } from '../Http/urls.js'

const useOrders = (user, getToken) => {
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const fetchOrders = async () => {
            setLoading(true)
            if(user){
                try{
                    const token = await getToken()
                    const orderRes = await fetch(`${API_URL}/orders`, {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    })
                    const data = await orderRes.json()
                    setOrders(data)
                } catch(err){
                    setOrders([])
                }
            }
            setLoading(false)
        }

        fetchOrders()
    }, [user])



    return {orders, loading}
}

export default () => {

    const { user, logoutUser, getToken} = useContext(AuthContext)

    const { orders, loading } = useOrders(user, getToken)
    
    if(!user){
        return (
            <main>
                            <div>
                <p>Por Favor, logue-se ou cadastre-se para ver seus pedidos</p>
                <Link href="/login">Acessar</Link>
            </div>
            </main>
        )
    }

    return (
    <main>
            <div>
            <Head>
                <title>Sua conta</title>
                <meta name="description" content="Your orders will be shown here" />
            </Head>
            <h2>Sua Conta</h2>
            
            
            <h3>Seus pedidos</h3>
            {loading && <p>Carregando pedidos</p>}
            <div></div>
            <hr />
            <p>Logado como {user.email}</p>
            <p><a href="#" onClick={logoutUser}>Logout</a></p>
        </div>
    </main>
    )

}