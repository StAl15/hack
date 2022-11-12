import React from 'react';
import ConsultantCardItem from './ConsultantCardItem';

const ConsultantCard = (props) => {
    return (
        <div>
            {
                props.cards.map((card, index) => {
                    return <ConsultantCardItem card={card} key={card.id} index={index} name={card.name} quantity_clients={card.quantity_clients} rating={card.rating} earning={card.earning} img_src={card.img_src} />
                })
            }

        </div>
    );
}

export default ConsultantCard;
