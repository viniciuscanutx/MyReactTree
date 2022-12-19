import React from 'react';
import github from '../../img/GitHub.png';
import youtube from '../../img/Youtube.png';
import behance from '../../img/Behance.png';
import photo from '../../../src/img/alt.jpg';
import nuvem from '../../img/nuvem.png';
import {Card} from '../../Components/Card';
import './styles2.css';

export function Home(){
    const link = [
        {
            img: github,
            title: 'GitHub',
            description: 'Meu repositorio de programas.',
            url: '',

        },    
        {
            img: behance,
            title: 'Behance',
            description: 'Meu perfil do Behance.',
            url: '',

        },
    ]
    return (
        <>
    <div className='container d-flex p-5 lign-items-center'>
        <img id ='figma' src={photo} alt="touro" />
        <div>
            <h4 id = 'close'>Vinicius Canuto</h4>
            <a id = 'close2'>@viniciuscanutz</a>
            <p id = 'close3'>Front-End Developer</p>
        </div>
    </div>
    <div className="container p-4 col-12 center m-auto">
        {link.map((link) => {
          return <Card links={link} />;
        })}
      </div>
      <img id = 'nuvem1' src={nuvem} alt="" />
    </>
    
    )
}