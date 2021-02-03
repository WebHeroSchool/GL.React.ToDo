import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import About from '../About/About';
import Contacts from '../Contacts/Contacts';
import Todo from '../Todo/Todo';
import MenuItem from '@material-ui/core/MenuItem'
import styles from "./App.module.css";

function App() {
  return (
    <Router basename='/GL.React.ToDo'>
      <div className={styles.wrap}>
        <div>
          <div className={styles.menu}>
            <Link to='/' className={styles.menu__link}>
              <MenuItem className={styles.link__text}>
                Обо мне
              </MenuItem>
            </Link>
            <Link to='/todo' className={styles.menu__link}>
              <MenuItem className={styles.link__text}>
                Мои дела
              </MenuItem>
            </Link>
            <Link to='/contacts' className={styles.menu__link}>
              <MenuItem className={styles.link__text}>
                Контакты
              </MenuItem>
            </Link>
          </div>
        </div>

        <div className={styles.element}>
          <Route path='/' exact component={About} />
          <Route path='/todo' component={Todo} />
          <Route path='/contacts' component={Contacts} />
        </div>
      </div>
    </Router >
  );
};

export default App;