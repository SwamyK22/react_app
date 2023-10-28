
import { Provider } from 'react-redux';
import './App.css';
import Home from './reduxToolkit/pages/Home';
import store from './reduxToolkit/redux/store';


function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
