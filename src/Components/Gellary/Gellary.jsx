import React from 'react';
import './style.css';

const imgs = [
    {
        id: 1,
        url: 'https://media.istockphoto.com/id/1382384282/photo/bangalore-or-bengaluru.jpg?s=612x612&w=0&k=20&c=6pxwL3JxNV2B_NZSLMZLhrSLqAbyCPlGuSZYKImpjKQ='
    },
    {
        id: 2,
        url: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D'
    },
    {
        id: 3,
        url: 'https://media.gettyimages.com/id/1382384512/photo/bangalore-or-bengaluru.jpg?s=612x612&w=gi&k=20&c=YeV-07x82Yx50ekTh99C4jcajCegMunBusdvIsEbW9c='
    },
    {
        id: 4,
        url: 'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8='
    },
    {
        id: 5,
        url: 'https://t3.ftcdn.net/jpg/04/36/67/54/360_F_436675446_jGWzkVDah3b6ONZxhhN13s6I4iFnjLGJ.jpg'
    },
    {
        id: 6,
        url: 'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
        id: 7,
        url: 'https://img.freepik.com/free-photo/digital-painting-mountain-with-colorful-tree-foreground_1340-25699.jpg'
    },
    {
        id: 8,
        url: 'https://images.pexels.com/photos/739987/pexels-photo-739987.jpeg?cs=srgb&dl=pexels-vivek-chugh-739987.jpg&fm=jpg'
    },
    {
        id: 9,
        url: 'https://t3.ftcdn.net/jpg/04/86/28/58/360_F_486285886_6gNLgFgckusuTuDPtSMwSrTu9hualPMU.jpg'
    },
]

const Gellary = () => {

    return (
        <div className='container'>
            {imgs.map(item => (
                <img src={item.url} key={item.id} alt="images" />
            ))}
        </div>
    );
}

export default Gellary;
