import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import styles from "./Footer.module.css";
import classnames from 'classnames';

const Footer = ({ activeItemCount }) => (
    <div className={styles.footer}>
        <span className={
            classnames({
                [styles.footer__countActive]: true,
                [styles.footer__countActiveAllDone]: !activeItemCount
            })}>
            {activeItemCount ? `Осталось выполнить: ${activeItemCount}` : 'Все дела выполнены!'}
        </span>

        <div className={styles.footer__clearCompleted}>
            <Button size="small" startIcon={<DeleteIcon />}>
                Очистить завершенные
            </Button>
        </div>
    </div>
);

Footer.defaultProps = {
    activeItemCount: 0
};

export default Footer;