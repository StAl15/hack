import React from "react";
import './Login.css';
import { TextField, Button } from "@mui/material"
// import ico_sign from "../media/ico_sign.svg"

const Login = () => {
    return (
        <div className="login_content">
            <div className="login_left_side">

                <h2 className="title_signin">Вход</h2>

                <TextField fullWidth id="login_input" label="Логин" variant="outlined" style={{}} />

                <TextField fullWidth id="password_input" label="Пароль" type="password" variant="outlined" style={{ marginTop: 15, }} />

                <a>Забыли пароль?</a>

                <Button style={{textTransform: 'none', marginTop: 15, backgroundColor: "#39B6EC", }} variant="contained" disableElevation>
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