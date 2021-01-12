import React from 'react';
import Item from '../Item/Item'

const ItemList = ({ items }) => (
    <ul>
        {items.map(item => (
            <li>
                <Item value={item} />
            </li>))}
    </ul>
);

export default ItemList;