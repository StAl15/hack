import React from "react";
import './Login.css';
import { TextField, Button } from "@mui/material"
import {useNavigate} from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux'
import { setCredentials } from "../redux/slice/AuthSlice";
import { useLoginMutation } from "../redux/slice/AuthApiSlice";


// import ico_sign from "../media/ico_sign.svg"

const Login = () => {
    const userRef = React.useRef()
    const errRef = React.useRef()
    const [user, setUser] = React.useState('')
    const [pwd, setPwd] = React.useState('')
    const [errMsg, setErrMsg] = React.useState('')
    const navigate = useNavigate()

    const [login, {isLoading}] = useLoginMutation()
    const dispatch = useDispatch()

    React.useEffect(() => {
        
    }, [user, pwd]);

    const handlesumbit = async (e) => {
        e.preventDefault()

        try {
            const userData = await login({user, pwd}).unwrap()
            dispatch(setCredentials({...userData, user}))
            setUser('')
            setPwd('')
            navigate('chat')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="login_content">
            <div className="login_left_side">

                <h2 className="title_signin">Вход</h2>

                <TextField ref={userRef} value={user} onChange={(e)=> setUser(e.target.value)} fullWidth id="login_input" label="Логин" variant="outlined" style={{}} />

                <TextField  value={pwd} onChange={(e)=> setPwd(e.target.value)} fullWidth id="password_input" label="Пароль" type="password" variant="outlined" style={{ marginTop: 15, }} />

                <a>Забыли пароль?</a>

                <Button onClick={(e)=> handlesumbit(e)} style={{ marginTop: 15, backgroundColor: "#39B6EC", }} variant="contained" disableElevation>
                    Войти
                </Button>
                <p>Нет аккаунта? Создать бесплатно</p>

            </div>

            <div className="login_right_side">

            </div>

        </div>

    )

}

export default Login