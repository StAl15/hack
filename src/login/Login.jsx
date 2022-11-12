import React from "react";
import "./Login.css";
import { TextField, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setCredentials } from "../redux/slice/AuthSlice";

import axios from "axios";

// import ico_sign from "../media/ico_sign.svg"

const Login = () => {
  const userRef = React.useRef();
  const [user, setUser] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();


  const bodyParameters = {
    login: user,
    password: password,
  };


  const handlesumbit = async () => {

    try {
      const userData = await axios.post("https://hack.invest-open.ru/auth", bodyParameters)
      dispatch(setCredentials(userData.data));
      setUser("");
      setPassword("");
      navigate("/chat");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="login_content">
      <div className="login_left_side">
        <h2 className="title_signin">Вход</h2>

        <TextField
          ref={userRef}
          value={user}
          onChange={(e) => setUser(e.target.value)}
          fullWidth
          id="login_input"
          label="Логин"
          variant="outlined"
          style={{}}
        />

        <TextField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          id="password_input"
          label="Пароль"
          type="password"
          variant="outlined"
          style={{ marginTop: 15 }}
        />

        <Link to={'/notfound'}>Забыли пароль?</Link>

        <Button
          onClick={(e) => handlesumbit(e)}
          style={{ marginTop: 15, backgroundColor: "#39B6EC" }}
          variant="contained"
          disableElevation
        >
          Войти
        </Button>
        <p>Нет аккаунта? Создать бесплатно</p>
      </div>

      <div className="login_right_side"></div>
    </div>
  );
};

export default Login;
