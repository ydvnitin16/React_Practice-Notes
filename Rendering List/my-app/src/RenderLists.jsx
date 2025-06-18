import React from 'react';
import PropTypes from 'prop-types';
import checkPropTypes from "prop-types/checkPropTypes";

function RenderList({ category = 'Category', itemList=[] }) {
    checkPropTypes(RenderList.propTypes, { category, itemList }, 'prop', 'RenderList')
    return (
        <>
            <h1 className="list-category">{category}</h1>
            <ol className="list-items">
                {itemList.map((item) => (
                    <li key={item.id}>
                        {item.name}: <b>₹{item.price}</b>
                    </li>
                ))}
            </ol>
        </>
    );
}

RenderList.propTypes = {
    category: PropTypes.string,
    itemList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        price: PropTypes.number
    }))
}

export default RenderList;
