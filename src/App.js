import './App.css';
import foodItems from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search'
import React, { useState } from 'react';
import { Divider, Input } from 'antd';

function App() {
  const [foods, setFoods] = useState(foodItems);
  const [ searchValue, setSearchValue ] = useState('');

  return (
    <div className="App">

      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <Divider>Food List</Divider>
      <AddFoodForm foods={foods} setFoods={setFoods} />
      <div className="food-list">
        {foods
            .filter((el) =>
              el.name.toUpperCase().includes(searchValue.toUpperCase())
            )
            .map((food) => (
              <FoodBox
                food={food}
                key={food.name}
                foods={foods}
                setFoods={setFoods}
              />
            ))
        }
      </div>
    </div>
  );
}
export default App;