import React from 'react';
import List from '@material-ui/core/List'
import Item from '../Item/Item'

export default function ItemList({ items, onClickDone }) {
    return (
        <List dense>
            {items.map(item => (
                <Item key={item.id} id={item.id} value={item.value} isDone={item.isDone} onClickDone={onClickDone} />
            ))};
        </List>
    );
};