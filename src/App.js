import './App.css';
import { Navbar } from './compnents/Navbar';
import  UserList  from './compnents/UserList';
//redux
import {Provider} from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <UserList />
    </Provider>
  );
}

export default App;
