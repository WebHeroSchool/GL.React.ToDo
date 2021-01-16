import React from 'react';
import InputItem from '../InputItem/InputItem'
import ItemList from '../ItemList/ItemList'
import Footer from '../Footer/Footer'
import FilterGroup from "../FilterGroup/FilterGroup"
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

const filterItems = [
  {
    id: 1,
    name: 'Все',
    value: 'All'
  },
  {
    id: 2,
    name: 'Активные',
    value: 'Active'
  },
  {
    id: 3,
    name: 'Выполненные',
    value: 'Completed'
  },
];

class App extends React.Component {
  render() {
    return (
      <div className={styles.todo}>
        <h1 className={styles.todo__title}>Список моих дел</h1>
        <InputItem />
        <FilterGroup filterItems={filterItems} />
        <ItemList items={todoItems} />
        <Footer count={todoItems.filter(item => item.isDone).length} />
      </div >
    );
  };
};

export default App;