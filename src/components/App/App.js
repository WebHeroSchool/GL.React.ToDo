import React from 'react';
import InputItem from '../InputItem/InputItem'
import ItemList from '../ItemList/ItemList'
import Footer from '../Footer/Footer'
import styles from "./App.module.css"

const todoItems = [
  {
    id: 1,
    value: 'Познать HTML/CSS'
  },
  {
    id: 2,
    value: 'Понять JavaScript'
  },
  {
    id: 3,
    value: 'Подружиться с React'
  },
  {
    id: 4,
    value: 'Стать веб-разработчиком'
  }
];

const App = () => (<div className={styles.todo}>
  <h1 className={styles.todo__title}>todos</h1>
  <InputItem />
  <ItemList items={todoItems} />
  <Footer count={todoItems.length} />
</div >
);

export default App;