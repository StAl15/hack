import "./Profile.css"
import React from 'react'
import { Button } from "@mui/material"

export default function Profile() {
    return (
        <div className="profile_content">
            <div className="main_info">
                <img src="https://fuzeservers.ru/wp-content/uploads/7/4/6/74667c5e05004bdf83f789f890554694.jpeg" alt="image">
                </img>
                <div>
                    <h4>Консультант</h4>
                    <h1>Маслов Евгений Анатольевич</h1>
                </div>

            </div>
            <div className="additive_info">
                <div className="right_side">
                    <div className="quantity_clients">
                        <h3>Количество клиентов</h3>
                        <h3>52</h3>
                    </div>
                    <div className="rating">
                        <h3>Среднаяя оценка</h3>
                        <h3>4.58</h3>
                    </div>
                    <div className="earning">
                        <h3>Средняя доходность</h3>
                        <h3>+20%</h3>
                    </div>

                </div>
                <div className="left_side">

                </div>
            </div>

            <Button style={{ marginTop: 15, backgroundColor: "#EEEFF2", color: "black" }} variant="contained" disableElevation>
                Выйти
            </Button>



        </div>

    )
}
