import Cards from "./Cards/Cards";
import "./App.css";


function App() {
  let value=prompt('Enter the value to display Cards such as (success,warn,error,info)');
  // console.log(value);
  return <div className="background">
      <Cards value={value}/>
  </div>
}

export default App;