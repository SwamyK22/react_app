import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store/Store';
import Home from './Components/Home/Home';
import SimpleTodo from './Components/SimpleTodo/SimpleTodo';
import Demo from './Components/Demo/Demo';
import ListTask from './Components/ListTask';


function App() {
  return (
    <Provider store={store}>
      <ListTask />
    </Provider>
  );
}

export default App;
