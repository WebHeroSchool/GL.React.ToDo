import React from 'react';
import { ListItem, ListItemIcon, ListItemText, Checkbox, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import styles from './Item.module.css';
import classnames from 'classnames';

export default function Item({ id, value, isDone }) {

    return (
        <div>
            <ListItem button>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={isDone}
                    />
                </ListItemIcon>
                <ListItemText className={
                    classnames({
                        [styles.todo__item]: true,
                        [styles.todo__item_done]: isDone
                    })
                } id={id} primary={value} />
                <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                        <DeleteIcon className={styles.item__delete} />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        </div>
    );
};