import React from 'react';
import InputItem from '../InputItem/InputItem'
import ItemList from '../ItemList/ItemList'
import Footer from '../Footer/Footer'

const todoItems = ['Познать HTML/CSS', 'Понять JavaScript', 'Подружиться с React', 'Стать веб-разработчиком'];

const App = () => (<div>
  <h1>todos</h1>
  <InputItem />
  <ItemList items={todoItems} />
  <Footer count={todoItems.length} />
</div>
);

export default App;