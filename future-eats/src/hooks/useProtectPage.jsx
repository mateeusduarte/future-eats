import { useEffect } from "react"
import { useHistory } from "react-router-dom"
import { goToLoginPage } from "../router/Coordinator"
import {token} from '../constants/token'

export const useProtectPage = () => {
    const history = useHistory()
    useEffect(()=> {
        
        if(!token){
            goToLoginPage(history)
        }
    }, [history])
}