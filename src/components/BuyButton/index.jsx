import { useRouter } from 'next/router'
import { loadStripe } from '@stripe/stripe-js'
import { API_URL, STRIPE_PK } from '../../Http/urls.js'
import styled from 'styled-components'
import styles from './styles'
import { useContext } from "react";
import AuthContext from "../../../context/AuthContext";

const stripePromise = loadStripe(STRIPE_PK)

export default function BuyButton ({ product }) {
    const { user, getToken } = useContext(AuthContext);

    const router = useRouter()

    const handleBuy = async (e) => {
        const stripe = await stripePromise
        const token = await getToken()
        console.log("handleBuy token", token)
        e.preventDefault()
        const res = await fetch(`${API_URL}/orders/`, {
                method: 'POST',
                body: JSON.stringify({product}),
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
        })
        const session = await res.json()
        console.log("session", session)

        const result = await stripe.redirectToCheckout({
            sessionId: "cs_test_123456 ",
        });
    }

    const redirectToLogin = async () => {
        router.push('/login')
    }

    return(
        <>
            {user &&
                <button  onClick={handleBuy}>BUY</button>
            }
            {!user &&
                <button  onClick={redirectToLogin}>Login to Buy</button>
            }
        </>
    )
}