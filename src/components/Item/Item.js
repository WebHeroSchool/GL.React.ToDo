import React from 'react';
import styles from './Item.module.css'
import classnames from 'classnames';

const Item = ({ value, isDone }) => (
    <span className={
        classnames({
            [styles.todo__item]: true,
            [styles.todo__item_done]: isDone
        })
    }>
        {value}
    </span>
);

export default Item;