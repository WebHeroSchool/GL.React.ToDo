import React from 'react';
import InputItem from '../InputItem/InputItem'
import ItemList from '../ItemList/ItemList'
import Footer from '../Footer/Footer'
import FilterGroup from "../FilterGroup/FilterGroup"
import styles from "./App.module.css"

class App extends React.Component {
  state = {
    todoItems: [
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
    ],
    filterItems: [
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
    ],
    inputValue: '',
    lastIdItem: 4
  };

  onClickDone = (id) => {
    const newTodoItems = this.state.todoItems.map(item => {
      const newItem = { ...item };

      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }

      return newItem;
    })

    this.setState({ todoItems: newTodoItems });
  };

  onClickDelete = (id) => {
    const newTodoItems = this.state.todoItems.filter(item => item.id !== id)
    this.setState({ todoItems: newTodoItems });
  };

  onClickAddItem = (value) => {
    this.setState((state) => ({
      todoItems: [
        ...state.todoItems,
        {
          id: state.lastIdItem + 1,
          value: value,
          isDone: false
        }
      ],
      lastIdItem: state.lastIdItem + 1
    }));
  };


  render() {
    return (
      <div className={styles.todo}>
        <h1 className={styles.todo__title}>Список моих задач</h1>
        <InputItem onClickAddItem={this.onClickAddItem} />
        <FilterGroup filterItems={this.state.filterItems} />
        <ItemList
          items={this.state.todoItems}
          onClickDone={this.onClickDone}
          onClickDelete={this.onClickDelete}
        />
        <Footer activeItemCount={this.state.todoItems.filter(item => !item.isDone).length} />
      </div >
    );
  };
};

export default App;