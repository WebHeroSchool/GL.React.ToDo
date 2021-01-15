import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List'
import Item from '../Item/Item'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.dark,
    },
}));

export default function ItemList({ items }) {
    const classes = useStyles();

    return (
        <List dense className={classes.root}>
            {items.map(item => (
                <Item key={item.id} value={item.value} isDone={item.isDone} />
            ))};
        </List>
    );
};