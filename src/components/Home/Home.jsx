/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import Cart from '../Cart/Cart';
import './Home.css';


const Home = () => {

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data =>console.log(data))
    }, [])

    return (
        <div className='container'>
            <div className="card-container">
                <div className="card">
                    <div className="card-img">
                        <img src="https://i.ibb.co/Rvc67Cr/ar.jpg" alt="" className="photo" />
                    </div>
                    <h2>Motiur Rahman</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, facilis.</p>
                    <div className="info">
                        <p>Salary: 200$</p>
                        <p>Writer</p>
                    </div>
                    <button className='card-btn'>Select</button>
                </div>
            </div>
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;