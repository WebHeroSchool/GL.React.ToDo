import React from 'react';
import { ListItem, ListItemIcon, ListItemText, Checkbox, ListItemSecondaryAction } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import styles from './Item.module.css';
import classnames from 'classnames';

export default function Item({ id, value, isDone, onClickDone }) {

    return (
        <div className={styles.todo__item}>
            <ListItem button>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={isDone}
                        onClick={() => onClickDone(id)}
                    />
                </ListItemIcon>
                <ListItemText className={
                    classnames({
                        [styles.todo__itemText]: true,
                        [styles.todo__itemText_done]: isDone
                    })
                } id={id} primary={value} />
                <ListItemSecondaryAction>
                    <span className={styles.item__deleteButton}>
                        <DeleteIcon />
                    </span>
                </ListItemSecondaryAction>
            </ListItem>
        </div>
    );
};