import React from 'react';
import PropTypes from 'prop-types';

const BurgerIngredients: React.FC = () => {
    return (
        <>
            Burger Ingredients
        </>
    )
}

BurgerIngredients.propTypes = {
    label: PropTypes.string,
};

export default BurgerIngredients;