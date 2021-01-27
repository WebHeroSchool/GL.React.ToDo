import { React, useEffect, useState } from 'react';
import InputItem from '../InputItem/InputItem'
import ItemList from '../ItemList/ItemList'
import Footer from '../Footer/Footer'
import FilterGroup from "../FilterGroup/FilterGroup"
import styles from "./Todo.module.css"

function App() {
  const state = {
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
    lastIdItem: 4
  };

  const [items, setItems] = useState(state.todoItems);
  const [filterItems] = useState(state.filterItems);
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
  };

  const onClickDelete = (id) => {
    const newTodoItems = items.filter(item => item.id !== id)
    setItems(newTodoItems);
  };

  const onClickAddItem = (value) => {
    setItems(() => ([
      ...items,
      {
        id: lastIdItem + 1,
        value: value,
        isDone: false
      }
    ]
    ));

    setLastIdItem(lastIdItem + 1);
  };

  const onClickClearCompleted = () => {
    if (items.find(item => { return item.isDone === true })) {
      setItems(items.filter(item => item.isDone === false));
    }
  };

  return (
    <div className={styles.todo}>
      <h1 className={styles.todo__title}>Список моих задач</h1>
      <InputItem onClickAddItem={onClickAddItem} />
      <FilterGroup filterItems={filterItems} />
      <ItemList
        items={items}
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