import React from 'react';
import List from '@material-ui/core/List'
import Item from '../Item/Item'

export default function ItemList({ items }) {
    return (
        <List dense>
            {items.map(item => (
                <Item key={item.id} value={item.value} isDone={item.isDone} />
            ))};
        </List>
    );
};