import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => 
{
    const [inputValue, setInputValue] = useState('');
    const handleInpuntChange = (event) =>
    {
        setInputValue(event.target.value);
    }
    /**
     * 
     * @param {Event} event 
     */
    const handleSubmit = (event) =>
    {
        event.preventDefault();
        if (inputValue.trim().length > 2)
        {
            setCategories((categories) => [inputValue, ...categories]);
            setInputValue('');
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input  
                type="text" 
                value={inputValue}
                onChange={handleInpuntChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;

