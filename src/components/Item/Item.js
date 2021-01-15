import React from 'react';
import { ListItem, ListItemIcon, ListItemText, Checkbox, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import styles from './Item.module.css';
import classnames from 'classnames';

export default function Item({ id, value, isDone }) {
    const [checked, setChecked] = React.useState([1]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <ListItem role={undefined} dense onClick={handleToggle(value)}
            className={
                classnames({
                    [styles.todo__item]: true,
                    [styles.todo__item_done]: isDone
                })
            }>
            <ListItemIcon>
                <Checkbox
                    edge="start"
                    checked={checked.indexOf(value) !== -1}
                />
            </ListItemIcon>
            <ListItemText id={id} primary={value} />
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                    <DeleteIcon color="secondary" />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
};