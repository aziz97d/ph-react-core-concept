// import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const products = [
    {name:'Photoshop',price:'$60'},
    {name:'Illustrator',price:'$50'},
    {name:'Adobe XD',price:'$50'},
    {name:'Adobe XD',price:'$50'}
  ]
  return (
    <div className="App">
      <header className="App-header" >
        <Counter></Counter>
        <Users></Users>
      {
        products.map(product => <Product product={product}></Product>)
      }
      </header>
    </div>
  );
}
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return (
    <div>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  );
}
function Counter(){
  const [count,setState] = useState(10);
  const increaseCount = () => setState(count+1);
  return (
    <div>
      <h3>Count : {count}</h3>
      <button onClick={() => setState(count-1)}>Decrease</button>
      <button onMouseOver={() => setState(count+1)}>Increase</button>
    </div>
  )
}
function Product(props){
  const productStyle={
    border:'2px solid red',
    height:'200px',
    width:'200px',
    
  }
  const {name,price}=props.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h4>{price}</h4>
    </div>
  )
}

export default App;
