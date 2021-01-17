import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import styles from "./Footer.module.css";

const Footer = ({ count }) => (
    <div className={styles.footer}>
        <span className={styles.footer__countActive}>
            Осталось выполнить: {count}
        </span>

        <div className={styles.footer__clearCompleted}>
            <Button size="small" startIcon={<DeleteIcon />}>
                Очистить завершенные
            </Button>
        </div>
    </div>
);

export default Footer;