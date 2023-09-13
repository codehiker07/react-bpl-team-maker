/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import './Cart.css';

const Cart = ({selectedActors}) => {
    // console.log(props.selectedActors);
    console.log(selectedActors);

    return (
        <div>
            <h3>Total Actors: {selectedActors.length}</h3>
            {
                selectedActors.map((actor) => (
                    <li key={actor.id}>{actor.name}</li>
                ) )
            }
        </div>
    );
};

Cart.propTypes = {
    
};

export default Cart;