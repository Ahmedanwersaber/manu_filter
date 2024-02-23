import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import container from 'react-bootstrap';
import NavScrollExample from './component/Navbar'
import Bodyitem from './component/Bodyitem'
import Service from './component/Service'
import Headeritem from './component/Header'
import Category from './component/Category';
import ItemsList from './component/ItemsList';
import { item, list } from './component/data';

function App() {
const [itemsData, setitemsData] = useState(item)
const [listitem, setstate] = useState(list)
//filter by category
const filterByCategory = (cat)=>{
  if(cat === 'الكل'){
    setitemsData(item)
  }else{

  
  const newArr = item.filter((item)=> item.category === cat)
  setitemsData(newArr)
  }
}
  return (
    <div className="App">
     <NavScrollExample/> 
<container>

<Bodyitem/>
<br></br>
<h2 className='app-title'>service</h2>
<Service listitem={listitem}/>
<Headeritem/>
<Category filterByCategory={filterByCategory}/>
<ItemsList itemsData={itemsData}/>
<br></br>
</container>
    </div>
  );
}

export default App;
