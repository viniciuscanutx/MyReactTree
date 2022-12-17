import React from 'react';
import photo from '../../../src/img/alt.jpg';
export function Home(){
    const link = [
        {
            img: '',
            title: 'GitHub',
            description: '',

        }
    ]
    return (
    <div className='container d-flex p-4 align-items-center'>
        <img id ='figma' src={photo} alt="touro" />
        <div>
            <h4 id = 'close'>Vinicius Canuto</h4>
            <a>@viniciuscanutz</a>
            <p>Front-End Developer and Designer Junior</p>
        </div>
    </div>

    )
}