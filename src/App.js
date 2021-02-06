import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Input from './Input';
import Form from './Form';
import Users from './Users';
import Keypress from './Keypress';

function App() {
  return (
    <div className="App">
     <Counter />
     <br />
     <Input />
     <br />
     <Form />
     <br />
     <Users />
     <br />
     <Keypress />
    </div>
  );
}

export default App;
