import React from 'react';
import { MailOutline as MailOutlineIcon, GitHub as GitHubIcon, Instagram } from '@material-ui/icons';
import styles from "./Contacts.module.css";

function Contacts() {
    return (
        <div className={styles.social}>
            <h1>
                Контакты
            </h1>
            <div className={styles.socialList}>
                <a className={styles.socialLink}
                    href="mailto: art.minax@gmail.com"
                    target="__blank"
                    rel='noopener noreferrer'
                >
                    <MailOutlineIcon
                        className={styles.socialIcon}
                        name='gmail'
                    />
                    <span className={styles.socialName}>
                        art.minax@gmail.com
                    </span>
                </a>
                <a className={styles.socialLink}
                    href="https://github.com/mrminax"
                    target="__blank"
                    rel='noopener noreferrer'
                >
                    <GitHubIcon
                        className={styles.socialIcon}
                        name='github'
                    />
                    <span className={styles.socialName}>
                        GitHub
                    </span>
                </a>
                <a className={styles.socialLink}
                    href="https://www.instagram.com/dev.minax/"
                    target="__blank"
                    rel='noopener noreferrer'
                >
                    <Instagram
                        className={styles.socialIcon}
                        name='instagram'
                    />
                    <span className={styles.socialName}>
                        Instagram
                    </span>
                </a>
            </div>
        </div>
    );
};

export default Contacts;