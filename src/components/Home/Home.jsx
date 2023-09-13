/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './Home.css';


const Home = () => {

    const [allActors, setAllActors] = useState([]);


    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data =>setAllActors(data))
    }, []);

    const handleSelectActor = () => {
        console.log('Hello');
    }

    console.log(allActors);

    return (
        <div className='container'>
            <div className="home-container">
                <div className="card-container">
                    { allActors.map((actor) => (
                        <div key={actor.id} className="card">
                        <div className="card-img">
                            <img src={actor.image} alt="" className="photo" />
                        </div>
                        <h2>{actor.name}</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, facilis.</p>
                        <div className="info">
                            <p>Salary: {actor.salary}$</p>
                            <p>{actor.role}</p>
                        </div>
                        <button onClick={handleSelectActor} className='card-btn'>Select</button>
                    </div>
                    ))
                    }
                </div>
                <div className="cart">
                    <h2>This is cart</h2>
                </div>

            </div>
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;