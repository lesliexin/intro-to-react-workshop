import { Dish } from "./Dish";

function App() {
  return (
    <div> 
      <h1>HTN Restaurant</h1>
      <Dish name="Pizza 🍕" price={10}/>
      <Dish name="Pasta 🍝" price={20}/>
      <Dish name="Soup 🍜" price={15}/>
    </div>
  );
}

export default App;
