import React from 'react';
import InputItem from '../InputItem/InputItem'
import ItemList from '../ItemList/ItemList'
import Footer from '../Footer/Footer'
import styles from "./App.module.css"

const todoItems = [
  {
    id: 1,
    value: 'Познать HTML/CSS',
    isDone: true
  },
  {
    id: 2,
    value: 'Понять JavaScript',
    isDone: true
  },
  {
    id: 3,
    value: 'Подружиться с React',
    isDone: false
  },
  {
    id: 4,
    value: 'Стать веб-разработчиком',
    isDone: false
  }
];

const App = () => (<div className={styles.todo}>
  <h1 className={styles.todo__title}>Список моих дел</h1>
  <InputItem />
  <ItemList items={todoItems} />
  <Footer count={todoItems.length} />
</div >
);

export default App;