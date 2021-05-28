import React from 'react';
import './BandDetail.scss';

const BandDetail = ({ item }) => {

    return (
        <div className='band-detail-card'> 
            <img src={item.pictureUrl} width='100' alt={`Picture of the members of ${item.title}`}/>
            <div className='bio'>
            <h5>{item.title} </h5>
            <p>{item.bio}</p>
            </div>
        </div>
    );
}

export default BandDetail;