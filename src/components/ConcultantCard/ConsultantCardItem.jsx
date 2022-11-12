import React from 'react';
import './ConsultantCard.css'

const ConsultantCardItem = (card, index, name, quantity_clients, rating, earning, img_src) => {
    return (
        <div className='content_card'>
            
            <div>
                <div className="round_rating_">
                    <h3>Индекс доверия</h3>
                    <h1>A +</h1>
                </div>
                <div className="quantity_clients">
                    <h3 className="label">Количество клиентов</h3>
                    <h3 className="data">{quantity_clients}</h3>
                </div>
                <div className="rating">
                    <h3 className="label">Средняя оценка</h3>
                    <h3 className="data">{rating}</h3>
                </div>
                <div className="earning">
                    <h3 className="label">Средняя доходность</h3>
                    <h3 className="data">{earning}</h3>
                </div>
            </div>


        </div>

    );
}

export default ConsultantCardItem;
