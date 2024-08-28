import { Navigate } from "react-router-dom"
import api from "../api"
import { useEffect, useState } from "react"
import { CircularProgress } from "@mui/material"
import { ACCESS_TOKEN,REFRESH_TOKEN } from "../constants"
import { jwtDecode } from "jwt-decode"


export const ProtectedRoute = ({children}: {children: React.FC | any}) => {
    const [authorized,setAuthorized] = useState<boolean | null>(null)

    useEffect(()=> {
        auth().catch(() => setAuthorized(false))
    },[])

    const refreshToken = async () => {
        const refresh = localStorage.getItem(REFRESH_TOKEN)
        try {
            const resp = await api.post(`users/token/refresh/`,{refresh})

            if (resp.status === 200) {
                localStorage.setItem(ACCESS_TOKEN,resp.data.access)
                setAuthorized(true)
            } else {
                setAuthorized(false)
            }
        } catch (err) {
            console.log('Error trying refresh token',err)
            setAuthorized(false)
        }
    }

    const auth = async () => {
        const token = localStorage.getItem(ACCESS_TOKEN)

        if (!token) {
            setAuthorized(false)
            return 
        }
        
        const decoded = jwtDecode(token)
        const expTime = Number(decoded.exp)
        const time = Date.now() / 1000
        console.log(expTime,time)
        if (expTime < time) {
            await refreshToken()
        } else {
            setAuthorized(true)
        }
    }

    if (authorized === null) {
        return <CircularProgress />
    }
    return authorized ? children : <Navigate to='/sign-in' />
}