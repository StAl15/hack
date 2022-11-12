import "./Profile.css";
import React from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/slice/AuthSlice";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const profile = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(profile);



//   const handlesumbit = async () => {

//     try {
//       const userData = await axios.get(`https://hack.invest-open.ru/user/info?userId=${profile.id}`, bodyParameters)
//       dispatch(setCredentials(userData.data));
//       setUser("");
//       setPassword("");
//       navigate("/chat");
//     } catch (error) {
//       console.log(error);
//     }
//   };
  return (
    <div className="profile_content">
      <div className="main_info">
        <img
          src="https://images.squarespace-cdn.com/content/v1/52e90534e4b07f1315fbe6f4/1392046490216-8RCZF0ZQD1RH00P7QVRN/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/andy-horner-portrait-circle-blog.jpg"
          alt="image"
        ></img>
        <div>
          {profile.role && <h4>Консультант</h4>}
          <h1>Маслов Евгений Анатольевич</h1>
        </div>
      </div>
      <div className="additive_info">
        <div className="right_side">
          <div className="quantity_clients">
            <h3 className="label">Количество клиентов</h3>
            <h3 className="data">52</h3>
          </div>
          <div className="rating">
            <h3 className="label">Средняя оценка</h3>
            <h3 className="data">4.58</h3>
          </div>
          <div className="earning">
            <h3 className="label">Средняя доходность</h3>
            <h3 className="data">+20%</h3>
          </div>
        </div>
        <div className="left_side">
          <div className="round_rating">
            <h1>A +</h1>
            <h4>Индекс доверия</h4>
          </div>
        </div>
      </div>

      <Button
        onClick={() => {
          dispatch(logOut());
          navigate("/");
        }}
        size="large"
        style={{
          textTransform: "none",
          marginLeft: 50,
          marginTop: 25,
          backgroundColor: "#39B6EC",
        }}
        variant="contained"
        disableElevation
      >
        Выйти
      </Button>
    </div>
  );
}
