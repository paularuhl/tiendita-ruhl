import React, { useState, useEffect } from 'react';
import MockAboutRuhl from '../../mockAboutRuhl';
import './AboutRuhl.scss';
import spinnerGif from '../../img/spinner.gif';
import { Icon } from '@iconify/react';
import spotifyIcon from '@iconify-icons/fa-brands/spotify';
import youtubeFilled from '@iconify-icons/ant-design/youtube-filled';
import instagramFill from '@iconify-icons/akar-icons/instagram-fill';
import bxlInstagramAlt from '@iconify-icons/bx/bxl-instagram-alt';

const getItem = () => new Promise(
    (result, reject) => setTimeout(() => {
        return result(MockAboutRuhl);
    }, 2000)

);
const AboutRuhl = () => {
    const [item, setItem] = useState([]);
    const [spinner, setSpinner] = useState([false]);

    useEffect(() => {
        setSpinner(true);
        getItem().then((result) => {
            setItem(result);
            setSpinner(false);
        });
    }, []);


    return (
        spinner ? <img src={spinnerGif} /> : <div className='about-ruhl-card'>
            <img src={item.pictureUrl} width='100' alt={`Picture of the members of ${item.title}`} />
            <div className='bio'>
                <h5>{item.title} </h5>
                <p>{item.bio}</p>
                <p>
                    <a href={item.urls.spotify}>
                    <Icon icon={spotifyIcon} />
                    &nbsp; Spotify
                    </a>
                    <br/>
                    <a href={item.urls.youtube}>
                    <Icon icon={youtubeFilled} />
                    &nbsp; Youtube 
                    </a>
                    <br/>
                    <a href={item.urls.instagram}>
                    <Icon icon={instagramFill} />
                    &nbsp; Instagram
                    </a>
                    <br/>
                    <br/>
                    <br/>
                    <a href={item.urls.phInstagram}>
                    <Icon icon={bxlInstagramAlt} />
                    &nbsp; Pictures by Macarena Bis
                    </a>
                </p>
            </div>
        </div>
    );
}

export default AboutRuhl;