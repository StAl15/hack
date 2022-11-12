import React from 'react';
import ConsultantCard from '../components/ConcultantCard/ConsultantCard';
import './ListConsultant.css'

const ListConsultant = () => {
    let cards = [{
        'name': 'Маслов А.И.',
        'quantity_clients': 52,
        'rating': 4.58,
        'earning': '+20%',
        'img_src': 'https://www.vhv.rs/dpng/d/551-5511364_circle-profile-man-hd-png-download.png',
    },
    {
        'name': 'Кирин А.И.',
        'quantity_clients': 52,
        'rating': 4.58,
        'earning': '+20%',
        'img_src': 'https://pngset.com/images/circle-profile-picture-face-person-human-clothing-transparent-png-488441.png',
    },
    {
        'name': 'Шнюков А.И.',
        'quantity_clients': 52,
        'rating': 4.58,
        'earning': '+20%',
        'img_src': 'https://avatars.mds.yandex.net/i?id=d36979301ebc80156f88a6e76602df2a-4580514-images-thumbs&ref=rim&n=33&w=300&h=300',
    },
    

];
    return (
        <div className='content'>
            <div className='list_consultants'>
                {cards.length ? <ConsultantCard cards={cards} /> : <p>Увы, экспертов нет</p>}
            </div>
        </div>
    );
}

export default ListConsultant;
