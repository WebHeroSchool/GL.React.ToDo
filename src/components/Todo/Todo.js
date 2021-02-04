import { React, useEffect, useState } from 'react';
import InputItem from '../InputItem/InputItem'
import ItemList from '../ItemList/ItemList'
import Footer from '../Footer/Footer'
import FilterGroup from "../FilterGroup/FilterGroup"
import styles from "./Todo.module.css"

const App = () => {
  const state = {
    todoItems: window.localStorage.getItem('Todo.items') ? JSON.parse(window.localStorage.getItem('Todo.items')) : []
    ,
    filterItems: [
      {
        id: 1,
        name: 'Все',
        value: 'All',
        isActive: true
      },
      {
        id: 2,
        name: 'Активные',
        value: 'Active',
        isActive: false
      },
      {
        id: 3,
        name: 'Выполненные',
        value: 'Completed',
        isActive: false
      },
    ],
    lastIdItem: window.localStorage.getItem('Todo.lastIdItem') ? Number(window.localStorage.getItem('Todo.lastIdItem')) : 0,
    sortItems: []
  };

  const [items, setItems] = useState(state.todoItems);
  const [filterItems, setFilterItems] = useState(state.filterItems);
  const [lastIdItem, setLastIdItem] = useState(state.lastIdItem);

  useEffect(() => { }, []);

  useEffect(() => { }, [items]);

  const onClickDone = (id) => {
    const newTodoItems = items.map(item => {
      const newItem = { ...item };

      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }

      return newItem;
    })

    setItems(newTodoItems);
    window.localStorage.setItem('Todo.items', JSON.stringify(newTodoItems));
  };

  const onClickDelete = (id) => {
    const newTodoItems = items.filter(item => item.id !== id)
    setItems(newTodoItems);
    window.localStorage.setItem('Todo.items', JSON.stringify(newTodoItems));
  };

  const onClickAddItem = (value) => {
    const newIdItem = lastIdItem + 1;
    const newTodoItems = [
      ...items,
      {
        id: newIdItem,
        value: value,
        isDone: false
      }
    ];

    setItems(newTodoItems);
    setLastIdItem(newIdItem);
    window.localStorage.setItem('Todo.items', JSON.stringify(newTodoItems));
    window.localStorage.setItem('Todo.lastIdItem', newIdItem);
  };

  const onClickClearCompleted = () => {
    if (items.find(item => { return item.isDone === true })) {
      const newTodoItems = items.filter(item => item.isDone === false)
      setItems(newTodoItems);
      window.localStorage.setItem('Todo.items', JSON.stringify(newTodoItems));
    }
  };

  const onClickFilterChoose = (filterId) => {
    const newFilterItems = filterItems.map(item => {
      const newItem = { ...item };

      if (newItem.id === filterId) {
        newItem.isActive = true;
      }
      else {
        newItem.isActive = false;
      }

      return newItem;
    })

    setFilterItems(newFilterItems);
  };

  let sortingTask;
  function setFilter() {
    let filterIndex = filterItems.findIndex(item => item.isActive === true)

    switch (filterItems[filterIndex].value) {
      case 'Active':
        sortingTask = items.filter(item => item.isDone === false);
        break;
      case 'Completed':
        sortingTask = items.filter(item => item.isDone === true);
        break;
      default:
        sortingTask = items;
        break;
    }
  }

  setFilter();

  return (
    <div className={styles.todo}>
      <h1 className={styles.todo__title}>Список моих задач</h1>
      <InputItem onClickAddItem={onClickAddItem} />
      <FilterGroup
        filterItems={filterItems}
        onClickFilterChoose={onClickFilterChoose}
      />
      <ItemList
        items={sortingTask}
        onClickDone={onClickDone}
        onClickDelete={onClickDelete}
      />
      <Footer
        activeItemCount={items.filter(item => !item.isDone).length}
        onClickClearCompleted={onClickClearCompleted}
      />
    </div>
  );
};

export default App;