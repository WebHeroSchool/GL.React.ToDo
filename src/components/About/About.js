import React from 'react';
import { LinearProgress } from '@material-ui/core';
import { Octokit } from '@octokit/rest';
import styles from './About.module.css';
import Pagination from '@material-ui/lab/Pagination';
import classnames from 'classnames';

const octokit = new Octokit();

class About extends React.Component {

    state = {
        username: 'mrminax',
        isLoading: true,
        repoList: [],
        errorText: 'Возникла ошибка при получении данных',
        isError: false,
        userData: {},
        portfolio: [
            {
                id: 1,
                name: "Запрос информации о пользователе на github.com",
                link: "https://webheroschool.github.io/GL_JS_Fetch/"
            },
            {
                id: 2,
                name: "Игра BugGame",
                link: "https://webheroschool.github.io/GL.JS_BugGame/"
            }
        ],
        pageLimit: 4,
        totalPages: 0,
        currentPage: 0,
        repoPageList: []
    };

    componentDidMount() {
        octokit.repos.listForUser({
            username: this.state.username
        })
            .then(({ data }) => {
                this.setState({
                    repoList: data
                });

                this.setState({
                    repoPageList: this.state.repoList.slice(0, this.state.pageLimit),
                    totalPages: this.state.repoList.length > 0 ? Math.ceil(this.state.repoList.length / this.state.pageLimit) : 0
                });

            })
            .catch(() => {
                this.setState({
                    isError: true
                })
            })
            .finally(() => {
                this.setState({
                    isLoading: false
                })
            });

        octokit.users.getByUsername({
            username: this.state.username
        })
            .then((user) => {
                this.setState({
                    userData: user.data
                })
            })
            .catch(() => {
                this.setState({
                    isError: true
                })
            })
            .finally(() => {
                this.setState({
                    isLoading: false
                })
            });
    };

    handleChangePagination(event, value) {
        this.setState({
            currentPage: value,
            repoPageList: this.state.repoList.slice((this.state.pageLimit * value) - this.state.pageLimit, (this.state.pageLimit * value))
        });
    }

    render() {
        const { isLoading, userData, isError, errorText, portfolio, repoPageList, totalPages } = this.state;

        if (!isError)
            return (
                <div className={styles.wrapper}>
                    <div className={styles.userInfo}>
                        <h1 className={styles.userInfo__header}>
                            {userData.name} (<a href={userData.html_url} target="__blank">{userData.login}</a>)
                        </h1>
                        <p>
                            <img className={styles.avatar} src={userData.avatar_url} alt='Фото профиля' />
                            {userData.bio ? userData.bio : 'Информация о пользователе отсутствует...'}
                        </p>
                    </div>

                    <div className={styles.portfolio}>
                        <h2>
                            Портфолио:
                        </h2>
                        <ol className={styles.portfolioList}>
                            {portfolio.map(item => (
                                <li
                                    key={item.id}
                                    className={styles.portfolioItem}
                                >
                                    <a
                                        href={item.link}
                                        target="__blank"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ol>
                    </div>

                    <div className={styles.repoWrapper}>
                        <h2>{isLoading ? <LinearProgress /> : 'Мои репозитории:'}</h2>
                        {!isLoading && <ol className={styles.repoList}>
                            {repoPageList.map(item => (
                                <a key={item.id}
                                    className={styles.repoItemLink}
                                    href={item.html_url}
                                    target="__blank"
                                >
                                    <li className={styles.repoItem}>
                                        <div className={styles.repoDescription}>
                                            <span className={styles.repoName}>
                                                {item.name}
                                            </span>
                                            <span className={styles.repoBio}>
                                                {item.description}
                                            </span>
                                        </div>
                                        <div className={styles.repoInfo}>
                                            <span className={classnames({
                                                [styles.language]: true,
                                                [styles.html]: item.language === 'HTML',
                                                [styles.css]: item.language === 'CSS',
                                                [styles.js]: item.language === 'JavaScript'
                                            })}>
                                                {item.language}
                                            </span>
                                            <div className={styles.counts}>
                                                <span className={styles.star}>{item.stargazers_count}</span>
                                                <span className={styles.fork}>{item.forks_count}</span>
                                            </div>
                                            <span className={styles.date}>Обновлено: {new Date(item.updated_at).toLocaleString('en-US',
                                                {
                                                    year: 'numeric',
                                                    month: 'short',
                                                    day: 'numeric',
                                                })}
                                            </span>
                                        </div>
                                    </li>
                                </a>
                            ))}
                        </ol>}
                        <Pagination
                            className={styles.pagination}
                            count={totalPages}
                            variant="outlined"
                            color="secondary"
                            onChange={this.handleChangePagination.bind(this)}
                        />
                    </div>
                </div>
            )
        else
            return (
                <h2 className={styles.errorText}>
                    {errorText}...
                </h2>
            )
    };
};

export default About;