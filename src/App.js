import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store/Store';
import ListTask from './Components/ListTask';
import DemoCustomLs from './DemoCustomLs';
import FetchHook from './DemoHooks/FetchHook';


function App() {
  return (
    <FetchHook />
  );
}

export default App;
