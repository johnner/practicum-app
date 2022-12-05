import React from 'react';
import PropTypes from 'prop-types';

const BurgerConstructor: React.FC = () => {
    return (
        <>
            Burger Constructor
        </>
    )
}

//TODO: fix
BurgerConstructor.propTypes = {
    label: PropTypes.string,
};

export default BurgerConstructor;